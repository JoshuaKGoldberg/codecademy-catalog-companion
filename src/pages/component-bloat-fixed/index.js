import dynamic from "next/dynamic";
import React, { useState } from "react";
import { PageContainer } from "~/components/PageContainer";

// https://nextjs.org/docs/advanced-features/dynamic-import
const ExpensiveComponent = dynamic(() =>
  import("~/components/ExpensiveComponent")
);

export default function ComponentBloatFixed() {
  const [showing, setShowing] = useState(false);

  return (
    <PageContainer title="Component Bloat: Fixed 😊">
      <p>
        Now we've fixed the page load speed issues by lazy-loading the expensive
        component. No more page load time issues!
      </p>
      {showing ? (
        <ExpensiveComponent />
      ) : (
        <button onClick={() => setShowing(true)} type="button">
          Show Component
        </button>
      )}
    </PageContainer>
  );
}
