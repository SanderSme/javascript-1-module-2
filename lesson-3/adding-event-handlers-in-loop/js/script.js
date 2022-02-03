const myDivs = document.querySelectorAll(".container > div");
// console.log(myDivs);

for(let i = 0; i < myDivs.length; i++) {
    //onclick
    myDivs[i].onclick = function(event){
        console.log(event.target.dataset.price);
    }
};