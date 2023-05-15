import { NextApiRequest, NextApiResponse } from "next";

export default function handler(request: NextApiRequest, response: NextApiResponse) {
  response.status(200).json({
    secret: process.env.AWS_SECRET_ACCESS_KEY,
    foo: process.env.FOO,
    control: "ctrl"
  });
}
