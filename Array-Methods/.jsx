import React from "react";
function App() {
  const name = "Reed";
  const bio = {
    age: 28,
    isEnglishSpeaker: true,
  };
  return (
    <>
      <h1>{name}</h1>
      <h2>I am {bio.age} years old</h2>
      <p>Speaks English: {bio.isEnglishSpeaker}</p>
    </>
  );
}
export default App;
