const navbar_email = document.querySelector('.navbar-email');
const desktop_menu = document.querySelector('.desktop-menu');

navbar_email.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    /**
     * La función agrega o quita (dependiendo si ya está o no) la clase inactive al desktop menu
    */
    
    // const classname = desktop_menu.className;

    // if (classname.includes('inactive')) {
    //     const new_classname = classname.split(' ');
    //     desktop_menu.className = new_classname[0];
    // }
    // else {
    //     desktop_menu.className = classname + ' inactive';
    // }

    desktop_menu.classList.toggle('inactive');
}