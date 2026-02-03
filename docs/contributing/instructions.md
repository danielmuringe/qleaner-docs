# Contributing Instructions

We welcome contributions to Qleaner! Follow these steps to set up your development environment and submit your changes.

## 1. Fork and Clone

1. Fork the [Qleaner repository](https://github.com/qhalahq/qleaner) to your GitHub account.
2. Clone your forked repository to your local machine:

```bash
git clone https://github.com/<your-username>/qleaner.git
cd qleaner
```

## 2. Install Dependencies

Navigate to the project directory (e.g., `docs` if you are updating documentation) and install the dependencies using Yarn:

```bash
cd docs
yarn install
```

## 3. Start the Development Server

Start the local development server to preview your changes:

```bash
yarn start
```

This command opens a browser window at `http://localhost:3000`. Most changes are reflected live without restarting the server.

## 4. Make Your Changes

Create a new branch for your feature or bug fix:

```bash
git checkout -b my-new-feature
```

Make your changes in the codebase. Ensure you follow the project's coding style and conventions.

## 5. Verify Changes

If you are working on the documentation, check your changes in the browser.
Run the build command to ensure there are no errors:

```bash
yarn build
```

## 6. Submit a Pull Request

1. Commit your changes:
   ```bash
   git add .
   git commit -m "feat: Add new awesome feature"
   ```
2. Push your branch to your fork:
   ```bash
   git push origin my-new-feature
   ```
3. Open a Pull Request (PR) on the main Qleaner repository. Provide a clear description of your changes.

Thank you for contributing!
