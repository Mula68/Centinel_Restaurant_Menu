let cart = document.getElementsByClassName('order');

for (let i = 0; i <= cart.length; i++) {
   
    cart[i].addEventListener(
        "click", 
        function (e){

            let menuItem = e.target.parentElement;

            let body = document.querySelector('main');

            body.innerHTML = `
            <div style="height: 100px;" class="cart-title" >

                <a href="menu.html" " > << Back to menu</a>

                <h1 style="">My Cart</h1>

            </div>

            <div class = "menuContent">
            <br>

                <div class = "cart">

                    <img src="${menuItem.children[0].src}" style="
                    border-radius: 5px;">
                
                </div>

                <div class = "cart">

                    <h3>ITEM:     \&nbsp \&nbsp ${menuItem.children[1].textContent}</h3>
                    <br>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid a voluptatem tempore corporis iste asperiores eaque consequuntur necessitatibus. Voluptate, earum!</p>
                    <br>
                    <h4>${menuItem.children[2].textContent}</h4>

                    <br>

                    <h3>QUANTITY: \&nbsp \&nbsp
                        <span>
                            <select style="height:2rem; width:8rem; border-radius:5px;">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            \&nbsp | \&nbsp
                            <button style="background-color:red; color:white; height:2rem; width:8rem; border-radius:5px;" class="remove">Remove item</button>
                        </span>
                    </h3>

                    <br>

                    <button style="height:2rem; width:8rem; border-radius:5px;"><a href="menu.html" style="color:blue;">Add more items</a></button>

                    <button id="placeOrder" style="height:2rem; width:8rem; border-radius:5px;"><a href="#" style="color:blue;">Add to order</a></button>

                    
                
                </div>
        
         </div>
            `;
           
                document.querySelector('.remove').addEventListener('click', function(){
                    
                    document.querySelector('.menuContent').innerHTML = '';
                }
                );

                document.querySelector('#placeOrder').addEventListener('click', 
                function(){
                    alert('You must login first to place your order');
                });

        }
    );
    
} 

function placeOrder() {
    
    alert('Your order has been placed successfully \n ');

    document.querySelector('form').reset();
}
