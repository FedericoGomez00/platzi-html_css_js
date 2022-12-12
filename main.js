const navbar_email = document.querySelector('.navbar-email');
const desktop_menu = document.querySelector('.desktop-menu');

const icon_menu = document.querySelector('.menu');
const mobile_menu = document.querySelector('.mobile-menu');

const shopping_icon = document.querySelector('.navbar-shopping-cart');
const order_list = document.querySelector('.product-detail');

const cards_container = document.querySelector('.cards-container');


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

function setProductsHtml() {
    /**
     * Agrega los productos a partir de un array (harcodeado hasta el momento) al HTML
     * La función recorre el array de productos y los maqueta para renderizarlos.
     */

    let productList = [];

    let i = 1;
    while(i <= 10) {
        productList.push(
            {
                name: 'Bike',
                price: 120,
                image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            }
        )
        i++;
    }
    console.log(productList);

    for (product of productList) {
        const product_card = document.createElement('div');
        product_card.classList.add('product-card');

            const product_img = document.createElement('img');
            product_img.setAttribute('src', product.image);

            const product_info = document.createElement('div');
            product_info.classList.add('product-info');

                const product_info_div = document.createElement('div');

                    const product_price = document.createElement('p');
                    product_price.innerText = '$' + product.price;

                    const product_name = document.createElement('p');
                    product_name.innerText = product.name;

                const product_info_figure = document.createElement('figure');
                
                    const product_img_cart = document.createElement('img');
                    product_img_cart.setAttribute('src', './original-components/icons/bt_add_to_cart.svg');
        
        product_card.appendChild(product_img);
        product_card.appendChild(product_info);
        product_info.appendChild(product_info_div);
        product_info.appendChild(product_info_figure);
        product_info_div.appendChild(product_price);
        product_info_div.appendChild(product_name);
        product_info_figure.appendChild(product_img_cart);

        cards_container.appendChild(product_card);
    }
}
