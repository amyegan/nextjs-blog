import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.heroSection}>
        <p style={{ margin: "0", padding: "0" }}>
          Hi! I'm Amy <br />
          <span style={{ color: "var(--gray-light)", fontWeight: "200" }}>
            and I use the internet to solve problems.
          </span>
        </p>
      </section>

      <section
        className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.homeSection}`}
      >
        <p style={{ margin: "0", padding: "0" }}>
          I build projects with code and (try to) answer people's dev questions.
          I occasionally write about it here. You can also find me in{" "}
          <Link href="https://github.com/vercel/community/discussions">
            Vercel Community Discussions
          </Link>{" "}
          on GitHub.
        </p>
      </section>

      <section
        className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.homeSection}`}
      >
        <h2 className={utilStyles.headingLg}>Blog</h2>
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
