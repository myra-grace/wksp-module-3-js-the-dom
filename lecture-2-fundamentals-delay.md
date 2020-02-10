# 2.3.2 - JS Fundamentals / Timing and delay

---

## [setTimeout()](https://www.w3schools.com/jsref/met_win_settimeout.asp)

```js
// Example
setTimeout(function() {
    console.log('HELLO');
}, 3000);  // counts in miliseconds

```

---

## [setInterval()](https://www.w3schools.com/jsref/met_win_setinterval.asp)

```js
// Example
const myTimer = setInterval(function() {
    console.log('here');
}, 1000);  //runs automatically right away

clearInterval(myTimer);  //stops the interval

```

---

💡 Always use `clearInterval` to stop your `setInterval` loop

This will require the `setInterval` to be declared.

```js
// Example

```

---


