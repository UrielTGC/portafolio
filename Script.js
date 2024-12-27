bars = document.querySelector(".bars");
bars.onclick = function(){
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}
function smoothScroll(event, targetId) {
    event.preventDefault();
    document.getElementById(targetId).scrollIntoView({
        behavior: 'smooth'
    });
}
