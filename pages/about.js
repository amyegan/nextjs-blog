export async function getStaticProps() {
  return {
    props: {
      ...props,
      staticUrl: process.env.VERCEL_URL,
    },
  };
}

export async function getServerSideProps() {
  return {
    props: {
      ...props,
      serverUrl: process.env.VERCEL_URL,
    },
  };
}

export default function About({ serverUrl, staticUrl }) {
  console.log("staticUrl", staticUrl);
  console.log("serverUrl", serverUrl);
  return <h1>About</h1>;
}
