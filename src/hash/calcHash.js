import { createReadStream } from "fs";
import { createHash } from "crypto";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { pipeline } from "stream/promises";

const __dirname = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(__dirname, "files");
const filePath = join(sourcePath, "fileToCalculateHashFor.txt");

const calculateHash = async () => {
  const stream = createReadStream(filePath);
  const hash = createHash("sha256");
  await pipeline(stream, hash);
  const result = hash.digest("hex");
  console.log(result);
};

await calculateHash();
