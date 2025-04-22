import { spawn } from "child_process";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const scriptPath = join(__dirname, "files", "script.js");

const spawnChildProcess = async (args) => {
  const child = spawn("node", [scriptPath, ...args], {
    stdio: ["pipe", "pipe", "inherit"],
  });
  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);
};

spawnChildProcess(["arg1", "arg2", "arg3", "arg4", "arg5"]);
