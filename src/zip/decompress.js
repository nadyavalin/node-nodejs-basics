import { createReadStream, createWriteStream } from "fs";
import { createGunzip } from "zlib";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { pipeline } from "stream/promises";

const __dirname = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(__dirname, "files");
const inputFilePath = join(sourcePath, "archive.gz");
const outputFilePath = join(sourcePath, "fileToCompress.txt");

const decompress = async () => {
  const readStream = createReadStream(inputFilePath);
  const gunzipStream = createGunzip();
  const writeStream = createWriteStream(outputFilePath);
  await pipeline(readStream, gunzipStream, writeStream);
};

await decompress();
