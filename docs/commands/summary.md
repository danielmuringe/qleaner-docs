---
sidebar_position: 6
---

# summary

Get comprehensive project statistics and insights.

```bash
qleaner summary [options]
```

## Description

Provides overview of imports, files, and project structure.

## Options

| Option | Alias | Description |
| :--- | :--- | :--- |
| `--largest-files` | `-l` | Show top 10 largest code and image files. |
| `--dependencies` | `-d` | Show dependency analysis and hotspots. |

> **Note:** When no options are provided, shows a general project summary with totals.

## Examples

```bash
# Full project summary
qleaner summary

# Show largest files
qleaner summary --largest-files

# Show dependency analysis
qleaner summary --dependencies
```

## Summary Output Breakdown

### General Summary (no flags)

*   Total code files count
*   Total image files count
*   Total unused files count
*   Total unused images count
*   Total dead image links count
*   Total files count

### Largest Files (`-l` or `--largest-files`)

*   Top 10 largest code files (sorted by size in KB)
*   Top 10 largest image files (sorted by size in MB)
*   Total code size and total image size
*   Code files exceeding 100 KB (warning list)

### Dependencies (`-d` or `--dependencies`)

*   Top 10 files with heavy dependencies (most imports)
*   Top 10 files with light dependencies (fewest imports)
*   Top 10 file hotspots (most imported files - files that many other files import)
*   Top 10 dependency hotspots (most used dependencies/packages)
*   Top 10 dead image hotspots (dead image links referenced by many files)
*   Top 10 alive image hotspots (images referenced by many files)

> **Note:** Requires a cache file. Run `qleaner scan <path>` to generate code cache and/or `qleaner image <dir> <root>` to generate image cache first.
