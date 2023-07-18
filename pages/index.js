/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Link from "next/link";
import PrettyDate from "../components/date";
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
          Hi! I'm a preview deployment <br />
          <span style={{ color: "var(--gray-light)", fontWeight: "200" }}>
            and I help you test problems on the internet.
          </span>
        </p>
      </section>

      <section className={`${utilStyles.homeSection}`}>
        <div className={utilStyles.column}>
          <p>
            I have been a professional web developer for over a decade. These
            days I{" "}
            <span style={{ color: "var(--gray-light)", fontWeight: "200" }}>
              (try to)
            </span>{" "}
            answer people's dev questions about Vercel.
          </p>
          <p style={{ marginBottom: "3em" }}>
            I occasionally write about related topics here. You can usually find
            me in{" "}
            <Link href="https://github.com/vercel/community/discussions">
              Vercel Discussions
            </Link>{" "}
            on GitHub. And sometimes on{" "}
            <Link href="https://twitter.com/amyegan">Twitter</Link>, <Link href="https://indieweb.social/@amyegan">Mastodon</Link>, and{" "}
            <Link href="https://www.linkedin.com/in/amyaegan">LinkedIn</Link>.
          </p>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/blog/${id}`} legacyBehavior={false}>
                  {title}
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <PrettyDate dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
}
