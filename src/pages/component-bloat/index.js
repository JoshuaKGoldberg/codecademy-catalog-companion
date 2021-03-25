import React, { useState } from "react";
import ExpensiveComponent from "~/components/ExpensiveComponent";

export default function ComponentBloat() {
  const [showing, setShowing] = useState(false);

  return (
    <div>
      <h1>Hello, world!</h1>
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
    </div>
  );
}
