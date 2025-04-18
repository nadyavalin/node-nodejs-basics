import fs from "fs/promises";
import path from "path";

const sourcePath = path.join('src', 'fs', 'files');
const destinationPath = path.join('src', 'fs', 'files_copy');

const copy = async () => {
  try {
    await fs.access(sourcePath);
    try {
      await fs.access(destinationPath);
      throw new Error('FS operation failed');
    } catch (error) {
      if (error.code !== 'ENOENT') {
        throw error;
      }
    }
    await fs.cp(sourcePath, destinationPath, { recursive: true });
  } catch (error) {
    if (error.code === 'ENOENT' || error.message === 'FS operation failed') {
      throw new Error('FS operation failed');
    }
  }
};

await copy();
