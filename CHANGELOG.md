# Changelog

All notable changes to this project are documented in this file.

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

[0.1.0]: https://github.com/mateusvillain/guia-dtcg/releases/tag/v0.1.0
