const navbar_email = document.querySelector('.navbar-email');
const desktop_menu = document.querySelector('.desktop-menu');

const icon_menu = document.querySelector('.menu');
const mobile_menu = document.querySelector('.mobile-menu');

const shopping_icon = document.querySelector('.navbar-shopping-cart');
const order_list = document.querySelector('.product-detail');

navbar_email.addEventListener('click', toggleDesktopMenu);
icon_menu.addEventListener('click', toggleMobileMenu);
shopping_icon.addEventListener('click', toggleOrderList);

function toggleDesktopMenu() {
    /**
     * Muestra el menu en desktop -> cuando se da click al email (desktop_menu)
     * La función agrega o quita (dependiendo si ya está o no) la clase inactive al desktop menu
    */

    if (!order_list.classList.contains('inactive')) {
        toggleOrderList();
    }

    desktop_menu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    /**
     * Muestra el menu en mobile -> cuando se da click en el icono de menu (icon_menu)
     * La función agrega o quita (dependiendo si ya está o no) la clase inactive al mobile menu
    */

    if (!order_list.classList.contains('inactive')) {
        toggleOrderList();
    }

    mobile_menu.classList.toggle('inactive');
}

function toggleOrderList() {
    /**
     * Muestra el carrito de compras -> cuando se da click en el icono de carrito (shopping_icon)
     * La función agrega o quita (dependiendo si ya está o no) la clase inactive al order list
    */

    if (!desktop_menu.classList.contains('inactive')) {
        toggleDesktopMenu();
    }
    if (!mobile_menu.classList.contains('inactive')) {
        toggleMobileMenu();
    }

    order_list.classList.toggle('inactive');
}