"use strict";

const a1 = [1, 2, 3, 4];

console.log(a1[0]);
console.log(a1[1]);


// console.log("Sum: " + sum(1, 2));

function sum(a, b) {
    console.log(a + b);
}

sum(1, 1);

document.getElementById("sum-button").onclick = function () {
  sum(4, 6);
};

for(let i in navigator) {
    console.log(i + ":" + navigator[i]);
}

for (let attr in navigator.geolocation) {
    console.log(attr + ":" + navigator.geolocation[attr]);

}