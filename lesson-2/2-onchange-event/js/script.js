const dropdown = document.querySelector("select");
const circles = document.querySelector(".circles");//circles=ul

dropdown.onchange = function(event){
    circles.innerHTML = "";
    for(let i = 1; i <= event.target.value; i++){
        console.log(i);
        circles.innerHTML += `<li class="circle">${i}</li>`//circle=li
    }
}