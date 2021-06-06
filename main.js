function nav_Toggle() {
    var nav = document.getElementById("nav");
    if (nav.className === "s_nav") {
        nav.className += " responsive";
    } 
    else {
        nav.className = "s_nav";
    }
}