import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export async function GetServerSideProps({ params }) {
  const slug = params?.slug;
  return {
    props: {
      slug,
      encodedSlug: encodeURIComponent(slug),
    },
  };
}

export default function Test({ slug, encodedSlug }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.heroSection}>
        <ul>
          <li>Slug: {slug}</li>
          <li>Encoded slug: {encodedSlug}</li>
        </ul>
      </section>
    </Layout>
  );
}
