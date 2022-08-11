export async function getServerSideProps(context) {
  const { req } = context;
  return {
    props: {
      vercelUrl: req.headers.host,
    },
  };
}

export default function About({ vercelUrl, nextUrl }) {
  console.log("vercelUrl", vercelUrl);
  return <h1>About</h1>;
}
