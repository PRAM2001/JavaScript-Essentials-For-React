import React from "react";
function App() {
  const programmers = ["Reed", "John", "Jane"];
  return (
    <ul>
      {/* Returns 'Reed' */}
      {programmers
        .reduce((acc, programmer) => {
          if (!programmer.startsWith("J")) {
            return acc.concat(programmer);
          } else {
            return acc;
          }
        }, [])
        .map((programmer) => (
          <li>{programmer}</li>
        ))}
    </ul>
  );
}
export default App;

/*
1.map() is used to transform each element of an array and return a new array of the same length.
2.filter() selects only the elements that match a condition and returns a new, smaller array.
3.reduce() processes all elements and reduces them into a single value (like a number, object, or array).
4.All three methods do not change the original array; they return new ones.
They are commonly used in React to prepare and display data inside JSX.
Together, these methods help manipulate arrays efficiently and cleanly in JavaScript.
*/
