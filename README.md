# Guia DTCG

A multi-page reference guide for the DTCG (Design Tokens Community Group)
format, focused on practical learning and fast consultation.

## Overview

This project provides a static documentation website covering core DTCG
topics with dedicated pages for:

- token formatting
- value types
- resolver concepts
- in-site search

The current content is aligned with the DTCG 2025.10 specification.

## Features

- Multi-page documentation experience with focused sections.
- Keyboard shortcut support for search:
  - `Cmd+K` on macOS
  - `Ctrl+K` on Windows/Linux
- SCSS architecture organized by layer (`abstracts`, `base`, `components`, `layout`).
- Reusable UI components and SVG assets for visual explanations.
- Git hooks and quality tooling for formatting and linting workflows.

## Tech Stack

- HTML5
- SCSS (Dart Sass)
- Vanilla JavaScript
- Node.js tooling (Husky, lint-staged, Prettier, Stylelint, ESLint,
  html-validate, commitlint)

## Getting Started

### Prerequisites

- Node.js 18+ (recommended)
- npm

### Installation

```bash
npm install
```

### Build CSS

```bash
npm run build
```

### Watch CSS during development

```bash
npm run watch:css
```

### Run the site locally

Open files in `public/` directly in your browser, or serve the folder
with any static file server.

Example with `npx`:

```bash
npx serve public
```

## Available Scripts

- `npm run build`: compiles `src/scss/main.scss` into `public/css/styles.css`.
- `npm run build:css`: same as build, explicit CSS target.
- `npm run watch:css`: watches SCSS changes and recompiles CSS automatically.

## Project Structure

```text
.
├── public/                  # Static pages, browser scripts, compiled CSS, assets
│   ├── index.html
│   ├── formatacao.html
│   ├── types.html
│   ├── resolver.html
│   ├── search.html
│   ├── js/
│   └── assets/
├── src/
│   └── scss/
│       ├── abstracts/
│       ├── base/
│       ├── components/
│       ├── layout/
│       └── main.scss
└── .github/
    ├── ISSUE_TEMPLATE/
    └── pull_request_template.md
```

## Contributing

Contributions are welcome through pull requests.

- Use the issue template for bug reports, improvements, and questions.
- Use the pull request template to describe scope, validation steps, and
  related issues.
- Keep changes scoped and document behavioral updates in `CHANGELOG.md` when applicable.

## Versioning and Changelog

Project releases and notable changes are tracked in:

- `CHANGELOG.md`

## License

MIT License. See `package.json` for details.
