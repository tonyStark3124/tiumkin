const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// הגדרות - שנה את הנתיבים לפי הפרויקט שלך
const inputDir = './public/assets/image'; // איפה שהתמונות המקוריות נמצאות
const outputDir = './public/assets/optimized'; // איפה שהתמונות המוכנות יישמרו

// יצירת תיקיית פלט אם היא לא קיימת
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// פונקציה לעיבוד תמונות
async function optimizeImages() {
    try {
        const files = fs.readdirSync(inputDir);

        for (const file of files) {
            const inputFilePath = path.join(inputDir, file);
            const fileExt = path.extname(file).toLowerCase();
            
            // מטפל רק בקבצי תמונה נפוצים
            if (['.jpg', '.jpeg', '.png'].includes(fileExt)) {
                const fileName = path.parse(file).name;
                const outputFilePath = path.join(outputDir, `${fileName}.webp`);

                await sharp(inputFilePath)
                    .resize(1200) // מגביל רוחב מקסימלי ל-1200px (אופציונלי)
                    .webp({ quality: 75 }) // הופך ל-WebP עם 75% איכות (איזון מושלם)
                    .toFile(outputFilePath);

                console.log(`✅ Optimized: ${file} -> ${fileName}.webp`);
            }
        }
        console.log('--- הסתיים בהצלחה! כל התמונות מוכנות ---');
    } catch (err) {
        console.error('❌ אופס, משהו השתבש:', err);
    }
}

optimizeImages();