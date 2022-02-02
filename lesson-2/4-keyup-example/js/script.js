const formMessageContainer = document.querySelector("textarea");
const charsCount = document.querySelector(".character-count span");
const submitBtn = document.querySelector("button[type='submit']");

//onkeyup
formMessageContainer.onkeyup = function(event){
    console.log(event);
    console.log("key: ",event.key); //see the key
    console.log("value: ",event.target.value);
    const numberOfCharsEntered = event.target.value.length;
    console.log(numberOfCharsEntered);
    charsCount.innerHTML = numberOfCharsEntered;
    // if(numberOfCharsEntered >= 5) {
    //     submitBtn.disabled = false
    // } else {
    //     submitBtn.disabled = true
    // }
    submitBtn.disabled = numberOfCharsEntered <= 5;
}