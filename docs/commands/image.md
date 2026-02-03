---
sidebar_position: 3
---

# image

Scan for unused images by comparing image assets against references in your code.

```bash
qleaner image <directory> <rootPath> [options]
```

## Description

Detects image files (png, jpg, jpeg, svg, gif, webp) in your assets directory that are never referenced in your source code.

## Arguments

*   `<directory>`: Directory containing image files to scan (e.g., `public/images`, `src/assets`).
*   `<rootPath>`: Root directory of your source code that contains the references (e.g., `src`, `app`).

## Options

| Option | Alias | Description |
| :--- | :--- | :--- |
| `--exclude-dir-assets <dir...>` | `-e` | Exclude directories from the **image file** scan. |
| `--exclude-file-assets <file...>` | `-f` | Exclude specific image files by name. |
| `--exclude-dir-code <dir...>` | `-E` | Exclude directories when scanning **code** for references. |
| `--exclude-file-code <file...>` | `-S` | Exclude specific code files from reference scanning. |
| `--is-root-folder-referenced` | `-r` | Flag indicating images are referenced by absolute path (e.g., `/images/logo.png`). |
| `--alias` | `-a` | Flag indicating images are referenced via aliases (e.g., `@/assets/logo.png`). |
| `--table` | `-t` | Display results in a table showing Unused, In Code, Exists, and Size. |
| `--clear-cache` | `-C` | Clear cache before scanning. |
| `--hide-not-found-images` | `-H` | Hide images referenced in code but not found on disk (dead links). |
| `--dry-run` | `-d` | Preview deletions without deleting. |

:::caution formatting
You must specify either `-r` (root-referenced) configuration OR `-a` (alias) configuration, depending on how you write your import paths. Do not use both.
:::

## Supported Reference Patterns

Qleaner automatically detects images referenced through:
*   **Imports**: `import logo from './logo.png'`
*   **Requires**: `require('./logo.png')`
*   **Dynamic**: `import('./logo.png')`
*   **JSX/Components**: `<img src="./logo.png" />`
*   **CSS/Styles**: `url('./logo.png')`, `background: url(...)`
*   **Arrays/Collections**: `['./logo.png', './icon.png']`
*   **Template Literals**: `` `./logo-${name}.png` ``

## Examples

```bash
# Scan with root-referenced paths (e.g., /images/logo.png)
qleaner image public/images src -r

# Scan with alias paths (e.g., @/assets/images/logo.png)
qleaner image src/assets/images src -a

# Comprehensive check with dry run
qleaner image public/images src -r --dry-run --table
```
