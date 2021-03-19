import Head from "next/head";

import styles from "./index.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <Head>
        <title>Codecademy Catalog Companion</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>hello world</main>
    </div>
  );
}