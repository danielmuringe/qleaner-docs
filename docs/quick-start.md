---
sidebar_position: 3
---

# Quick Start

Get up and running with Qleaner in three simple steps.

## 1. Initialize Configuration

**IMPORTANT:** Proper configuration is critical for Qleaner to accurately map your project structure.

Run the initialization wizard to create a `qleaner.config.json` file:

```bash
qleaner init
```

The wizard will guide you through:
1.  **Package Manager**: Select npm, yarn, or pnpm.
2.  **Path Resolution**: How your project handles imports (e.g., specific config files for path aliases).
3.  **Entry Points**: Determining where your application starts (framework specific).

> **Tip:** If you use path aliases (like `@/components`), ensure you select the correct configuration file (e.g., `tsconfig.json` or `jsconfig.json`) during initialization. This allows Qleaner to correctly trace dependencies.

## 2. Scan for Unused Code

Identify code files that are not imported by any other file in your project.

**Dry Run (Recommended):**
Preview what would be deleted without making changes.
```bash
qleaner scan src --dry-run
```

**Actual Scan:**
Run the scan and interactively choose files to delete or move to trash.
```bash
qleaner scan src
```

## 3. Scan for Unused Images

Find images in your assets folder that are not referenced in your source code.

```bash
# Example: Scan images in public/images against code in src
qleaner image public/images src --dry-run
```

Depending on how you import images, you might need to use flags:
*   Use `-a` or `--alias` if you import images like `import logo from '@/assets/logo.png'`.
*   Use `-r` or `--is-root-folder-referenced` if you reference images by absolute path like `<img src="/images/logo.png" />`.
