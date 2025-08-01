import { build } from "esbuild";
import fs from "fs";
import path from "path";

const buildDir = "./static/dist";
const srcDir = "./src/client";

// Ensure build directory exists
if (!fs.existsSync(buildDir)) {
  fs.mkdirSync(buildDir, { recursive: true });
}

// Ensure source directory exists
if (!fs.existsSync(srcDir)) {
  fs.mkdirSync(srcDir, { recursive: true });
}

async function buildClientLibraries() {
  console.log("Building client-side libraries...");

  try {
    // Build main client bundle
    await build({
      entryPoints: [path.join(srcDir, "main.js")],
      bundle: true,
      outfile: path.join(buildDir, "main.js"),
      format: "iife",
      globalName: "App",
      minify: process.env.NODE_ENV === "production",
      sourcemap: process.env.NODE_ENV !== "production",
      platform: "browser",
      target: "es2020",
      external: [],
      define: {
        "process.env.NODE_ENV": `"${process.env.NODE_ENV || "development"}"`,
      },
    });

    // Build ROM patcher bundle separately (since it might be large)
    await build({
      entryPoints: [path.join(srcDir, "rom-patcher.mjs")],
      bundle: true,
      outfile: path.join(buildDir, "rom-patcher.js"),
      format: "iife",
      globalName: "RomPatcherClient",
      minify: process.env.NODE_ENV === "production",
      sourcemap: process.env.NODE_ENV !== "production",
      platform: "browser",
      target: "es2020",
    });

    console.log("✅ Build completed successfully!");
    console.log(`📦 Output directory: ${buildDir}`);

    // List built files
    const files = fs.readdirSync(buildDir);
    files.forEach((file) => {
      const stat = fs.statSync(path.join(buildDir, file));
      const size = (stat.size / 1024).toFixed(2);
      console.log(`   ${file} (${size} KB)`);
    });
  } catch (error) {
    console.error("❌ Build failed:", error);
    process.exit(1);
  }
}

// Run the build
buildClientLibraries();
