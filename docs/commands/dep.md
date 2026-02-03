---
sidebar_position: 5
---

# dep

List unused dependencies in `package.json`.

```bash
qleaner dep [options]
```

## Description

Analyzes your `package.json` dependencies and compares them against the dependency graph generated from your code. Identifies packages that are installed but never imported or used.

## Options

| Option | Alias | Description |
| :--- | :--- | :--- |
| `--directory <directory>` | `-d` | The directory to list unused dependencies from (defaults to current). |
| `--table` | `-t` | Display results in a table format. |

## Examples

```bash
# Find unused dependencies in current directory
qleaner dep

# Check a specific package in a monorepo
qleaner dep -d ./packages/my-package --table
```

> **Note:** Requires a cache file. Run `qleaner scan` first. Only analyzes `dependencies` (production dependencies), not `devDependencies`.
