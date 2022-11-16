import fs from "fs";
import path from "path";
import { getAllPostIds } from "../../lib/posts";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('foo', process.env.FOO)
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/xml");

  // instruct he Vercel edge to cache the file
  res.setHeader("Cache-control", "stale-while-revalidate, s-maxage=3600");

  // get posts data
  const postsPath = path.join(process.cwd(), "posts");

  const posts = getAllPostIds().map(({ params }) => {
    let postPath = path.join(postsPath, `${params.id}.md`);
    const dateModified = fs.statSync(postPath).mtime;
    return { id: params.id, dateModified };
  });

  // generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts);

  // send the XML to the browser
  res.end(sitemap);
}

const BASE_URL = {
  development: "http://localhost:3000",
  production: "https://amyegan.com",
}[process.env.NODE_ENV];

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
   <url>
      <loc>${`${BASE_URL}`}</loc>
    </url>
    <url>
      <loc>${`${BASE_URL}/blog`}</loc>
    </url>
     ${
       // Add the blog post URLs for sitemap
       posts
         .map(({ id, dateModified }) => {
           return `
       <url>
           <loc>${`${BASE_URL}/blog/${id}`}</loc>
           <lastmod>${new Date(dateModified).toISOString()}</lastmod>
       </url>
     `;
         })
         .join("")
     }
   </urlset>
 `;
}
