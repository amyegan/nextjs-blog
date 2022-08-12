// export async function getServerSideProps(context) {
//   const host = context.req.headers.host;
//   let databaseUrl = process.env.DATABASE_URL;
//   if (domain === "nightly.example.com") {
//     // Use nightly database url
//     databaseUrl = process.env.DATABASE_URL_NIGHTLY;
//   }

//   // Get the data

//   return {
//     props: {
//       data,
//     },
//   };
// }

export function getStaticProps() {
  return {
    props: {
      env: process.env.VERCEL_ENV,
      nextEnv: process.env.NEXT_PUBLIC_VERCEL_ENV,
      example: process.env.EXAMPLE,
    },
  };
}

export default function TestComponen({ env, nextEnv, example }) {
  return (
    <>
      <h1>
        {example} in {env}
      </h1>
      <p>Next.js env is {nextEnv}</p>
    </>
  );
}
