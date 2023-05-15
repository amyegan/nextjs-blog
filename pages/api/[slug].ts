import { type NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
  console.log('req', {url: req.url, query: req.query, host: req.headers?.host});
  return res.status(200).json({ data: req.query });
};

export default handler;