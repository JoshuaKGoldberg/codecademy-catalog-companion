import Head from "next/head";
import { MainArea } from "~/components/MainArea";

import styles from "./index.module.css";

const pages = {
  "Server Bloat":
    "This page has a ton of components in it and takes a long time on the server to process their data.",
  "Script Bloat":
    "A very large amount of JavaScript is loaded in this page. One would say an excessive, unnecessary amount...",
  "Component Bloat":
    "This page shows a component with a lot of dependencies: so many, in fact, that it slows down the initial page load.",
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Codecademy Catalog Companion</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainArea>
        <h1>Hello, world!</h1>
        <p>
          You've gotten the Codecademy Catalog Companion app running locally.
          Nice.
        </p>
        <p>
          Each of these pages have a noticeable performance issue in its{" "}
          <em>issue</em> link with a fixed version in the <em>fixed</em> link:
        </p>
        {Object.entries(pages).map(([name, description]) => {
          const linkBase = name.toLowerCase().replace(" ", "-");
          return (
            <article className={styles.article} key={name}>
              <h2>{name}</h2>
              {description}
              <div className={styles.links}>
                <a href={linkBase} target="_blank">
                  issue
                </a>
                <a href={linkBase + "-fixed"} target="_blank">
                  fixed
                </a>
              </div>
            </article>
          );
        })}
      </MainArea>
    </>
  );
}
