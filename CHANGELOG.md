# Changelog

All notable changes to this project are documented in this file.

## [0.3.0] - 2026-03-02

### Added in 0.3.0

- Keyboard shortcut support for search focus:
  - `Cmd+K` on macOS.
  - `Ctrl+K` on Windows/Linux.
- New shortcut styles in `src/scss/components/_shortcut.scss`.
- New search shortcut initializer script in
  `public/js/init-search-shortcut.js`.

### Changed in 0.3.0

- Sidebar navigation cleanup by removing the "Visão geral" menu item.
- Sidebar anchor scrolling behavior adjusted.
- Search input UI updated across pages to support shortcut hint visuals.

### Merged PRs in 0.3.0

- [#2](https://github.com/mateusvillain/guia-dtcg/pull/2)
  Add search shortcut (Cmd+K / Ctrl+K)

### Commits in 0.3.0

- `7f4e66c` Merge branch `main` from `origin`
- `fb7a574` Add search shortcut (Cmd+K / Ctrl+K) (#2)
- `cf6953b` refactor(sidebar): adjust anchor scroll behavior
- `9a9e4fd` refactor(sidebar): remove 'Visão geral' menu item

## [0.2.0] - 2026-03-01

### Added in 0.2.0

- New `CodeSnippet` component styles in
  `src/scss/components/_code-snippet.scss`.
- New card size variants: `card--md` and `card--sm`.

### Changed in 0.2.0

- Refactored style architecture by moving docs-related styles from
  `src/scss/components/_docs.scss` to `src/scss/base/_base.scss`.
- Updated design tokens and SCSS variable usage across base, components,
  and layout layers.
- Updated UI details for button, card, sidebar, code snippet, and home
  topic hover states.
- Updated Formatação page markup and layout styles, including cleanup of
  unused classes and variable renames.
- Updated resolver, search, and types pages to align with style changes.
- Search button UI changed from text label to magnifier icon.

### Removed in 0.2.0

- Removed generated `public/css/styles.css` from version control.
- Removed `src/scss/components/_docs.scss` after migration to base styles.

### Commits in 0.2.0

- `d30ca4f` refactor(styles): remove docs.scss file
- `d6b3030` style(formatting): update Formatação page styles
- `3344cee` feat(card): add card--md and card--sm variants
- `004f8de` refactor(styles): move docs.scss classes to base.scss
- `6a096ad` refactor(formatting): remove unused classes from Formatação page
- `dba14a8` style(sidebar): update border-radius
- `e582e0e` style(code-snippet): update component styles
- `c31ed6d` style(card): update border-radius
- `a443289` chore(git): ignore generated CSS files
- `b7c4015` chore: remove compiled CSS from version control
- `d17c174` refactor(formatting): rename variable used on Formatação page
- `63647fd` refactor(formatting): rename variable used on Formatação page
- `fb7f7f3` style(home): update hover styles for topics
- `b52bf9e` refactor(styles): update SCSS files to use new variables
- `3e374bd` refactor(styles): update SCSS files to use new variables
- `f8837ac` refactor(tokens): update variables and remove unused ones
- `46b4bde` feat(code-snippet): add CodeSnippet component
- `46349a7` feat(code-snippet): add CodeSnippet component
- `117ff65` refactor(ui): change search button from text to magnifier icon
- `fa6ca5e` style(button): update hover and focus styles

## [0.1.0] - 2026-02-28

### Added

- Initial project setup with Node.js manifest and lockfile.
- Husky hooks for `pre-commit` and `commit-msg`.
- Lint/format configuration for ESLint, Stylelint, Prettier,
  html-validate, and commitlint.
- VS Code workspace settings and launch configuration.
- Public pages: home, formatting reference, resolver, search, and types.
- Public JavaScript initializers for copy blocks and search results.
- Full SCSS architecture (`abstracts`, `base`, `components`, `layout`)
  and main entrypoint.
- Compiled stylesheet in `public/css/styles.css`.
- SVG visual assets for documentation and playground context.

### Fixed

- Updated lint configuration to support current runtime and project output:
  - commitlint CommonJS compatibility.
  - stylelint rule relaxations for compiled CSS.
  - html-validate simplification and accessibility rule relaxation for current markup.

### Commits

- `b23f49c` chore(config): add editorconfig defaults
- `bec7449` chore(git): add repository ignore rules
- `98c732e` chore(lint): add html-validate configuration
- `76f093b` chore(lint): add html-validate ignore patterns
- `3de4de3` chore(husky): add commit message hook
- `eb78af8` chore(husky): add pre-commit hook
- `6d0fabe` chore(format): add prettier ignore patterns
- `311c2be` chore(format): add prettier configuration
- `d968edf` chore(lint): add stylelint ignore patterns
- `6fa603b` chore(lint): add stylelint configuration
- `a08d49d` chore(vscode): add debug launch settings
- `ddaf3dc` chore(vscode): add workspace editor settings
- `71e7baa` chore(lint): add commitlint configuration
- `939e821` chore(lint): add eslint configuration
- `b8b6935` chore(build): add npm lockfile
- `648cb56` feat(build): add npm project manifest
- `7d6d7a6` feat(assets): add dtcg illustration
- `6ae72ca` feat(assets): add playground-grid illustration
- `afbf219` feat(assets): add resolver-board illustration
- `68b7173` feat(assets): add terrazzo illustration
- `968e6a8` feat(assets): add token-shapes illustration
- `13a2c20` fix(lint): relax stylelint rules for compiled css
- `6a05f23` feat(styles): add compiled public stylesheet
- `1831481` fix(lint): simplify html-validate rules for current version
- `7603f3b` feat(pages): add formatting reference page
- `20f644a` fix(lint): relax html-validate accessibility constraints
- `b7e5ecd` feat(pages): add home page
- `8a57cce` feat(scripts): add copy block initializer
- `4ab5f72` feat(scripts): add search results initializer
- `1148843` feat(scripts): add shared browser utilities
- `8eb84b7` feat(pages): add resolver page
- `ab233dd` feat(pages): add search page
- `f2b934a` feat(pages): add types page
- `7a2eab6` feat(styles): add scss design variables
- `ae1f5ab` feat(styles): add base scss rules
- `d0fb9ec` feat(styles): add scss reset rules
- `5ea1a53` feat(styles): add banner component styles
- `532bdf9` feat(styles): add button component styles
- `b78731c` feat(styles): add card component styles
- `b8bec65` feat(styles): add docs component styles
- `2ad874e` feat(styles): add forms component styles
- `02eeb78` feat(styles): add interactive component styles
- `26e1c99` feat(styles): add nav component styles
- `6feb461` feat(styles): add sidebar component styles
- `4d60830` feat(styles): add tag component styles
- `4b4b351` feat(styles): add formatacao layout styles
- `039e765` feat(styles): add home layout styles
- `fde2ea9` feat(styles): add search layout styles
- `62baf55` feat(styles): add main scss entrypoint

[0.3.0]: https://github.com/mateusvillain/guia-dtcg/releases/tag/v0.3.0
[0.2.0]: https://github.com/mateusvillain/guia-dtcg/releases/tag/v0.2.0
[0.1.0]: https://github.com/mateusvillain/guia-dtcg/releases/tag/v0.1.0
