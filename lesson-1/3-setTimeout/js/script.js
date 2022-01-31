// The setTimeout method is used to execute a
// function after a specified period of time.
setTimeout(function (){
console.log("hello i am Sander");
}, 2000)//2sek

//1. select the class .loader
//use setTimeout
//Change the inner HTML of the loading

let loading = document.querySelector(".loader")
setTimeout(function(){
loading.innerHTML = "Finished downloading";
}, 5000)