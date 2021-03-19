import dynamic from "next/dynamic";
import React, { useState } from "react";

const ExpensiveComponent = dynamic(() =>
  import("~/components/ExpensiveComponent")
);

export default function ComponentBloatFixed() {
  const [showing, setShowing] = useState(false);

  return (
    <div>
      <h1>Hello, world!</h1>
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