---
sidebar_position: 1
---

# Example Workflow

A typical cleanup workflow involves an iterative process of scanning, verifying, and deleting.

## 1. Initialize

```bash
qleaner init
```

## 2. Dry Run (Code)

Check for unused code without deleting anything. Use the table view to sort by size.

```bash
qleaner scan src --dry-run --table
```

## 3. Verify

If you see files listed that you *know* are used, check your `qleaner.config.json`. You likely have a missing path alias or a misconfigured entry point.
*   Fix the config.
*   Clear cache: `qleaner scan src --clear-cache`
*   Run dry run again.

## 4. Dry Run (Images)

```bash
qleaner image public/images src -r --dry-run --table
```

## 5. Dependencies

Check for unused packages.

```bash
qleaner dep
```

## 6. Cleanup

Once confident, run the actual scan and delete files (or move them to trash).

```bash
qleaner scan src
qleaner image public/images src -r
```
