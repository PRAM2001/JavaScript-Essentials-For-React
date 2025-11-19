/* 
const user = {
name: "Reed",
age: 28,
isEnglishSpeaker: true,
};
const firstUser = {
name: user.name,
age: user.age,
isEnglishSpeaker: user.isEnglishSpeaker,
};
// Copy all of user's properties into secondUser
const secondUser = {
...user,
};
*/

const user = {
 name: "Reed",
 age: 28,
};
const moreUserInfo = {
 age: 70,
 country: "USA",
};
// Copy all of user's properties into secondUser
const secondUser = {
 ...user,
 ...moreUserInfo,
 computer: "MacBook Pro",
};
console.log(secondUser);

// { name: "Reed", age: 70, country: "USA", computer: "Macbook Pro" }


/* 
1.Object Property Shorthand – When a property name and variable name are the same, you can list only the property name to create cleaner, shorter objects.

2.Object Destructuring – This allows you to extract specific properties from an object into separate variables. It makes code easier to read and avoids repeating the object name multiple times.

3.Object Spread Operator (...) – This lets you copy all properties of an existing object into a new one. You can also merge multiple objects together, and properties listed later overwrite earlier ones if they share the same name.

These tools make working with objects more efficient, clean, and React-friendly.*/