---
sidebar_position: 3
---

# Common Issues

### Q: Qleaner reports files as unused that are actually used.
**A:** Check your configuration. Most commonly, this happens when `codeAlias` is incorrect or `paths` is not configured properly. Verify that Qleaner can resolve your import aliases:
*   Ensure `codeAlias` points to the correct config file (check if it exists and has the right path mappings).
*   If using manual paths, verify the alias patterns match your imports.
*   Try running with `--clear-cache` after fixing config.
*   These might be entry points - Add them to `excludeFilePrint` in your config or use `-F` flag.
*   Verify the file is actually imported - Check with `qleaner list <file-path>` to see if it's referenced.
*   Check for dynamic imports - Some dynamic imports may not be detected.

### Q: Images aren't being detected.
**A:**
*   Verify your `-a` (alias) or `-r` (root-referenced) flag matches how images are referenced in code.
*   Check if the image path patterns match what's in your code.
*   Try `--clear-cache` to rebuild the image graph.
*   Ensure the `<rootPath>` argument includes all directories that reference images.

### Q: Scan is slow on large projects.
**A:**
*   First scan is always slower - it builds the complete dependency graph.
*   Subsequent scans use caching and are much faster (only changed files are re-analyzed).
*   The enhanced file finding mechanism with proper config ensures accurate and efficient resolution even in large codebases.
*   Exclude more directories with `-e` flag to speed up scans.
*   Consider scanning smaller subdirectories separately.
*   Ensure your `codeAlias` config is correct - incorrect config can cause unnecessary resolution attempts.

### Q: How do I know if my configuration is correct?
**A:**
*   After `qleaner init`, verify `codeAlias` in `qleaner.config.json` matches your project's config file.
*   Run a test scan: `qleaner scan src --dry-run` and check if files you know are used are incorrectly reported as unused.
*   If you see false positives, check:
    *   Does your `jsconfig.json`/`tsconfig.json` exist and have correct paths configuration?
    *   Is `codeAlias` pointing to the right file?
    *   If using manual paths, do the patterns match your import statements?
*   For monorepos, you may need `tsconfig.app.json` or `tsconfig.base.json` instead of `tsconfig.json`.

### Q: How do I undo deletions?
**A:**
*   If you used "Move to .trash", files are safely stored in `.trash` directory in your project root.
*   Permanently deleted files can be restored from git if you're using version control.
*   Always test after deletions before emptying `.trash`.

### Q: `list` command shows no results but I know the dependency is used.
**A:**
*   Make sure you ran `qleaner scan <path>` first to generate the cache.
*   The dependency path might need to match exactly - try partial paths (e.g., `react` instead of `react/dist/react.production.min.js`).
*   Check if the dependency is in `node_modules` or a local file path.

### Q: `dep` command shows dependencies I know are used.
**A:**
*   Some dependencies might be used only in config files (`webpack.config.js`, etc.) which aren't scanned.
*   Dynamic `requires`/`imports` might not be detected.
*   Check if they're actually used with `qleaner list <dependency-name>`.
