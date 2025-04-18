import fs from "fs/promises";
import path from "path";

const filePath = path.join("src", "fs", "files", "fileToRead.txt");

const read = async () => {
  try {
    await fs.access(filePath);
    const content = await fs.readFile(filePath, "utf8");
    console.log(content);
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error("FS operation failed");
    }
  }
};

await read();
