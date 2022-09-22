import Head from "next/head";
import Layout from "../../components/layout";
import Date from "../../components/date";
import { getAllPostIds, getPostData } from "../../lib/posts";
import utilStyles from "../../styles/utils.module.css";

export default function Post({ postData, slug }) {
  return (
    <Layout post>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} /> {slug && `| ${slug}`}
        </div>

        <div>slug: {slug}</div>
        <div>encodedSlug: {encodeURIComponent(slug)}</div>

        <hr />

        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  // Return a list of possible values for id
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const postData = await getPostData(params.id);
  console.log("Params", JSON.stringify(params));
  const slug = params?.id || "unknown";
  return {
    props: {
      postData,
      slug,
    },
  };
}

// export async function GetServerSideProps({ params }) {
//   const slug = params?.slug;
//   return {
//     props: {
//       slug,
//       encodedSlug: encodeURIComponent(slug),
//     },
//   };
// }
