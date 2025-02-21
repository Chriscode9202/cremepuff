function toggleMenu() {
    const menu = document.getElementById('nav');
    const hamburger = document.querySelector('.hamburger-menu');

    //Toggle drop down menu visibility
    menu.style.display = (menu.style.display === "block") ? "none" : "block";

    //toggle hamburger icon animation
    hamburger.classList.toggle('toggle');
}
//close dropdown if user clicks anywhere outside hamburger icon or menu//
document.addEventListener('click', function(event){
    const menu = document.getElementById('nav');
    const hamburger = document.querySelector('.hamburger-menu');
   
    //checks if clicked area is outside both the hamburger menu and dropdown menu//
    if (!hamburger.contains(event.target) && !menu.contains(event.target)) {
        //closes menu
        menu.style.display = 'none';
        hamburger.classList.remove('toggle');
    }
})