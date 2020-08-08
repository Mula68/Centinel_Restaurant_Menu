let cart = document.getElementsByClassName('order');

for (let i = 0; i <= cart.length; i++) {
   
    cart[i].addEventListener(
        "click", 
        function () {
            window.open('orderCart.html')
        }
    );
    
}

function placeOrder() {
    
    window.alert('Your order has been placed successfully \n ');

    document.querySelector('form').reset();
}
