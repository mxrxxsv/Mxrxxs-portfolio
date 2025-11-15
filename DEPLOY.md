Simple manual deploy to GitHub Pages (no Actions, no gh-pages package)

This repository builds with Vite. The simplest way to deploy to GitHub Pages without workflows or tokens is to publish the built `dist` folder to the `docs/` folder on the `main` branch.

Steps (manual):

1. Build the production site:

```powershell
npm run build
```

2. Remove any existing `docs` folder and move `dist` to `docs`:

```powershell
Remove-Item -Recurse -Force docs -ErrorAction SilentlyContinue
Rename-Item -Path dist -NewName docs
```

3. Commit and push to `main`:

```powershell
git add docs
git commit -m "Deploy: update docs from build"
git push
```

4. In the GitHub repository settings → Pages, set the Source to:
   - Branch: `main`
   - Folder: `/docs`

Wait a minute; the site should be available at `https://<username>.github.io/<repo>/`.

Notes
- `vite.config.ts` uses `base: './'`, so assets use relative paths and the built site works regardless of whether Pages serves from the root or a subpath.
- Do not commit `dist/` or `assets/` into source. The `.gitignore` already ignores `dist` and `docs`.
- If you'd like me to automate the `dist -> docs` step with an npm script or small Node script I can add that.
