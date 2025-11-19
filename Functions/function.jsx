//JavaScript function : returns any validJavaScript type
function javaScriptFunction() {
  return "Hello World";
}

//React function component : returns JSX
function ReactComponent(props) {
  return <h1>{props.content}</h1>;
}

//Function declaration syntax
function MyComponent(props) {
  return <div>{props.content}</div>;
}

// Arrow function syntax
const MyComponent = (props) => {
  return <div>{props.content}</div>;
};

// Arrow function syntax (shorthand)
const MyComponent = (props) => <div>{props.content}</div>;

/*
In the last example, we are using several shorthands that arrow functions
allow:
1. No parentheses around a single parameter
2. Implicit return (as compared to using the "return" keyword)
3. No curly braces for function body
*/

function App() {
  return (
    <>
      {/* Valid! FunctionDeclaration is hoisted */}
      <FunctionDeclaration />
      {/* Invalid! ArrowFunction is NOT hoisted. Therefore, it must be declared
before it is used */}
      <ArrowFunction />
    </>
  );
}

function FunctionDeclaration() {
  return <div>Hello React!</div>;
}
function ArrowFunction() {
  return <div>Hello React, again!</div>;
}

// Function declaration syntax can be immediately exported with export default or export
export default function App() {
 return <div>Hello React</div>;
}

// Arrow function syntax must use export only
export const App = () => {
 return <div>Hello React</div>;
};

// What We learned in this topic :
//1. Javascript function returns any valid Javascript type ,React function component returns JSX & Javascript functions are named in camel casing while React Function components are written with pascal casing (in which all words are capitalized).
//2.Two traditional way using the function keyword ,called a function declaration and as an arrow function .
//3.Benefit of using function declarations over arrow functions is that we dont have to worry about problems with hoisting.
//4. function declaration syntax can be immediately exported with export default or export.