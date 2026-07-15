# Deploying to GitHub Pages via GitHub Actions

This repo builds a Next.js static export and publishes `./out` to GitHub Pages
automatically on every push to `main`. You commit source; the Action builds it.

---

## 0. Before you start (once)

Make sure you have Node 18+ and git:

```bash
node -v      # v18 or newer
git --version
```

Build locally first — if it builds on your machine, it'll build in the Action:

```bash
cd komibright-next
npm install
npm run build     # should finish and create ./out with index.html, zh/, products/, etc.
```

If that succeeds you're good. (`npm run dev` → http://localhost:3000 to eyeball it.)

---

## 1. Put the new code into your existing repo

Your repo currently holds the old static `.html` files. You'll replace them with
this project's contents. **Archive the old site first** so you can roll back.

```bash
# from a clone of your existing Pages repo, on main
cd <your-repo>
git checkout main
git pull

# 1a. snapshot the current live site to a branch (rollback safety net)
git checkout -b archive/static-site
git push -u origin archive/static-site
git checkout main

# 1b. remove the old files from main (keep .git)
git rm -r --quiet '*'        # removes tracked files; .git stays

# 1c. copy the NEW project's CONTENTS into the repo root
#     (note the trailing /. — you want the files, not the folder)
cp -R /path/to/komibright-next/. .

git add -A
git commit -m "Rebuild site as Next.js app (static export to GitHub Pages)"
git push origin main
```

After this, the repo root should contain `package.json`, `app/`, `components/`,
`data/`, `public/`, and `.github/workflows/deploy.yml` — not a nested
`komibright-next/` folder.

> Prefer a clean start? Create a brand-new repo instead, push the contents there,
> and point your `komibright-demo.steez.digital` DNS/Pages at it. Same steps from 1c.

---

## 2. Switch Pages to build from Actions (once)

In the repo on GitHub:

**Settings → Pages → Build and deployment → Source → select “GitHub Actions.”**

(It's currently “Deploy from a branch.” Changing this is what lets the workflow
publish the built `out/` instead of serving raw files.)

---

## 3. Watch it deploy

Go to the **Actions** tab. You'll see the **“Deploy to GitHub Pages”** run start
automatically from your push (it also triggers on future pushes to `main`).

- The `build` job runs `npm install` + `npm run build` and uploads `out/`.
- The `deploy` job publishes it and prints the live URL.

First run takes ~1–2 minutes. Green check = live.

---

## 4. Confirm the custom domain

Your `public/CNAME` (`komibright-demo.steez.digital`) is copied into the build,
so the domain carries over. Verify under **Settings → Pages**:

- Custom domain shows `komibright-demo.steez.digital`.
- “Enforce HTTPS” is checked (may take a few minutes to become available).

Your DNS is unchanged — the same GitHub Pages A records you already use keep
working.

---

## 5. Verify the live site

Open these and confirm they load (they're the URLs that must not break):

- `/` and `/index.html`
- `/products.html`, `/ro-systems.html`, `/products/kb-c25r-electricity-free-reverse-osmosis-system.html`
- `/zh/`, `/zh/index.html`, `/zh/products.html`
- a bad URL like `/nope` → should show the 404 page

---

## Rollback

If anything looks wrong, revert `main` to the old site instantly:

```bash
git checkout main
git reset --hard archive/static-site
git push --force origin main
```

Then set **Settings → Pages → Source** back to **“Deploy from a branch”** if you
want the old raw-HTML behavior again.

---

## Everyday workflow after this

Edit content in `data/` (or components), then:

```bash
git add -A && git commit -m "…" && git push
```

The Action rebuilds and redeploys. No manual build/upload ever again.

### Optional: faster, reproducible installs

Commit a lockfile once so CI installs are pinned and quicker:

```bash
npm install          # generates package-lock.json
git add package-lock.json && git commit -m "Add lockfile" && git push
```

Then change `npm install` → `npm ci` in `.github/workflows/deploy.yml`.
