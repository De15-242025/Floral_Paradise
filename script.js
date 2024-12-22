function showImages(setId) {
    const containers = document.querySelectorAll('.container2');
    containers.forEach(container => container.classList.remove('active'));

    const activeContainer = document.getElementById(setId);
    if (activeContainer) {
        activeContainer.classList.add('active');
    }
}
document.getElementById('set_flover').addEventListener('click', function(event) {
    event.preventDefault(); 
    document.querySelector('.words1').scrollIntoView({
      behavior: 'smooth', 
      block: 'center' 
    });
  });
  const phoneInput = document.getElementById('phone');

        phoneInput.addEventListener('input', function () {
            let value = phoneInput.value;

            if (!value.includes('+7(')) {
                phoneInput.value = '+7(';
            }

            phoneInput.value = phoneInput.value
                .replace(/[^\d\+()\- ]/g, '') 
                .replace(/(\+7\()(\d{1,3})(.*)/, (match, prefix, digits, rest) => {
                    if (digits.length === 3 && !rest.includes(')')) {
                        return prefix + digits + ')' + rest;
                    }
                    return prefix + digits + rest;
                });
        });

        phoneInput.addEventListener('focus', function () {
            if (phoneInput.value === '') {
                phoneInput.value = '+7(';
            }
        });

        phoneInput.addEventListener('blur', function () {
            if (phoneInput.value === '+7(') {
                phoneInput.value = '';
            }
        });
    const consultationButton = document.getElementById('set_consultation'); 
    const consultationSection = document.getElementById('florist-section');  
    consultationButton.addEventListener('click', function () {
        consultationSection.scrollIntoView({
            behavior: 'smooth', 
            block: 'start',     
        });
    });
    document.getElementById("set_delivery").addEventListener("click", function () {
        const deliverySection = document.getElementById("delivery-section");
        window.scrollTo({
            top: deliverySection.offsetTop, 
            behavior: "smooth"
        });
    });
    document.getElementById("set_payment_and_delivery").addEventListener("click", function () {
        const deliverySection = document.getElementById("payment_and_deliver-section");
        window.scrollTo({
            top: deliverySection.offsetTop, 
            behavior: "smooth"
        });
    });
    (function loadYandexMap() {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.charset = 'utf-8';
        script.async = true;
        script.src = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A011ab41d3b062f3b44825e7ebf990f56eb528d836e446055933b4235649c11bb&amp;width=522&amp;height=400&amp;lang=ru_RU&amp;scroll=true';
        document.querySelector('.container8').appendChild(script);
    })();
    document.getElementById("set_contact").addEventListener("click", function () {
        const deliverySection = document.getElementById("contact-section");
        window.scrollTo({
            top: deliverySection.offsetTop, 
            behavior: "smooth"
        });
    });
    const cart = [];

const showCartButton = document.getElementById('show-cart');
const cartModal = document.getElementById('cart-modal');
const modalOverlay = document.getElementById('modal-overlay');
const closeCartButton = document.getElementById('close-cart');

showCartButton.addEventListener('click', () => {
    cartModal.classList.add('active');
    modalOverlay.classList.add('active');
});

closeCartButton.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

function closeModal() {
    cartModal.classList.remove('active');
    modalOverlay.classList.remove('active');
}

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const name = button.dataset.name;
        const price = parseInt(button.dataset.price);

        const existingItem = cart.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ name, price, quantity: 1 });
        }
        updateCartUI();
    });
});

function updateCartUI() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    cartItemsContainer.innerHTML = '';
    let totalPrice = 0;

    cart.forEach(item => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>${item.price * item.quantity} Руб.</td>
            <td><button class="remove" data-name="${item.name}">Удалить</button></td>
        `;

        cartItemsContainer.appendChild(row);
        totalPrice += item.price * item.quantity;
    });

    totalPriceElement.textContent = totalPrice;

    document.querySelectorAll('.remove').forEach(button => {
        button.addEventListener('click', () => {
            const name = button.dataset.name;
            const index = cart.findIndex(item => item.name === name);
            if (index !== -1) {
                cart.splice(index, 1);
            }
            updateCartUI();
        });
    });
}
    
    
        
