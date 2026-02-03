---
sidebar_position: 1
slug: /
---

# Introduction

**Qleaner** is a powerful CLI tool designed to analyze and clean up your codebase. It helps you identify unused files, images, dependencies, and dead code to optimize your bundle size and maintain a clean project structure.

While originally built for the ecosystem, Qleaner is designed to be language-agnostic and extensible, making it a versatile tool for maintaining code quality across various project types.

## Key Features

-   **Find Unused Code Files**: Identify files that exist in your source tree but aren't imported or used anywhere.
-   **Find Unused Images**: Detect image assets that are never referenced in your code.
-   **Unused Dependencies**: Discover package dependencies that are installed but not used in your source.
-   **Dead Image Links**: Find references in your code that point to non-existent image files.
-   **Project Summary**: Get comprehensive statistics about your codebase health.
-   **File Size Analysis**: Identify the largest files to target optimization efforts.
-   **Smart Caching**: Fast incremental scans with intelligent cache invalidation.
-   **Dry-Run Mode**: Preview what would be deleted without making any actual changes.
-   **Interactive Deletion**: Safely manage file removal with options to move to a trash folder.
-   **Advanced Detection**: Sophisticated parsing to find references in various contexts, including imports, dynamic loading, and stylesheet references.

## Why Use Qleaner?

As projects grow, they often accumulate "cruft"—files that were once needed but are no longer used. These unused files:
1.  Increase build times.
2.  Confuse developers ("Is this file still used?").
3.  Bloat the repository size.

Qleaner automates the process of finding and removing this dead weight, ensuring your project remains lean and maintainable.
