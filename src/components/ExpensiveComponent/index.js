// This component has a lot of dependencies...
// Never fear, you don't need to know how any of them work!
// Just know that this component requires a lot of JavaScript to run.
import { Chance } from "chance";
import { range } from "lodash";
import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { List } from "react-virtualized";

const chance = new Chance("Yippee!");

const people = range(100).map(() => ({
  id: chance.guid(),
  name: chance.name(),
}));

const markdown = ({ id, name } = {}) => `
## Hello, ${name}!

~~~js
// ID: ${id}
console.log("Hooray! It's ${name}!");
~~~
`;

const renderers = {
  code: ({ language, value }) => {
    return (
      <SyntaxHighlighter style={dark} language={language} children={value} />
    );
  },
};

const renderRow = ({ index, style }) => {
  return (
    <ReactMarkdown key={people[index].name} renderers={renderers} style={style}>
      {markdown(people[index])}
    </ReactMarkdown>
  );
};

export const ExpensiveComponent = () => {
  // I know this doesn't use the react-virtualized API quite right, but that's not
  // the point of this companion component. Don't worry about it. 😉
  // (If I, the author, don't know how this works, you certainly won't need to!)
  return (
    <List
      height={500}
      rowCount={people.length}
      rowHeight={50}
      rowRenderer={renderRow}
      style={{ overflowX: "hidden" }}
      width={500}
    />
  );
};

// TODO EXPLAIN
export default ExpensiveComponent;
