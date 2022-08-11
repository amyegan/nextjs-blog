export async function getStaticProps() {
  return {
    props: {
      vercelUrl: process.env.VERCEL_URL,
    },
  };
}

export default function About({ vercelUrl }) {
  console.log("vercelUrl", vercelUrl);
  return <h1>About</h1>;
}
