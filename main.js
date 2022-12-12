const navbar_email = document.querySelector('.navbar-email');
const desktop_menu = document.querySelector('.desktop-menu');

const icon_menu = document.querySelector('.menu');
const mobile_menu = document.querySelector('.mobile-menu');

navbar_email.addEventListener('click', toggleDesktopMenu);
icon_menu.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu() {
    /**
     * Muestra el menu en desktop -> cuando se da click al email (desktop_menu)
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

function toggleMobileMenu() {
    /**
     * Muestra el menu en mobile -> cuando se da click en el icono de menu (icon_menu)
     * La función agrega o quita (dependiendo si ya está o no) la clase inactive al mobile menu
    */

    mobile_menu.classList.toggle('inactive');
}