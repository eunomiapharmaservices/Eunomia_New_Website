# Social sharing and content image descriptions

Page metadata is wrapped with `withSocialMetadata` to emit Open Graph and large Twitter cards using the page's existing title, description and canonical URL. Article metadata keeps its article type and any author/date fields.

The `/social/[...slug]` route generates one 1200×627 PNG per page at build time. Static page image titles are listed in `social-pages.json`; update that entry when changing a page title, and add an entry for each new static content page. Article images read `article-seo.json` directly, so article metadata updates flow into the images automatically. These routes are public and use no external image/font service or credentials.

Resource thumbnail alt text uses the resource topic; team portraits use the person's name. Keep empty alt text on decorative images such as repeated logos and the map background.

Validation: run the production build, then `node --test tests/*.test.mjs`. The social build tests check generated HTML, all sharing PNG dimensions, unique image URLs, and non-empty alt text on resources/team pages.
