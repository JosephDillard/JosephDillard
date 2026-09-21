# Agent guide: Joseph Dillard portfolio

These instructions apply throughout this repository. Start with [README.md](README.md) and inspect the relevant page, layout, or data file before editing.

## Scope and layout

This repository contains the GitHub profile README and a GitHub Pages/Jekyll portfolio.

- Root Markdown pages: portfolio, projects, architecture, resume, skills, screenshots, and contact.
- `_layouts/`, `_includes/`, `_data/`, and `assets/`: site structure and presentation.
- `_config.yml` and `Gemfile`: site configuration and Ruby/Jekyll dependencies.
- Resume PDFs, images, and document copies: published or reference artifacts; do not replace them as a side effect of a text edit.

## Editing rules

- Preserve the user's exact employment, dates, qualifications, and project claims unless the task supplies evidence for a change. Do not invent achievements or metrics.
- Keep public portfolio content separate from private employer material, credentials, offer details, and working notes.
- Preserve Jekyll front matter, configured base URL, permalink behavior, and Liquid syntax. Use existing URL helpers for site assets and navigation.
- Keep the profile README and website accurate about which repositories and features exist. Prefer full GitHub URLs for cross-repository links.
- Edit source files, not generated `_site/` output. Keep generated build artifacts and local dependency caches out of commits.

## Validation

For layout, configuration, or rendered-site changes, use the Ruby environment defined by `Gemfile`: `bundle install` as needed, then `bundle exec jekyll build`. Inspect the affected rendered page when practical. If Ruby/dependencies are unavailable, report that limitation and check front matter, links, and the diff; do not claim a successful site build. For README-only changes, local link and diff checks are sufficient.

## Repository documentation and notices

- Keep [README.md](README.md) aligned with actual setup, commands, and limitations. Keep this `AGENTS.md` at the repository root and update relevant instructions when workflows change.
- Follow [COPYRIGHT.md](COPYRIGHT.md) and any applicable license files. Preserve existing copyright years, ownership, third-party attribution, and license scope; do not relicense material as part of routine maintenance.
- For documentation-only edits, verify added/changed local links and run `git diff --check`. Runtime suites are needed when behavior or executable examples change, not for a notice or wording-only edit.
- Before finishing, review the diff for unrelated changes, generated artifacts, and secrets. Report what changed, what was checked, and any checks that could not run.
