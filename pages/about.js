export async function getServerSideProps(context) {
  const { req } = context;
  return {
    props: {
      domain: req.headers.host,
      vercelUrl: process.env.VERCEL_URL,
    },
  };
}

export default function TestComponen({ domain, vercelUrl }) {
  console.log("domain", domain);
  console.log("vercelUrl", vercelUrl);
  let databaseUrl = process.env.DATABASE_URL;
  if (domain === "nightly.example.com") {
    // Use nightly database url
    databaseUrl = process.env.DATABASE_URL_NIGHTLY;
  }
  return <h1>Test Component</h1>;
}
