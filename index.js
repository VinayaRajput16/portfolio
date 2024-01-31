var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Freelancer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

let menu = document.getElementById('h-menu');
let navbar= document.querySelector('.navbar');

menu.onclick = function(){
    navbar.classList.toggle('active');
}