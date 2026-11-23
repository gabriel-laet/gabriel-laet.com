# gabriel-laet.com

Personal site: bio, projects, essays. [Astro](https://astro.build), static,
served by a Cloudflare Worker (static assets) that owns `gabriel-laet.com`
and `www.gabriel-laet.com` as custom domains.

```
pnpm install
pnpm dev        # http://localhost:4321
pnpm deploy     # build + wrangler deploy
```

## Content

- **Bio** — `src/pages/index.astro` (look for `TODO: bio`).
- **Projects** — `src/projects.ts`.
- **Essays** — one Markdown file per essay in `src/content/essays/`
  (`title`, `date`, optional `summary`, `lang: pt | en`, `draft`).
  The file name is the URL: `foo.md` → `/essays/foo/`. `exemplo.md` is a
  template and stays out of the build while `draft: true`.

## Projects under /p/

Projects live in their own repos and their own Workers, on more specific
routes of this domain, which take precedence over this Worker's custom domain:

| Path | Repo | Worker |
|---|---|---|
| `/p/rios-invisiveis/` | [gabriel-laet/rios-invisiveis](https://github.com/gabriel-laet/rios-invisiveis) | `rios-invisiveis` |

To add one: build it for its base path, deploy it as a Worker with a route
`gabriel-laet.com/p/<name>*` (zone `gabriel-laet.com`), and list it in
`src/projects.ts`.
