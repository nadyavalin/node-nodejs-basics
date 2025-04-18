import fs from "fs/promises";
import path from "path";

const filePath = path.join("src", "fs", "files", "fresh.txt");

const create = async () => {
  try {
    await fs.writeFile(filePath, "I am fresh and young", { flag: 'wx' });
  } catch (error) {
    if (error.code === "EEXIST") {
      throw new Error("FS operation failed");
    }
  }
};

await create();
