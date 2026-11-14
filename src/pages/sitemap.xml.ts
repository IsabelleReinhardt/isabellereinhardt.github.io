// Sitemap für Suchmaschinen (Google, Bing …): listet alle öffentlichen Seiten auf.
// Wird beim Build automatisch als /sitemap.xml erzeugt – neue Projekte kommen von selbst dazu
// (alles aus projects.ts ohne hidden: true).
import type { APIRoute } from 'astro';
import { projects } from '../data/projects';
import { SITE_URL } from '../data/site';

export const GET: APIRoute = () => {
  const paths = [
    '/', '/work/', '/about/', '/contact/', '/impressum/', '/datenschutz/',
    ...projects.filter((p) => !p.hidden).map((p) => `/work/${p.slug}/`),
  ];
  const urls = paths.map((p) => `  <url><loc>${new URL(p, SITE_URL).href}</loc></url>`).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
