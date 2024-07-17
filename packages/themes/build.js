import run from "@portfolio/esbuild-config";
import pkg from "./package.json" assert { type: "json" };

run({
  pkg,
});
