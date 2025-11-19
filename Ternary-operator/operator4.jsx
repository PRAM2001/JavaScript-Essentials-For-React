import React from "react";
function App() {
  const isLoggedIn = true;
  // If true: nothing, if false: Who are you?
  return <div>{isLoggedIn || "Who are you?"}</div>;
}
export default App;

/*

1.The Ternary Operator (? :) can replace an if-else block, acting as an expression that can be inserted directly inside curly braces within JSX.
2.The Logical AND Operator (&&) is useful for rendering an element only if a condition is true. If the first operand (condition) is true, the second operand (element/expression) is returned and rendered; otherwise, false is returned and nothing is rendered.
3.The Logical OR Operator (||) is used to render an element only if a condition is false. If the first operand (condition) is falsy, the second operand is returned and rendered; otherwise, the first operand is returned.
*/
