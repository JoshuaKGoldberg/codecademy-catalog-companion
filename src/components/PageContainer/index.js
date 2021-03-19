import Link from "next/link";
import React from "react";

import styles from "./styles.module.css";

export const PageContainer = ({ children, title }) => {
  return (
    <div className={styles.pageContainer}>
      <header>
        <Link href="/">Go Back</Link>
      </header>
      <main>
        <h1>{title}</h1>
        {children}
      </main>
    </div>
  );
};
