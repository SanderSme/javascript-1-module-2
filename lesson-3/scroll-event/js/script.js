const navigation = document.querySelector("nav");

function handleScroll() {
    if(window.scrollY > 50){
        navigation.classList.add("scrolled")
    } else {
        navigation.classList.remove("scrolled")
    }
}
// window.onscroll = handleScroll;

window.addEventListener("scroll", handleScroll)