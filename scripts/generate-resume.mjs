import { existsSync, mkdirSync, mkdtempSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, resolve } from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const browsers = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
];
const browser = browsers.find((candidate) => candidate && existsSync(candidate));
if (!browser) {
  throw new Error("Set CHROME_PATH to a Chrome or Chromium executable to generate the resume PDF.");
}

const output = resolve(root, "public/resume/Nico-Alumbro-Resume.pdf");
mkdirSync(dirname(output), { recursive: true });
// Use an isolated temporary profile so the user's browser session is unaffected.
const profile = mkdtempSync(resolve(tmpdir(), "nico-resume-"));
const result = spawnSync(browser, [
  "--headless",
  "--disable-gpu",
  "--no-first-run",
  "--no-default-browser-check",
  "--no-pdf-header-footer",
  `--user-data-dir=${profile}`,
  `--print-to-pdf=${output}`,
  pathToFileURL(resolve(root, "resume/resume.html")).href,
], { timeout: 30000, windowsHide: true, encoding: "utf8" });

if (result.error) throw result.error;
if (result.status !== 0) throw new Error(result.stderr || "Resume PDF generation failed.");
if (!existsSync(output) || readFileSync(output).subarray(0, 5).toString() !== "%PDF-") {
  throw new Error("The browser did not produce a valid PDF file.");
}
console.log(`Created ${output}`);
