import { Transform } from "stream";
import { pipeline } from "stream/promises";

const transformStream = new Transform({
  transform(chunk, _, callback) {
    const reversed = chunk.toString().split("").reverse().join("");
    callback(null, reversed);
  },
});

const transform = async () => {
  console.log("Write the line you want to reverse:");
  await pipeline(process.stdin, transformStream, process.stdout);
};

await transform();
