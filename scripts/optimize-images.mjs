import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(process.cwd(), "public");
const exts = new Set([".jpg", ".jpeg", ".png"]);

async function* walk(dir) {
  for (const dirent of await fs.readdir(dir, { withFileTypes: true })) {
    const res = path.resolve(dir, dirent.name);
    if (dirent.isDirectory()) yield* walk(res);
    else yield res;
  }
}

async function optimize(file) {
  const ext = path.extname(file).toLowerCase();
  if (!exts.has(ext)) return;
  const buf = await fs.readFile(file);
  let pipeline = sharp(buf).rotate();
  if (ext === ".png") {
    pipeline = pipeline.png({ quality: 82, palette: true });
  } else {
    pipeline = pipeline.jpeg({ quality: 82, progressive: true, mozjpeg: true });
  }
  const out = await pipeline.toBuffer();
  if (out.length < buf.length) {
    await fs.writeFile(file, out);
    process.stdout.write(
      `optimized: ${path.relative(ROOT, file)} (${buf.length} -> ${out.length} bytes)\n`,
    );
  }
  const webpOut = await sharp(out).webp({ quality: 80 }).toBuffer();
  const webpPath = file.replace(ext, ".webp");
  await fs.writeFile(webpPath, webpOut);
}

(async () => {
  for await (const f of walk(ROOT)) {
    await optimize(f);
  }
})();
