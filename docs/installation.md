---
sidebar_position: 2
---

# Installation

Qleaner can be installed globally for use across multiple projects, or locally as a development dependency.

## Global Installation

Install Qleaner globally to use the `qleaner` command anywhere on your system.

```bash
npm install -g qleaner
```

## Local Development Dependency

For collaborative projects, it is recommended to install Qleaner as a dev dependency so that the version is consistent for all contributors.

**Using npm:**
```bash
npm install qleaner --save-dev
```

**Using yarn:**
```bash
yarn add qleaner --dev
```

## Use Without Installation (npx)

You can also run Qleaner on-demand without installing it permanently using `npx`. This is useful for one-off scans.

```bash
npx qleaner <command>
```
