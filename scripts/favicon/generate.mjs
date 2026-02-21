/**
 * SVG Favicon Generator
 *
 * Generates an SVG favicon from text characters and brand colors.
 * Reusable across projects — copy this folder and adjust COLORS + CONFIG.
 *
 * Usage:
 *   node scripts/favicon/generate.mjs
 *
 * Colors reference the design system in src/index.css (CSS variables).
 * Re-run after any design system color change to keep favicon in sync.
 *
 * For font-independent rendering (SVG paths instead of <text>),
 * consider opentype.js: https://github.com/opentypejs/opentype.js
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = resolve(__dirname, "../..");

// ── Design System Colors ─────────────────────────────────────────
// Source of truth: src/index.css CSS variables
// These hex values are computed from the HSL values below.
// If CSS variables change → update HSL here → hex auto-verified.
const COLORS = {
  primary: { name: "Burgundy", hsl: [355, 44, 32], hex: "#762E34" },
  gold:    { name: "Gold",     hsl: [43, 56, 52],  hex: "#C9A240" },
};

// ── Favicon Configuration ────────────────────────────────────────
const CONFIG = {
  chars: [
    { char: "B", color: COLORS.primary.hex }, // "Beauty"
    { char: "B", color: COLORS.gold.hex },    // "Begin"
  ],
  size: 512,
  fontFamily: "Montserrat, 'Trebuchet MS', 'Segoe UI', Arial, sans-serif",
  fontWeight: 800,
  fontSize: 340,
  letterSpacing: -20,
  output: "public/favicon.svg",
};

// ── HSL → Hex Converter ──────────────────────────────────────────

/**
 * Converts HSL color to hex string.
 * @param {number} h Hue (0-360)
 * @param {number} s Saturation (0-100)
 * @param {number} l Lightness (0-100)
 * @returns {string} Hex color, e.g. "#762E34"
 */
function hslToHex(h, s, l) {
  s /= 100;
  l /= 100;

  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs((h / 60) % 2 - 1));
  const m = l - c / 2;

  let r = 0, g = 0, b = 0;

  if (h < 60)       { r = c; g = x; }
  else if (h < 120) { r = x; g = c; }
  else if (h < 180) { g = c; b = x; }
  else if (h < 240) { g = x; b = c; }
  else if (h < 300) { r = x; b = c; }
  else              { r = c; b = x; }

  const toHex = (v) =>
    Math.round((v + m) * 255)
      .toString(16)
      .padStart(2, "0");

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
}

// ── SVG Builder ──────────────────────────────────────────────────

/**
 * Builds SVG favicon markup from configuration.
 * @param {typeof CONFIG} cfg
 * @returns {string} SVG markup
 */
function buildSvg(cfg) {
  const { chars, size, fontFamily, fontWeight, fontSize, letterSpacing } = cfg;

  const tspans = chars
    .map(({ char, color }) => `<tspan fill="${color}">${char}</tspan>`)
    .join("");

  // Vertical centering: cap height ~ 0.7 * fontSize
  const capHeight = fontSize * 0.7;
  const yBaseline = Math.round((size + capHeight) / 2);

  return [
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}">`,
    `  <text`,
    `    font-family="${fontFamily}"`,
    `    font-weight="${fontWeight}"`,
    `    font-size="${fontSize}"`,
    `    letter-spacing="${letterSpacing}"`,
    `    text-anchor="middle"`,
    `    x="${size / 2}" y="${yBaseline}">`,
    `    ${tspans}`,
    `  </text>`,
    `</svg>`,
    "",
  ].join("\n");
}

// ── Main ─────────────────────────────────────────────────────────

function main() {
  // Verify hex colors match HSL values
  let hasWarning = false;
  for (const [key, { name, hsl, hex }] of Object.entries(COLORS)) {
    const computed = hslToHex(...hsl);
    if (computed !== hex.toUpperCase()) {
      console.warn(
        `Warning: ${key} (${name}) hex mismatch — config: ${hex}, computed from HSL: ${computed}`
      );
      hasWarning = true;
    }
  }

  const outputPath = resolve(PROJECT_ROOT, CONFIG.output);
  mkdirSync(dirname(outputPath), { recursive: true });

  const svg = buildSvg(CONFIG);
  writeFileSync(outputPath, svg, "utf-8");

  const label = CONFIG.chars.map((c) => c.char).join("");
  const colors = CONFIG.chars
    .map((c, i) => {
      const colorEntry = Object.values(COLORS)[i];
      return `${c.color} (${colorEntry?.name ?? "custom"})`;
    })
    .join(" + ");

  console.log(`Favicon generated: ${CONFIG.output}`);
  console.log(`  Text: "${label}" | Colors: ${colors}`);
  console.log(`  Size: ${CONFIG.size}x${CONFIG.size}`);
  console.log(`  Font: ${CONFIG.fontFamily.split(",")[0]}`);

  if (hasWarning) {
    console.log("\nFix COLORS hex values to match the computed HSL values above.");
  }
}

main();
