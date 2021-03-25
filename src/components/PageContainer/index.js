import Link from "next/link";
import React from "react";

import { MainArea } from "../MainArea";

export const PageContainer = ({ children, title }) => {
  return (
    <MainArea>
      <header>
        <Link href="/">Go Back</Link>
      </header>
      <main>
        <h1>{title}</h1>
        {children}
      </main>
    </MainArea>
  );
};
