import { createRequire } from "node:module";
import { readFile, mkdir, copyFile, chmod } from "node:fs/promises";
import path from "node:path";

const require = createRequire(import.meta.url);
const platform = { linux: "linux", darwin: "darwin", win32: "windows" }[process.platform];
if (!platform) throw new Error(`Unsupported Impeccable platform: ${process.platform}`);

const packageName = `@impeccable/cli-${platform}-${process.arch}`;
const packagePath = require.resolve(`${packageName}/package.json`);
const platformPackage = JSON.parse(await readFile(packagePath, "utf8"));
const executable = platform === "windows" ? "impeccable.exe" : "impeccable";
const source = path.join(path.dirname(packagePath), "bin", executable);

for (const provider of [".agents", ".claude"]) {
  const scripts = path.resolve(provider, "skills/impeccable/scripts");
  const version = (await readFile(path.join(scripts, "VERSION"), "utf8")).trim();
  if (platformPackage.version !== version) {
    throw new Error(`Impeccable engine ${platformPackage.version} does not match ${provider} skill engine ${version}`);
  }
  const destination = path.join(scripts, "bin", `${platform}-${process.arch}`, executable);
  await mkdir(path.dirname(destination), { recursive: true });
  await copyFile(source, destination);
  if (platform !== "windows") await chmod(destination, 0o755);
  console.log(`Prepared Impeccable ${version} for ${provider} from the locked npm platform package.`);
}
