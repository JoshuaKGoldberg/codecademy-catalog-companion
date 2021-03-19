import React, { useState } from "react";
import ExpensiveComponent from "~/components/ExpensiveComponent";

export default function ComponentBloat() {
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
