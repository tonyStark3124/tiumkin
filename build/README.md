This folder contains placeholder images for the course cards.

-- Place real course images here following the naming convention `course-1.png`, `course-2.png`, ... `course-6.png`.
-- Recommended sizes: at least 1200x800 for good retina display cropping. Use PNG with transparent background (preferred) or WebP/JPEG as fallback.
-- The app will attempt to load a PNG first (`/assets/course-#.png`) and fall back to the SVG if PNG is not present. The current placeholders are transparent SVGs; replace them with PNGs of the same name if you want raster images.

How to create transparent PNGs from the SVG placeholders:
- Using ImageMagick (if installed):
	- `magick convert public/assets/course-1.svg -background none public/assets/course-1.png`
- Using `sharp` (Node.js):
	- Install: `npm install sharp`
	- Script example:
		```js
		const sharp = require('sharp');
		sharp('public/assets/course-1.svg').png({compressionLevel:9}).toFile('public/assets/course-1.png');
		```

