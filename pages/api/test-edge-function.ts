import { NextResponse } from 'next/server'

export const config = {
  runtime: 'edge',
  regions: ['sfo1', 'pdx1', 'iad1'],
}

console.log('Log from outside of function')

export default function handler() {
  console.log('Log from inside of function')
  return NextResponse.json({ message: 'Hello, world (edge)' })
}