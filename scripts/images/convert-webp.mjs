/**
 * Image → WebP Converter
 *
 * Converts JPEG/PNG images to WebP format using Sharp.
 * Reusable across projects — copy this file and adjust DEFAULTS.
 *
 * Usage:
 *   node scripts/images/convert-webp.mjs [input-dir] [options]
 *
 *   # Convert project static assets:
 *   node scripts/images/convert-webp.mjs src/assets
 *
 *   # Custom quality (0-100, default 80):
 *   node scripts/images/convert-webp.mjs src/assets --quality 85
 *
 *   # Limit max width (preserves aspect ratio):
 *   node scripts/images/convert-webp.mjs src/assets --max-width 1920
 *
 *   # Convert PocketBase uploads on VPS:
 *   node scripts/images/convert-webp.mjs /opt/myapp/pb_data/storage --recursive
 *
 * Requires: npm install --save-dev sharp
 *
 * Best practices (2026):
 * - WebP quality 80 = ~30% smaller than JPEG at equivalent visual quality
 * - effort 4 = optimal speed/compression balance for build pipelines
 * - smartSubsample = better chroma encoding (recommended by Sharp docs)
 * - preset "photo" = optimized for photographic content
 */

import sharp from "sharp";
import { readdir, stat, mkdir } from "node:fs/promises";
import { resolve, join, parse, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { existsSync } from "node:fs";

const __dirname = parse(fileURLToPath(import.meta.url)).dir;
const PROJECT_ROOT = resolve(__dirname, "../..");

// ── Configuration ────────────────────────────────────────────────
// Adjust these defaults per project. CLI args override them.
const DEFAULTS = {
  inputDir: "src/assets",
  quality: 80,
  effort: 4,
  maxWidth: 1920,
  preset: "photo",
  smartSubsample: true,
  recursive: false,
  extensions: [".jpg", ".jpeg", ".png"],
};

// ── CLI Argument Parser ──────────────────────────────────────────

function parseArgs(argv) {
  const args = { ...DEFAULTS };
  const positional = [];

  for (let i = 2; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === "--quality" && argv[i + 1]) {
      args.quality = parseInt(argv[++i], 10);
    } else if (arg === "--effort" && argv[i + 1]) {
      args.effort = parseInt(argv[++i], 10);
    } else if (arg === "--max-width" && argv[i + 1]) {
      args.maxWidth = parseInt(argv[++i], 10);
    } else if (arg === "--recursive") {
      args.recursive = true;
    } else if (arg === "--help" || arg === "-h") {
      printHelp();
      process.exit(0);
    } else if (!arg.startsWith("--")) {
      positional.push(arg);
    }
  }

  if (positional.length > 0) {
    args.inputDir = positional[0];
  }

  return args;
}

function printHelp() {
  console.log(`
Image → WebP Converter

Usage: node scripts/images/convert-webp.mjs [input-dir] [options]

Options:
  --quality N      WebP quality 0-100 (default: ${DEFAULTS.quality})
  --effort N       Compression effort 0-6 (default: ${DEFAULTS.effort})
  --max-width N    Max output width in px (default: ${DEFAULTS.maxWidth})
  --recursive      Process subdirectories
  -h, --help       Show this help
`);
}

// ── File Scanner ─────────────────────────────────────────────────

async function findImages(dir, extensions, recursive) {
  const absDir = resolve(PROJECT_ROOT, dir);
  if (!existsSync(absDir)) {
    console.error(`Directory not found: ${absDir}`);
    process.exit(1);
  }

  const results = [];
  const entries = await readdir(absDir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = join(absDir, entry.name);
    if (entry.isDirectory() && recursive) {
      const subResults = await findImages(
        relative(PROJECT_ROOT, fullPath),
        extensions,
        recursive
      );
      results.push(...subResults);
    } else if (entry.isFile()) {
      const ext = parse(entry.name).ext.toLowerCase();
      if (extensions.includes(ext)) {
        results.push(fullPath);
      }
    }
  }

  return results;
}

// ── Converter ────────────────────────────────────────────────────

async function convertToWebP(inputPath, config) {
  const { dir, name } = parse(inputPath);
  const outputPath = join(dir, `${name}.webp`);

  const inputStats = await stat(inputPath);
  const inputSize = inputStats.size;

  let pipeline = sharp(inputPath);

  // Resize if wider than maxWidth (preserves aspect ratio)
  const metadata = await sharp(inputPath).metadata();
  if (metadata.width && metadata.width > config.maxWidth) {
    pipeline = pipeline.resize(config.maxWidth, null, {
      withoutEnlargement: true,
    });
  }

  await pipeline
    .webp({
      quality: config.quality,
      effort: config.effort,
      smartSubsample: config.smartSubsample,
      preset: config.preset,
    })
    .toFile(outputPath);

  const outputStats = await stat(outputPath);
  const outputSize = outputStats.size;
  const savings = ((1 - outputSize / inputSize) * 100).toFixed(1);

  return {
    input: inputPath,
    output: outputPath,
    inputSize,
    outputSize,
    savings: parseFloat(savings),
    width: metadata.width,
    height: metadata.height,
  };
}

// ── Formatters ───────────────────────────────────────────────────

function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  return `${(bytes / 1024).toFixed(1)} KB`;
}

function formatRow(name, inputSize, outputSize, savings) {
  const nameCol = name.padEnd(24);
  const inputCol = formatSize(inputSize).padStart(10);
  const outputCol = formatSize(outputSize).padStart(10);
  const savingsCol = `${savings > 0 ? "-" : "+"}${Math.abs(savings)}%`.padStart(8);
  return `  ${nameCol} ${inputCol} → ${outputCol} ${savingsCol}`;
}

// ── Main ─────────────────────────────────────────────────────────

async function main() {
  const config = parseArgs(process.argv);

  console.log(`WebP Converter`);
  console.log(`  Input:   ${config.inputDir}`);
  console.log(`  Quality: ${config.quality} | Effort: ${config.effort}`);
  console.log(`  Max width: ${config.maxWidth}px`);
  console.log("");

  const images = await findImages(
    config.inputDir,
    config.extensions,
    config.recursive
  );

  if (images.length === 0) {
    console.log("No images found.");
    return;
  }

  console.log(`Found ${images.length} image(s)\n`);

  let totalInput = 0;
  let totalOutput = 0;
  const results = [];

  for (const imagePath of images) {
    try {
      const result = await convertToWebP(imagePath, config);
      results.push(result);
      totalInput += result.inputSize;
      totalOutput += result.outputSize;

      const name = parse(result.input).base;
      console.log(
        formatRow(name, result.inputSize, result.outputSize, result.savings)
      );
    } catch (err) {
      console.error(`  Error: ${parse(imagePath).base} — ${err.message}`);
    }
  }

  // Summary
  const totalSavings = ((1 - totalOutput / totalInput) * 100).toFixed(1);
  console.log("");
  console.log(`${"─".repeat(60)}`);
  console.log(
    formatRow("TOTAL", totalInput, totalOutput, parseFloat(totalSavings))
  );
  console.log(
    `\n  Saved ${formatSize(totalInput - totalOutput)} across ${results.length} file(s)`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
