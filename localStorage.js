// localStorage.setItem("theme", "dark") // to store a data with (key, value) pair
// localStorage.removeItem("theme") // to remove a data from localstorage by using key
// localStorage.getItem("theme") // to fetch data from local storage
// console.log(localStorage.length); // to check the size

// 👇️ if you need to clear localStorage
// localStorage.clear();

localStorage.setItem("site", "bobbyhadz.com");
localStorage.setItem("topic", "JavaScript");
localStorage.setItem("foo", "bar");

let keys = Object.keys(localStorage);
for (let key of keys) {
  console.log(`${key}=${localStorage.getItem(key)}`);
}

// Output
// site: bobbyhadz.com;
// topic: JavaScript;
// foo: bar;



// Using the Object.entries() method to iterate over localStorage
for (const [key, value] of Object.entries(localStorage)) {
  // topic JavaScript
  // foo bar
  // site bobbyhadz
  console.log(key, value);
}
// Output
// [
//     [
//         "topic",
//         "JavaScript"
//     ],
//     [
//         "foo",
//         "bar"
//     ],
//     [
//         "site",
//         "bobbyhadz.com"
//     ]
// ]


// Using a for loop to iterate over localStorage in JavaScript
for (let index = 0; index < localStorage.length; index++) {
  const key = localStorage.key(index);
  const value = localStorage.getItem(key);

  // topic - JavaScript
  // foo - bar
  // site - bobbyhadz.com
  console.log(`${key} - ${value}`);
}


// Don't use the for...in loop to iterate over localStorage
for (const key in localStorage) {
    console.log(key, localStorage.getItem(key));
}
// Output
// topic JavaScript
// foo bar
// site bobbyhadz.com
// length null
// clear null
// getItem null
// key null
// removeItem null
// setItem null
