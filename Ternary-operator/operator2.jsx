import React from "react";
function App() {
  const isLoggedIn = true;
  // Shows: Welcome back!
  return <div>{isLoggedIn ? "Welcome back!" : "Who are you?"}</div>;
}
export default App;
