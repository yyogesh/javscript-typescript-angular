// IIFE 

(function () { // parent 
    let count = 1; // global scope, local scope, block scope // jquery // closure

    document.querySelector('button').addEventListener('click', () => { // child function
        alert(count++);
    });

})();



// function Counter() {
//     let count = 0;

//     this.up = function () {
//         return ++count;
//     };

//     this.down = function () {
//         return --count;
//     };
// }

// let counter = new Counter();

// alert(counter.up()); // 1
// alert(counter.up()); // 2
// alert(counter.down()); // 1


// function makeCounter() {
//     let count = 0;
//     return function () {
//         return count++;
//     }
// }

// let counter = makeCounter();

// console.log(counter());


// ( function( ) {
// 	"use strict";

// // Pass this if window is not defined yet
// } )( typeof window !== "undefined" ? window : this, function( window, noGlobal ))