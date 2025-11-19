/* We're bringing into our file a library (React), a png image, and CSS
styles */
import React from "react";
import logo from "../img/site-logo.png";
import "../styles/app.css";
function App() {
return (
<div>
Welcome!
<img src={logo} alt="Site logo" />
</div>
);
}
export default App;

// constants.js
/*
export const name = "Reed";
export const age = 28;
export default function getName() {
return name;
}
// app.js
// Notice that named exports are imported between curly braces
import getName, { name, age } from "../constants.js";
console.log(name, age, getName());
*/

// constants.js
/*
const name = "Reed";
const age = 28;
function getName() {
return name;
}
export { name, age };
export default getName;
// app.js
import getName, { name, age } from "../constants.js";
console.log(name, age, getName());
*/

// constants.js
const name = "Reed";
const age = 28;
function getName() {
 return name;
}
export { name, age };
export default getName;
// app.js
import getMyName, { name as myName, age as myAge } from "../constants.js";
console.log(myName, myAge, getMyName());


/*
1.ES6 Modules allow for easy code sharing between files and enable the use of third-party libraries.
2. The core idea is to make code modular and reusable by splitting it across different files.
3.Modules support both named imports/exports (multiple items) and a default import/export (one main item per file).
4.Syntax examples show exporting variables (name, age) and functions (getName) from a constants.js file and importing them.
You can also alias or rename named imports during the import process using the as keyword.
*/