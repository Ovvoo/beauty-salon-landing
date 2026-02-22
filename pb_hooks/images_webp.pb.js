/// <reference path="../pb_data/types.d.ts" />

/**
 * PocketBase Hook: Auto-convert uploaded images to WebP
 *
 * DISABLED — kept as reference for future implementation.
 *
 * Why disabled:
 * 1. PB 0.36+: file-scope var/function NOT visible in hook callbacks (isolated scope)
 *    → Original code used file-scope functions → ReferenceError → e.next() never called → 400
 * 2. PB validates files on $app.save() — files created on disk via cwebp are rejected
 *    → "Invalid new files" error
 * 3. Proper WebP conversion needs PB's file upload API, not direct disk manipulation
 *
 * On VPS: renamed to images_webp.pb.js.disabled (not loaded by PB)
 *
 * If re-implementing, consider:
 * - Use $filesystem.fileFromPath() to create proper file objects
 * - Or convert images at build/upload time outside PB hooks
 * - All logic MUST be inside the hook callback (PB 0.36 scope isolation)
 * - Storage path uses collection().id, not collection().name
 */
