/*
Concatenating strings prior to ES6.
Notice the awkward space after the word Hello?
*/

function sayHello(text) {
  return "Hello " + text + "!";
}
sayHello("React"); // Hello React!
/*
Concatenating strings using template literals.
See how much more readable and predictable this code is?
*/

function sayHelloAgain(text) {
  return `Hello again, ${text}!`;
}
sayHelloAgain("React"); // Hello again, React!

/* Go to react.new and paste this code in to see it work! */
import React from "react";
function App() {
  const [isRedColor, setRedColor] = React.useState(false);
  const toggleColor = () => setRedColor((prev) => !prev);
  return (
    <button
      onClick={toggleColor}
      style={{
        background: isRedColor ? "red" : "black",
        color: "white",
      }}
    >
      Button is {isRedColor ? "red" : "not red"}
    </button>
  );
}
export default App;

import React from "react";
import Head from "./Head";
function Layout(props) {
  // Shows site name (i.e. Reed Barger) at end of page title
  const title = `${props.title} | Reed Barger`;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main>{props.children}</main> 
    </>
  );
}


/*
1.Template Literals in JavaScript, introduced in ES6, use backticks (` `) instead of quotes to create strings.
2.Their key feature is string interpolation, allowing direct insertion of JavaScript expressions (like variables or complex logic) using the \left\{\text{expression}\right\} syntax.. This eliminates the need for the clumsy + operator for concatenation.
3.They are especially powerful in frameworks like React for dynamically injecting values and applying conditional styles/classes based on expressions like the ternary operator.
*/