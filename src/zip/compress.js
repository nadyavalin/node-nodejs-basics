import { createReadStream, createWriteStream } from "fs";
import { createGzip } from "zlib";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { pipeline } from "stream/promises";

const __dirname = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(__dirname, "files");
const inputFilePath = join(sourcePath, "fileToCompress.txt");
const outputFilePath = join(sourcePath, "archive.gz");

const compress = async () => {
  const readStream = createReadStream(inputFilePath);
  const gzipStream = createGzip();
  const writeStream = createWriteStream(outputFilePath);
  await pipeline(readStream, gzipStream, writeStream);
};

await compress();
