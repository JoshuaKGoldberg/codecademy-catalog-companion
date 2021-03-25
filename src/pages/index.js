import Head from "next/head";

const pages = {
  "Component Bloat":
    "This page shows a component with a lot of dependencies: so many, in fact, that it slows down the initial page load.",
  "Page Bloat":
    "This page has a ton of components in it and takes a long time on the server to process their data.",
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>Codecademy Catalog Companion</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Hello, world!</h1>
        <p>
          You've gotten the Codecademy Catalog Companion app running locally.
          Nice.
        </p>
        <p>
          Here are the separate pages you can look at with some performance
          issues:
        </p>
        <ul>
          {Object.entries(pages).map(([name, description]) => (
            <li key={name}>
              <strong>{name}: </strong>
              {description}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
