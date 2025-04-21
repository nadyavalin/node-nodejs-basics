import { createWriteStream } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { pipeline } from "stream/promises";

const __dirname = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(__dirname, "files");
const filePath = join(sourcePath, "fileToWrite.txt");

const write = async () => {
  const stream = createWriteStream(filePath);
  await pipeline(process.stdin, stream);
};

await write();
