import Head from "next/head";
import Link from "next/link";
import Date from "../../components/date";
import Layout, { siteTitle } from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";
import { getSortedPostsData, getCategories } from "../../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const allCategories = getCategories();
  return {
    props: {
      allPostsData,
      allCategories,
    },
  };
}

export default function Blog({ allPostsData, allCategories }) {
  return (
    <Layout blog>
      <Head>
        <title>{siteTitle} Blog</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h1 className={utilStyles.headingLg}>Blog</h1>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/blog/${id}`} legacyBehavior={false}>
                {title}
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
