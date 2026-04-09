# Publishing Guide

This guide explains how to publish the React and Lit icon packages to npm.

## Overview

The following packages are published to npm:
- `@gabrieleghio/icons-react` - React component library
- `@gabrieleghio/icons-lit` - Lit web component library

Both are published as **private scoped packages**. Only users with access to the `@gabrieleghio` scope can install them.

## Prerequisites

### 1. npm Account Setup

- Create an npm account at https://www.npmjs.com
- Join the `@gabrieleghio` organization
- Generate an authentication token:
  - Go to https://www.npmjs.com/settings/~/tokens
  - Create a new token with "Automation" or "Publish" access level
  - Copy the token

### 2. Local Machine Setup

Add your npm token to your local npm configuration:

```bash
npm login
# or manually edit ~/.npmrc:
# //registry.npmjs.org/:_authToken=YOUR_TOKEN_HERE
```

Verify you're logged in:
```bash
npm whoami
```

## Publishing Workflow

### Step 1: Verify Everything Builds

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Verify no errors
git status
```

### Step 2: Update Version Numbers

For each package you want to publish:

**React Package:**
```bash
cd packages/react
npm version patch    # or 'minor' or 'major'
# This automatically:
# - Updates version in package.json
# - Creates a git commit
# - Creates a git tag
cd ../..
```

**Lit Package:**
```bash
cd packages/lit
npm version patch    # or 'minor' or 'major'
cd ../..
```

### Step 3: Publish to npm

Publish packages individually:

**React Package:**
```bash
cd packages/react
npm publish
cd ../..
```

**Lit Package:**
```bash
cd packages/lit
npm publish
cd ../..
```

Or publish all at once with pnpm:
```bash
pnpm publish -r --filter="@gabrieleghio/icons-*"
```

### Step 4: Verify Publication

Check that packages are published:

```bash
npm view @gabrieleghio/icons-react
npm view @gabrieleghio/icons-lit
```

Or visit:
- https://www.npmjs.com/package/@gabrieleghio/icons-react
- https://www.npmjs.com/package/@gabrieleghio/icons-lit

### Step 5: Push Tags to GitHub

```bash
git push origin main --tags
```

## Versioning Strategy

We follow [Semantic Versioning](https://semver.org/):

- **MAJOR** (1.0.0) - Breaking changes (incompatible API changes)
- **MINOR** (0.1.0) - New features (backward compatible)
- **PATCH** (0.0.1) - Bug fixes (backward compatible)

### When to Bump Each:

**MAJOR:**
- Removed components or props
- Changed component prop types
- Breaking changes in behavior

**MINOR:**
- New icon components added
- New optional props added
- New features (backward compatible)

**PATCH:**
- Bug fixes in icons
- Improved documentation
- Performance improvements
- Fix TypeScript types

## Automated Publishing (CI/CD)

To automate publishing, set up a GitHub Actions workflow:

1. **Store npm token as a secret:**
   - Go to repo Settings → Secrets and variables → Actions
   - Add new secret: `NPM_TOKEN` = your npm authentication token

2. **Create `.github/workflows/publish.yml`:**

```yaml
name: Publish Packages

on:
  push:
    tags:
      - 'v*.*.*'
      - 'icons-react-v*.*.*'
      - 'icons-lit-v*.*.*'

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0  # Fetch all history for tags
      
      - uses: pnpm/action-setup@v2
        with:
          version: 8
      
      - uses: actions/setup-node@v4
        with:
          node-version: 18
          registry-url: 'https://registry.npmjs.org'
          cache: 'pnpm'
      
      - run: pnpm install
      
      - run: pnpm build
      
      - name: Publish React
        if: startsWith(github.ref, 'refs/tags/icons-react-v')
        working-directory: packages/react
        run: npm publish
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
      
      - name: Publish Lit
        if: startsWith(github.ref, 'refs/tags/icons-lit-v')
        working-directory: packages/lit
        run: npm publish
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

3. **Publishing via tags:**

```bash
# Publish React
git tag icons-react-v0.0.2
git push origin icons-react-v0.0.2

# Publish Lit
git tag icons-lit-v0.0.2
git push origin icons-lit-v0.0.2
```

## Troubleshooting

### "npm ERR! 401 Unauthorized"

- Check you're logged in: `npm whoami`
- Verify token is valid: Check https://www.npmjs.com/settings/~/tokens
- Token might be expired - generate a new one

### "npm ERR! This publish would remove untracked files"

Run the build first:
```bash
pnpm build
```

### "EACCES: permission denied"

You don't have permission to publish to the `@gabrieleghio` scope. 
- Contact the scope owner to add you
- Or create a personal account and publish under your own scope

### "You must be on a version of npm that supports workspaces"

Upgrade npm:
```bash
npm install -g npm@latest
```

### Package not appearing on npm.com

It might take 5-10 minutes to appear. Check:
```bash
npm view @gabrieleghio/icons-react
```

If it still doesn't show, check the publish logs:
```bash
npm info @gabrieleghio/icons-react
```

## Installation After Publishing

Once published, users can install with:

```bash
npm install @gabrieleghio/icons-react
npm install @gabrieleghio/icons-lit
```

Or with pnpm:
```bash
pnpm add @gabrieleghio/icons-react
pnpm add @gabrieleghio/icons-lit
```

## Updating the Documentation

After publishing a new version:

1. Update version references in docs
2. Update `CHANGELOG.md` with changes
3. Update `README.md` with new features
4. Commit and push

## References

- npm Docs: https://docs.npmjs.com/
- Semantic Versioning: https://semver.org/
- Publishing Scoped Packages: https://docs.npmjs.com/about-npm/scope
