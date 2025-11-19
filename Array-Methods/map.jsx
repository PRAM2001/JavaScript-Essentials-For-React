/* Note that this isn't exactly the same as the normal JavaScript .map()
method, but is very similar. */

import React from "react";
function App() {
  const programmers = ["Reed", "John", "Jane"];
  return (
    <ul>
      {programmers.map((programmer) => (
        <li>{programmer}</li>
      ))}
    </ul>
  );
}
export default App;
