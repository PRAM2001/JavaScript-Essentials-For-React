import React from "react";
const App = () => {
 const [avatar, setAvatar] = React.useState("");
 React.useEffect(() => {
 async function fetchAvatar() {
 /* Using an invalid user to create a 404 (not found) error */
 const response = await fetch("https://api.github.com/users/reedbarge");
 if (!response.ok) {
 const message = An error has occured : ${response.status};
 /* In development, you'll see this error message displayed on your
screen */
 throw new Error(message);
 }
 const data = await response.json();
 setAvatar(data.avatar_url);
 }
 fetchAvatar();
 }, []);
 return <img src={avatar} alt="Reed Barger" />;
};
export default App;


/* React uses asynchronous code to fetch external data, commonly handled through Promises.
 Promises resolve results using .then() and handle errors using .catch(). To write cleaner and more readable asynchronous code, React developers often use async/await, which works only inside normal JavaScript functions (not directly inside useEffect). 
 With async/await, data is fetched inside a separate async function, and errors are still handled using try/catch or .catch(). 
 The examples show fetching GitHub API data, updating state with the received JSON, and displaying an avatar while also demonstrating structured error handling.*/