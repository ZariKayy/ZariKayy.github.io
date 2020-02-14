function toggleNav(){
    let navItems = document.getElementById("main-nav-items");
    navItems.classList.toggle("hidden");
    console.log("test");

}
const navToggle = document.getElementById("nav-toggle");
navToggle.onclick = toggleNav;
