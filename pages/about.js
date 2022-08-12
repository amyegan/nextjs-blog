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

export default function TestComponen() {
  let env = process.env.VERCEL_ENV;
  let example = process.env.EXAMPLE;
  return (
    <h1>
      {example} in {env}
    </h1>
  );
}
