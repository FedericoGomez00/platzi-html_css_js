const darken_container = document.querySelector('.darken');

const navbar_email = document.querySelector('.navbar-email');
const desktop_menu = document.querySelector('.desktop-menu');

const icon_menu = document.querySelector('.menu');
const mobile_menu = document.querySelector('.mobile-menu');

const shopping_icon = document.querySelector('.navbar-shopping-cart');
const order_list = document.querySelector('.shopping-cart-container');

const cards_container = document.querySelector('.cards-container');

const product_detail = document.querySelector('.product-detail');
const close_product_detail = document.querySelector('.product-detail-close');

renderProducts();

navbar_email.addEventListener('click', toggleDesktopMenu);
icon_menu.addEventListener('click', toggleMobileMenu);
shopping_icon.addEventListener('click', toggleOrderList);

close_product_detail.addEventListener('click', closeProductDetail);


function toggleDesktopMenu() {
    /**
     * Muestra el menu en desktop -> cuando se da click al email (desktop_menu)
     * La función agrega o quita (dependiendo si ya está o no) la clase inactive al desktop menu
    */

    if (!order_list.classList.contains('inactive')) {
        toggleOrderList();
    }
    if (!product_detail.classList.contains('inactive')) {
        closeProductDetail();
    }

    desktop_menu.classList.toggle('inactive');
    desktop_menu.setAttribute('style', 'z-index: 2');
    darken_container.classList.toggle('inactive');
}

function toggleMobileMenu() {
    /**
     * Muestra el menu en mobile -> cuando se da click en el icono de menu (icon_menu)
     * La función agrega o quita (dependiendo si ya está o no) la clase inactive al mobile menu
    */

    if (!order_list.classList.contains('inactive')) {
        toggleOrderList();
    }
    if (!product_detail.classList.contains('inactive')) {
        closeProductDetail();
    }

    mobile_menu.classList.toggle('inactive');
    mobile_menu.setAttribute('style', 'z-index: 2');
    darken_container.classList.toggle('inactive');
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
    if (!product_detail.classList.contains('inactive')) {
        closeProductDetail();
    }

    order_list.classList.toggle('inactive');
    order_list.setAttribute('style', 'z-index: 2');
    darken_container.classList.toggle('inactive');
}

function openProductDetail(event) {
    /**
     * Muestra la descripción del producto que se cleckeó
     * Por el momento los datos estás hardcodeados
     */
    if (!desktop_menu.classList.contains('inactive')) {
        toggleDesktopMenu();
    }
    if (!mobile_menu.classList.contains('inactive')) {
        toggleMobileMenu();
    }
    if (!order_list.classList.contains('inactive')) {
        toggleOrderList();
    }
    console.log(event);
    // renderProductDetail();
    product_detail.classList.remove('inactive');
}

function closeProductDetail() {
    /**
     * Cierra la vista de detalle del producto al darle click al icono close (x)
     */

    product_detail.classList.add('inactive');
}

function renderProducts() {
    /**
     * Agrega los productos a partir de un array (harcodeado hasta el momento) al HTML
     * La función recorre el array de productos y los maqueta para renderizarlos.
     */

    let productList = [];

    let i = 1;
    while(i <= 5) {
        productList.push(
            {
                name: 'Bike',
                price: 120,
                image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            }
        )
        i++;
    }
    let n = 1;
    while(n <= 5) {
        productList.push(
            {
                name: 'Laptop',
                price: 970,
                image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            }
        )
        n++;
    }

    console.log(productList);

    for (product of productList) {
        const product_card = document.createElement('div');
        product_card.classList.add('product-card');
        product_card.addEventListener('click', openProductDetail);

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

function renderProductDetail(product) {
    /**
     * Renderiza los datos de un producto para mostrar la vista de detalle
     */

    const product_detail = document.createElement('aside');
    product_detail.classList.add('product-detail');

        const product_detail_close = document.createElement('div');
        product_detail_close.classList.add('product-detail-close');

            const close_icon = document.createElement('img');
            close_icon.setAttribute('src', './original-components/icons/icon_close.png');
        
        const product_img = document.createElement('img');
        product_img.setAttribute('src', product.image);

        const product_info = document.createElement('div');
        product_info.classList.add('product-detail__product-info');

            const product_price = document.createElement('p');
            product_price.innerText = product.price;

            const product_name = document.createElement('p');
            product_name.innerText = product.name;

            const product_description = document.createElement('p');
            product_description.innerText = product.description;

            const add_to_cart_button = document.createElement('button');
            add_to_cart_button.classList.add('primary-button add-to-cart-button');

                const add_to_cart_icon = document.createElement('img');
                add_to_cart_icon.setAttribute('src', './original-components/icons/bt_add_to_cart.svg');
                add_to_cart_button.innerText = 'Add to cart';
    
    add_to_cart_button.appendChild(add_to_cart_icon);
    product_info.appendChild(product_price);
    product_info.appendChild(product_name);
    product_info.appendChild(product_description);
    product_info.appendChild(add_to_cart_button);
    product_detail_close.appendChild(close_icon);
    product_detail.appendChild(product_detail_close);
    product_detail.appendChild(product_img);
    product_detail.appendChild(product_info);

    const main_container_asides = document.querySelector('.main-shoppingCart-productDetail');
    main_container_asides.appendChild(product_detail);
}