import { NextApiRequest, NextApiResponse } from 'next'

console.log('Log from outside of function')

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return res.json({ message: 'Hello, world (serverless)' })
}