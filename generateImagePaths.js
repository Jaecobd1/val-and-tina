import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');
const path = require('path');

// Define the directory with your images
const imageDir = path.join(process.cwd(), 'public', 'photos');

// Read the directory
fs.readdir(imageDir, (err, files) => {
  if (err) {
    console.error('Could not list the directory.', err);
    process.exit(1);
  }

  // Filter out non-image files
  const imageFiles = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif';
  });

  // Create an array of image paths
  const imagePaths = imageFiles.map(file => `/photos/${file}`);

  // Write the array to a JSON file
  fs.writeFile('imagePaths.json', JSON.stringify(imagePaths, null, 2), 'utf8', err => {
    if (err) {
      console.error('Error writing file', err);
    } else {
      console.log('Successfully wrote file');
    }
  });
});
