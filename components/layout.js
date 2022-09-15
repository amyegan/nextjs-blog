import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import Link from "next/link";
import { NavLink } from "./navLink";

const name = "Amy";
export const siteTitle = "Amy Egan";

export default function Layout({ children, home, post }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#28282d"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#f1f0ec"
        />
        <script async data-api="/_hive" src="/bee.js"></script>
      </Head>
      <meta name="robots" content="all" />
      <header
        className={styles.header}
        style={home && { position: "fixed", top: "0" }}
      >
        <Link href="/" className={styles.siteName}>
          {siteTitle}
        </Link>
        <nav className={styles.bar}>
          <ul>
            <li>
              <NavLink href="/" exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink href="/blog">Blog</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      {home ? (
        <main className={styles.home}>{children}</main>
      ) : (
        <main className={styles.main}>
          {children}
          {post && (
            <div className={styles.backToHome}>
              <Link href="/blog">← Back to blog list</Link>
            </div>
          )}
        </main>
      )}

      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <a href="https://github.com/amyegan" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--text)"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={styles.feather}
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>{" "}
            GitHub
          </a>
          <a href="https://twitter.com/AmyAEgan" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={styles.feather}
            >
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
            </svg>{" "}
            Twitter
          </a>
          <a href="https://www.linkedin.com/in/AmyAEgan" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={styles.feather}
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>{" "}
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}
