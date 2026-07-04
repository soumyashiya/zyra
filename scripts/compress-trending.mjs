/* One-off: compress the /assets/images/trending media in place so the
   Deals page loads fast. Run with `node scripts/compress-trending.mjs`. */
import { readdirSync, readFileSync, writeFileSync, renameSync, statSync } from 'node:fs'
import { join, extname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { execFileSync } from 'node:child_process'
import sharp from 'sharp'
import ffmpegPath from 'ffmpeg-static'

const DIR = join(fileURLToPath(new URL('.', import.meta.url)), '..', 'src', 'assets', 'images', 'trending')
const MAX_DIM = 2000
const kb = (n) => (n / 1024).toFixed(0) + ' KB'

for (const file of readdirSync(DIR)) {
  const ext = extname(file).toLowerCase()
  const path = join(DIR, file)
  const before = statSync(path).size

  if (ext === '.jpg' || ext === '.jpeg') {
    const buf = await sharp(readFileSync(path))
      .rotate()
      .resize({ width: MAX_DIM, height: MAX_DIM, fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: 72, mozjpeg: true })
      .toBuffer()
    writeFileSync(path, buf)
    console.log(`${file}: ${kb(before)} -> ${kb(buf.length)}`)
  } else if (ext === '.mp4') {
    const tmp = path + '.tmp.mp4'
    execFileSync(ffmpegPath, [
      '-y', '-i', path,
      '-vf', "scale='min(1280,iw)':-2",
      '-c:v', 'libx264', '-crf', '30', '-preset', 'veryfast',
      '-an', '-movflags', '+faststart',
      tmp,
    ], { stdio: 'ignore' })
    renameSync(tmp, path)
    console.log(`${file}: ${kb(before)} -> ${kb(statSync(path).size)}`)
  } else {
    console.log(`${file}: skipped (${kb(before)})`)
  }
}
