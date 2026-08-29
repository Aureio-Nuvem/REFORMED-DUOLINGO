/** Roda os testes: transpila os módulos e executa as suítes. */
import { execFileSync } from "node:child_process";
import { mkdirSync, rmSync } from "node:fs";

mkdirSync(".tmp-test", { recursive: true });
const build = (src, out) =>
  execFileSync("npx", ["esbuild", src, "--format=esm", `--outfile=.tmp-test/${out}`, "--log-level=error"], { stdio: "inherit" });

build("worker/auth.ts", "auth.mjs");
build("src/engine/merge.ts", "merge.mjs");
execFileSync("npx", ["esbuild", "src/engine/medals.ts", "--bundle", "--format=esm",
  "--outfile=.tmp-test/medals.mjs", "--log-level=error"], { stdio: "inherit" });

let failed = false;
for (const suite of ["tests/auth.test.mjs", "tests/merge.test.mjs", "tests/medals.test.mjs"]) {
  console.log(`\n— ${suite}`);
  try { execFileSync("node", [suite], { stdio: "inherit" }); }
  catch { failed = true; }
}
rmSync(".tmp-test", { recursive: true, force: true });
process.exit(failed ? 1 : 0);
