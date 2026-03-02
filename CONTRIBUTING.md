# Contributing Guide

Thanks for your interest in contributing to Guia DTCG.

## How to contribute

1. Open an issue describing the bug, improvement, or question.
2. Fork the repository and create a branch from `main`.
3. Implement focused changes with clear commit messages.
4. Open a pull request using the PR template.

## Development setup

```bash
npm install
npm run build
```

For active styling work:

```bash
npm run watch:css
```

## Code quality

Before opening your PR:

1. Make sure changes are scoped and documented.
2. Verify generated CSS reflects your SCSS updates.
3. Ensure markdown and formatting are consistent.

This repository uses pre-commit and commit-msg hooks via Husky and lint-staged.

## Pull request checklist

- Keep PRs small and focused.
- Link related issue(s).
- Add validation steps and evidence when relevant.
- Update `CHANGELOG.md` when the change is user-facing.

## Commit conventions

Use Conventional Commits style when possible, for example:

- `feat: add keyboard shortcut for global search`
- `fix: correct resolver card heading`
- `docs: update setup instructions`

## Questions

If you are unsure about scope or implementation, open an issue first so we
can align before coding.
