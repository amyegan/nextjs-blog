export default function handler(request, response) {
  let nodeEnv = process.env.NODE_ENV;
  let vercelEnv = process.env.VERCEL_ENV;
  let nextEnv = process.env.NEXT_PUBLIC_VERCEL_ENV;
  console.log("env", { nodeEnv, vercelEnv, nextEnv });

  response.status(200).json({
    body: { ...request.body, env: { nodeEnv, vercelEnv, nextEnv } },
    query: request.query,
    cookies: request.cookies,
  });
}
