---
sidebar_position: 6
---

# How It Works

Understanding usage detection can help you write cleaner code and debug false positives.

## Code Analysis Mechanics

Qleaner builds a **Dependency Graph** of your entire project to determine which files are used.

1.  **Discovery**: It scans your source directories to find all code files.
2.  **Parsing**: It parses each file (using ASTs) to find import statements, `require()` calls, and dynamic imports.
3.  **Resolution**: It resolves these imports to actual file paths on disk.
    *   This is where **Path Aliases** are critical. If `import Foo from '@/foo'` cannot be resolved to `src/foo.ts`, Qleaner will think `src/foo.ts` is unused.
4.  **Graph Construction**: It links files together based on these resolved imports.
5.  **Unused Detection**: Any file that has **zero incoming links** (is not imported by anyone) is marked as unused, *unless* it is marked as an entry point (`excludeFilePrint`).

## Image Analysis Mechanics

Image analysis is more complex because images can be referenced in many ways (strings, variables, CSS).

1.  **Asset Discovery**: Scans your assets directory for image files.
2.  **Reference Scanning**: Scans your *code* files for strings that look like image paths.
    *   It looks for specific patterns: imports, `url()`, `<img src="...">`, etc.
    *   It extracts the path string (e.g., `/images/logo.png`).
3.  **Normalization**: It converts both the file system path and the code reference into a standardized format based on your configuration (`alias` vs `root-referenced`).
4.  **Matching**: It checks if the normalized code reference matches any known image file. If an image file has no matches, it is unused.

## Caching

To ensure speed on large projects, Qleaner caches:
*   File contents (hashes)
*   The dependency graph
*   Image references

The cache is stored in `unused-check-cache.json`. If you change your configuration or perform a major refactor, it is good practice to run with `--clear-cache` to force a fresh analysis.
