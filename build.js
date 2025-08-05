import { build } from "esbuild";
import fs from "fs";
import path from "path";

const nodeModulesDir = "./node_modules";
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

async function buildStyleLibraries() {
  console.log("Building style libraries...");
  try {
    // Build NES.css
    const nesCssPath = path.join(
      nodeModulesDir,
      "nes.css",
      "css",
      "nes.min.css"
    );
    const destNesCssPath = path.join(buildDir, "nes.min.css");

    if (fs.existsSync(nesCssPath)) {
      fs.copyFileSync(nesCssPath, destNesCssPath);
      console.log("📋 Copied nes.min.css");
    } else {
      console.warn("⚠️  Warning: nes.min.css not found in node_modules");
    }

    console.log("✅ Style libraries built successfully!");
  } catch (error) {
    console.error("❌ Build failed:", error);
    process.exit(1);
  }
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
      minify: process.env.NODE_ENV === "production",
      sourcemap: process.env.NODE_ENV !== "production",
      platform: "browser",
      target: "es2020",
      external: [],
      define: {
        "process.env.NODE_ENV": `"${process.env.NODE_ENV || "development"}"`,
      },
    });

    // Copy ROM patcher webworker files
    const romPatcherFiles = [
      "RomPatcher.js",
      "RomPatcher.webworker.apply.js",
      "RomPatcher.webworker.crc.js",
      "RomPatcher.webworker.create.js",
      "modules/BinFile.js",
      "modules/HashCalculator.js",
      "modules/RomPatcher.format.ips.js",
    ];

    const romPatcherDir = path.join(
      nodeModulesDir,
      "rom-patcher/rom-patcher-js"
    );
    romPatcherFiles.forEach((romPatcherFile) => {
      const sourcePath = path.join(romPatcherDir, romPatcherFile);
      const destPath = path.join(buildDir, romPatcherFile);
      if (!fs.existsSync(path.dirname(destPath))) {
        fs.mkdirSync(path.dirname(destPath), { recursive: true });
      }

      if (fs.existsSync(sourcePath)) {
        fs.copyFileSync(sourcePath, destPath);
        console.log(`📋 Copied ${romPatcherFile}`);
      } else {
        console.warn(
          `⚠️  Warning: ${romPatcherFile} not found in ${sourcePath}`
        );
      }
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
buildStyleLibraries();
