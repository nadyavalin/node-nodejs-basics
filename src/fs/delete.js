import fs from "fs/promises";
import path from "path";

const filePath = path.join("src", "fs", "files", "fileToRemove.txt");

const remove = async () => {
  try {
    await fs.access(filePath);
    await fs.unlink(filePath);
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error("FS operation failed");
    }
  }
};

await remove();
