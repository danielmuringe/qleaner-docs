---
sidebar_position: 1
---

# init

Initialize Qleaner with an interactive configuration wizard.

```bash
qleaner init
```

## Description

This command is the starting point for using Qleaner. It asks you a series of questions to set up the tool for your specific project environment and creates a `qleaner.config.json` file in your project root with sensible defaults.

## Configuration Steps

The wizard guides you through the following critical settings:

1.  **Package Manager**: Select `npm`, `yarn`, or `pnpm`.
2.  **Image Path Resolution**: Define how you reference images in your code:
    *   **Relative paths**: e.g., `./assets/logo.png`
    *   **Absolute paths**: e.g., `/images/logo.png` (from a public folder)
3.  **Framework Type**: Identifies entry points (e.g., standard generic, React, Next.js).
4.  **Path Alias Configuration**: **Crucial Step.** Select the configuration file Qleaner should use to understand import aliases (like `@/components`):
    *   `tsconfig.json`: Standard for TypeScript projects.
    *   `jsconfig.json`: Standard for JavaScript projects.
    *   `tsconfig.app.json` / `tsconfig.base.json`: Common in monorepos.
    *   `none`: Select this if you do not use aliases or want to configure them manually in `qleaner.config.json`.

:::important Configuration Matters
Getting the **Path Alias Configuration** right is essential. Without it, Qleaner may fail to resolve imports that use aliases, leading to "unused file" false positives.
:::

## Examples

```bash
# Initialize with interactive prompts
qleaner init

# After initialization, verify your config
cat qleaner.config.json
```
