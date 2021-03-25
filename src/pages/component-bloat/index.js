import React, { useState } from "react";
import ExpensiveComponent from "~/components/ExpensiveComponent";
import { PageContainer } from "~/components/PageContainer";

export default function ComponentBloat() {
  const [showing, setShowing] = useState(false);

  return (
    <PageContainer title="Problem: Component Bloat 😟">
      <p>
        This page shows a component with a lot of dependencies: so many, in
        fact, that it slows down the initial page load.
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
