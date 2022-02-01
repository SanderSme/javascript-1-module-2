// The setInterval method is similar to
// setTimeout but it executes a function at
// a certain interval until it is cleared.

// setInterval(function () {
//     console.log("Hello i am Sander");
// }, 60000); //Logs the message every 60 seconds


// let count = 0;
// const intervalID = setInterval(function (){
//     console.log("hello");
//     count = count + 1;
//     console.log(count);
//     if (count === 10) {
//         console.log("Interval finished");
//         clearInterval(intervalID);
//     }
// }, 1000); //counts to 10 then stops



//Count in the HTML
const container = document.querySelector(".container");

let counter = 0;

const intervalDone = setInterval(function () {
    counter = counter + 1;
    const listItem = document.createElement("li");
    listItem.innerHTML = counter;
    container.append(listItem);
    if(counter === 10) {
        clearInterval(intervalDone);
    }
}, 1000);