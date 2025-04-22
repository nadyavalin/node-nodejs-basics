import { Worker } from "worker_threads";
import { cpus } from "os";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const workerPath = join(__dirname, "worker.js");

const performCalculations = async () => {
  const cpuCount = cpus().length;
  const numbers = Array.from({ length: cpuCount }, (_, i) => 10 + i);
  const workerPromises = numbers.map(
    (n) =>
      new Promise((resolve) => {
        const worker = new Worker(workerPath, { workerData: n });
        worker.on("message", (data) => {
          resolve({ status: "resolved", data });
        });
        worker.on("error", () => {
          resolve({ status: "error", data: null });
        });
        worker.on("exit", (code) => {
          if (code !== 0) resolve({ status: "error", data: null });
        });
      })
  );
  const results = await Promise.all(workerPromises);
  console.log(results);
};

await performCalculations();
