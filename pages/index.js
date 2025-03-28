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
          Hi! I'm Amy <br />
          <span style={{ color: "var(--gray-light)", fontWeight: "200" }}>
            and I solve problems on the internet.
          </span>
        </p>
      </section>

      <section className={`${utilStyles.homeSection}`}>
        <div className={utilStyles.column}>
          <p>
            I have been a professional web developer for over a decade. These
            days I manage the{" "}
            <a href="https://vercel.community">Vercel Community</a>, answering
            people's dev questions and encouraging collaboration and
            knowledge-sharing among fellow developers. When not focused on
            keeping the web fast and fun, I'm usually watching birds and
            touching grass.
          </p>
          <p style={{ marginBottom: "3em" }}>
            You can also find me on{" "}
            <Link href="https://bsky.app/profile/amyegan.dev">Bluesky</Link>,{" "}
            <Link href="https://x.com/AmyAEgan">X/Twitter</Link>, and{" "}
            <Link href="https://www.linkedin.com/in/amyaegan">LinkedIn</Link>.
          </p>
        </div>
      </section>
    </Layout>
  );
}
