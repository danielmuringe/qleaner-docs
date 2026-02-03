---
sidebar_position: 2
---

# scan

Scan a directory for unused code files.

```bash
qleaner scan <path> [options]
```

## Description

Analyzes the specified directory to find code files that are not imported by any other file in the project. It uses your project's dependency graph to determine usage.

## Arguments

*   `<path>`: The directory to scan (e.g., `src`).

## Options

| Option | Alias | Description |
| :--- | :--- | :--- |
| `--exclude-dir <dir...>` | `-e` | Exclude directories from scan (e.g., `-e node_modules dist`). |
| `--exclude-file <file...>` | `-f` | Exclude specific files by name (e.g., `-f config.js`). |
| `--exclude-file-print <files...>` | `-F` | Scan these files but **do not** report them as unused. Useful for entry points (e.g., `index.tsx`). |
| `--exclude-extensions <ext...>` | `-x` | Exclude file extensions (e.g., `-x test.tsx test.ts`). |
| `--table` | `-t` | Display results in a formatted table. |
| `--dry-run` | `-d` | Preview deletions without actually deleting files. |
| `--clear-cache` | `-C` | Clear the cache before scanning. Recommended after major refactors. |

## Examples

```bash
# Basic scan (will prompt for deletion/move to trash if unused files found)
qleaner scan src

# Dry run with table output (finding potential cleanup candidates)
qleaner scan src --dry-run --table

# Exclude test files and build directories
qleaner scan src -x test.tsx test.ts -e node_modules dist build

# Exclude specific files from being reported as unused (manual entry points)
qleaner scan src -F index.tsx main.tsx schema.graphql
```
