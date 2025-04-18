import fs from "fs/promises";
import path from "path";

const folderPath = path.join("src", "fs", "files");

const list = async () => {
  try {
    await fs.access(folderPath);
    const files = await fs.readdir(folderPath);
    console.log(files);
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error("FS operation failed");
    }
  }
};

await list();
