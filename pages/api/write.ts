import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
require('os').tmpdir()

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  let data = {
    foo: "bar",
    hate: "this"
  };
  const filePath = path.join("/tmp", "data.json");
  console.log('filepath', filePath)
  
  fs.writeFileSync("/tmp/data.json", JSON.stringify(data))

  const stringified = fs.readFileSync(filePath, 'utf8');

  response.status(200).json({
    body: request.body,
    query: request.query,
    cookies: request.cookies,
    stringified
  });
}
