import { createReadStream } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { once } from "events";

const __dirname = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(__dirname, "files");
const filePath = join(sourcePath, "fileToRead.txt");

const read = async () => {
  const stream = createReadStream(filePath);
  stream.pipe(process.stdout);
  await once(stream, "end");
  console.log();
};

await read();
