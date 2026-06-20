# GitHub Pages Site Setup

This repository now contains a Jekyll site that can be published with GitHub Pages without deleting the existing resume files, README, or screenshot assets.

## Publish On GitHub Pages

1. Open the repository on GitHub.
2. Go to Settings > Pages.
3. Set Source to Deploy from a branch.
4. Choose branch `main` and folder `/ (root)`.
5. Save the settings.

The starter configuration assumes the project site URL:

```text
https://josephdillard.github.io/JosephDillard/
```

If you rename the repository to `JosephDillard.github.io`, update `_config.yml` and set:

```yml
baseurl: ""
url: "https://josephdillard.github.io"
```

## Local Preview

Ruby and Bundler are required for a local Jekyll preview.

```powershell
bundle install
bundle exec jekyll serve
```

Then open the local URL printed by Jekyll.

## Content To Customize Next

- Keep `_data/projects.yml` aligned with the public companion repos whenever a
  README or project scope changes.
- Add project screenshots from running applications as each project matures.
- Add a professional headshot or architecture diagram if desired.
- Add specific target role titles and preferred work arrangements.
