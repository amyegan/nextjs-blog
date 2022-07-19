import fs from "fs";
import { getAllPostIds } from "../lib/posts";

//pages/sitemap.xml.js
const BASE_URL = {
  development: "http://localhost:3000",
  production: "https://amyegan.com",
}[process.env.NODE_ENV];

function generateSiteMap(staticPages, posts) {
  console.log({ staticPages, posts });
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${
       // Add the page URLs for sitemap
       staticPages
         .map(({ id, dateModified }) => {
           return `
       <url>
           <loc>${`${BASE_URL}/${id}`}</loc>
           <lastmod>${new Date(dateModified).toISOString()}</lastmod>
       </url>
     `;
         })
         .join("")
     }

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

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  const staticPages = fs
    .readdirSync("pages")
    .filter((staticPage) => {
      return !["_app.js", "404.js", "sitemap.xml.js"].includes(staticPage);
    })
    .map((id) => {
      const dateModified = fs.statSync(`pages/${id}`).mtime;
      return { id, dateModified };
    });

  const posts = getAllPostIds().map(({ params }) => {
    const dateModified = fs.statSync(`posts/${params.id}.md`).mtime;
    return { id: params.id, dateModified };
  });

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(staticPages, posts);

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
