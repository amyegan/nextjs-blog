import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const response = await fetch("https://nextjs-blog-amyegan.vercel.app/api/sitemap",
  {
    headers: {
      "x-my-custom-auth-header": "SomeSecretValue"
    }
  })
  const data = response.json();
  console.log('data', data)
  return res.json({ message: 'Hello, world (serverless)', sitemap: data })
}