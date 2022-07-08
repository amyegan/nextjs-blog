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
        <p className={utilStyles.column} style={{ margin: "0 0 3em" }}>
          I build projects with code and (try to) answer people's dev questions.
          I occasionally write about it here. You can usually find me in{" "}
          <Link href="https://github.com/vercel/community/discussions">
            Vercel Community Discussions
          </Link>{" "}
          on GitHub. And sometimes on{" "}
          <Link href="https://twitter.com/amyegan">Twitter</Link> and{" "}
          <Link href="https://www.linkedin.com/in/amyaegan">LinkedIn</Link>.
        </p>
        <div className={utilStyles.column}>
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
        </div>
      </section>
    </Layout>
  );
}
