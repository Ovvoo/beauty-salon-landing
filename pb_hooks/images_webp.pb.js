/// <reference path="../pb_data/types.d.ts" />

/**
 * PocketBase Hook: Auto-convert uploaded images to WebP
 *
 * Converts course images to WebP on upload for faster page loads.
 * Requires `cwebp` on the VPS: apt install webp
 *
 * Deploy: copy to /opt/pocketbase/pb_hooks/ on the VPS
 *
 * How it works:
 * 1. Admin uploads a JPEG/PNG image to a course record
 * 2. After record creation/update, this hook runs
 * 3. Finds the uploaded image file in PocketBase storage
 * 4. Converts it to WebP using cwebp (libwebp CLI)
 * 5. Replaces the original file with the WebP version
 *
 * If cwebp is not installed, the hook silently skips conversion.
 */

// Configuration — adjust per project
var WEBP_QUALITY = 80;
var COLLECTIONS_WITH_IMAGES = ["courses"];
var IMAGE_FIELDS = ["image"];
var IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png"];

function hasImageExtension(filename) {
  var lower = filename.toLowerCase();
  for (var i = 0; i < IMAGE_EXTENSIONS.length; i++) {
    if (lower.endsWith(IMAGE_EXTENSIONS[i])) return true;
  }
  return false;
}

function convertToWebP(record, collection, field) {
  var filename = record.get(field);
  if (!filename || !hasImageExtension(filename)) return;

  // Skip if already WebP (prevents redundant processing on recursive hook call)
  if (filename.toLowerCase().endsWith(".webp")) return;

  // PocketBase storage path: pb_data/storage/<collection>/<record>/<filename>
  var storagePath =
    $os.getenv("PB_DATA_DIR") ||
    "/opt/pocketbase/pb_data";
  var filePath =
    storagePath +
    "/storage/" +
    collection +
    "/" +
    record.id +
    "/" +
    filename;

  // Output WebP path (same directory, .webp extension)
  var baseName = filename.replace(/\.[^.]+$/, "");
  var webpFilename = baseName + ".webp";
  var webpPath =
    storagePath +
    "/storage/" +
    collection +
    "/" +
    record.id +
    "/" +
    webpFilename;

  try {
    // Check if cwebp is available
    $os.exec("which", ["cwebp"]);
  } catch (e) {
    // cwebp not installed — skip silently
    return;
  }

  try {
    $os.exec("cwebp", [
      "-q", String(WEBP_QUALITY),
      "-m", "4",
      filePath,
      "-o", webpPath,
    ]);

    // Update record to point to WebP file
    record.set(field, webpFilename);
    $app.save(record);
  } catch (e) {
    // Log error but don't break the upload
    console.log(
      "WebP conversion failed for " + filename + ": " + e.message
    );
  }
}

// Hook: after course create
onRecordCreateExecute((e) => {
  for (var i = 0; i < IMAGE_FIELDS.length; i++) {
    convertToWebP(e.record, e.record.collection().name, IMAGE_FIELDS[i]);
  }
  e.next();
}, COLLECTIONS_WITH_IMAGES.join(","));

// Hook: after course update
onRecordUpdateExecute((e) => {
  for (var i = 0; i < IMAGE_FIELDS.length; i++) {
    convertToWebP(e.record, e.record.collection().name, IMAGE_FIELDS[i]);
  }
  e.next();
}, COLLECTIONS_WITH_IMAGES.join(","));
