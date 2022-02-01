//Question 1: what are function expressions
//functions assigned to a variable

const myFunctionExpression = function () {
  console.log("Hello");
};

myFunctionExpression();

//Questionj 2: how to detect an event on a button
//Way one:
//A: select the button with class
const button = document.querySelector(".btn");

// //B:use a function expression
// const clickTheButton = function(){
//     console.log("Clicked the button");
// }
// //use addEventListener
// button.addEventListener("click", clickTheButton);

//Way two:
// button.onclick = function(){
//     console.log("I clicked the button second");
// };

//Question 3: key pass
//The onKeyDown event is triggered when the user presses a key
//The onKeyUp event is triggered when the user releases a key
//The onKeyPress event is triggered when the user presses & releases a key (not used anymore)

const myFirstNameInput = document.querySelector("#firstName");

const handleKeyPress = function (event) {
  console.log("a key is pressed");
  console.log(event.target.value);
};

myFirstNameInput.addEventListener("keydown", handleKeyPress); //Logs everytime a key is pressed(and the key that got pressed)

//Question 4: play with mouseover (to detect hoovering)

const theHoverBtn = document.querySelector(".pet-btn");

const handleMouseOver = function (event) {
  theHoverBtn.classList.add("hover");
  console.log(event.target.dataset.animal);
};
theHoverBtn.addEventListener("mouseover", handleMouseOver); //Will change the class name in the elements(inspect)

//Question 5: play with mouseout
const handleMouseOut = function () {
  theHoverBtn.classList.remove("hover");
};
theHoverBtn.addEventListener("mouseout", handleMouseOut); //Removes the class name again

//Question 6: select all the li
//on mouse over show the data-animal
const dataAnimal = document.querySelectorAll("li");
for (let i = 0; i < dataAnimal.length; i++) {
    dataAnimal[i].addEventListener("mouseover", hoverDataAnimal);
}

function hoverDataAnimal(event){
    console.log(event.target.dataset.animal);
}