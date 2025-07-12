document.addEventListener('DOMContentLoaded', () => {
    // Инициализация корзины
    const cart = [];
    
    // Обработчики для кнопок "В корзину"
    document.querySelectorAll('.buy-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const productCard = e.target.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            const productPrice = productCard.querySelector('.price').textContent;
            
            cart.push({
                name: productName,
                price: productPrice
            });
            
            updateCartCounter();
        });
    });
    
    function updateCartCounter() {
        const counter = document.getElementById('cart-counter');
        if (counter) {
            counter.textContent = cart.length;
        }
    }
});
