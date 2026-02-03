---
sidebar_position: 4
---

# list

List the files that depend on a specific package or module.

```bash
qleaner list <dependency> [options]
```

## Description

Searches through your dependency graph to find all files that import or use the specified dependency. This is useful for impact analysis—understanding what files will be affected if you change or remove a dependency.

## Arguments

*   `<dependency>`: The dependency to trace. Can be a package name (e.g., `react`), a module, or a file path (e.g., `./utils/helpers`).

## Options

| Option | Alias | Description |
| :--- | :--- | :--- |
| `--table` | `-t` | Display results in a table format. |

## Examples

```bash
# List files using a specific package
qleaner list react-router

# List files using a local utility
qleaner list ./utils/helpers

# Display as table
qleaner list lodash --table
```

> **Note:** Requires a cache file. Run `qleaner scan` first to populate the dependency graph.
