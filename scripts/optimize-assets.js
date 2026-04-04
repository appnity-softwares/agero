import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { glob } from 'glob';

const MIN_SIZE_KB = 100; // Only process files larger than 100KB
const COMPRESSION_QUALITY = {
    jpeg: 80,
    png: { compressionLevel: 8, palette: true },
    webp: { quality: 80 },
    avif: { quality: 50 }, // Aggressive compression for AVIF
};

async function optimizeImages() {
    const images = await glob('src/**/*.{png,jpg,jpeg,webp,avif}');
    let totalSaved = 0;

    console.log(`Found ${images.length} images. Checking for optimization candidates (> ${MIN_SIZE_KB}KB)...`);

    for (const file of images) {
        const filePath = path.resolve(file);
        const stats = fs.statSync(filePath);
        const sizeKB = stats.size / 1024;

        if (sizeKB < MIN_SIZE_KB) continue;

        const ext = path.extname(file).toLowerCase().replace('.', '');
        const format = ext === 'jpg' ? 'jpeg' : ext;

        if (!['jpeg', 'png', 'webp', 'avif'].includes(format)) continue;

        console.log(`Optimizing ${file} (${sizeKB.toFixed(2)} KB)...`);

        try {
            let pipeline = sharp(filePath);

            //Apply compression based on format
            if (format === 'jpeg') {
                pipeline = pipeline.jpeg({ quality: COMPRESSION_QUALITY.jpeg });
            } else if (format === 'png') {
                pipeline = pipeline.png(COMPRESSION_QUALITY.png);
            } else if (format === 'webp') {
                pipeline = pipeline.webp(COMPRESSION_QUALITY.webp);
            } else if (format === 'avif') {
                pipeline = pipeline.avif(COMPRESSION_QUALITY.avif);
            }

            const buffer = await pipeline.toBuffer();
            const newSizeKB = buffer.length / 1024;

            if (newSizeKB < sizeKB) {
                fs.writeFileSync(filePath, buffer);
                const saved = sizeKB - newSizeKB;
                totalSaved += saved;
                console.log(`✅ Optimized: ${file} (${sizeKB.toFixed(2)} KB -> ${newSizeKB.toFixed(2)} KB). Saved ${saved.toFixed(2)} KB.`);
            } else {
                console.log(`⚠️ Skipped: ${file} (Optimization resulted in larger file).`);
            }
        } catch (error) {
            console.error(`❌ Error optimizing ${file}:`, error.message);
        }
    }

    console.log(`\n🎉 Total space saved: ${(totalSaved / 1024).toFixed(2)} MB`);
}

optimizeImages();
