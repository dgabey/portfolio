import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

const distPath = join(process.cwd(), 'dist');
const indexPath = join(distPath, 'index.html');
const notFoundPath = join(distPath, '404.html');

// Check if dist directory exists
if (!existsSync(distPath)) {
  console.error('Error: dist directory does not exist. Please run build first.');
  process.exit(1);
}

// Check if index.html exists
if (!existsSync(indexPath)) {
  console.error('Error: index.html does not exist in dist directory.');
  process.exit(1);
}

try {
  // Read index.html
  const indexContent = readFileSync(indexPath, 'utf-8');
  
  // Write to 404.html
  writeFileSync(notFoundPath, indexContent, 'utf-8');
  
  console.log('✓ Successfully created 404.html for GitHub Pages');
} catch (error) {
  console.error('Error generating 404.html:', error);
  process.exit(1);
}



