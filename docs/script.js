window.onload = function() {
    let navbar = document.getElementById("nav-bar");
    navbar.classList.remove("sticky");
}
window.onscroll = function(){stickyFunction()};

function stickyFunction() {
    let navbar = document.getElementById("nav-bar");
    let sticky = navbar.offsetTop;
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}
