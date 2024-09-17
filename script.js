// Cart
const cartNav = document.querySelector("#cartNav");

function showCart() {
  cartNav.style.right = "0";
}

function hideCart() {
  cartNav.style.right = "-400px";
}

let cart = []; 

function addToCart(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) {
    return; 
  }

  
  const existingProduct = cart.find((item) => item.id === productId);
  
  if (existingProduct) {
    
    existingProduct.quantity++;
    document.getElementById(`quantity-${productId}`).value = existingProduct.quantity;
  } else {
    
    cart.push({ ...product, quantity: 1 });

    
    const { image, title, price } = product;
    document.getElementById("cartItems").innerHTML += `
      <div class="mt-4 p-6 border-b-2 relative flex justify-evenly items-center" id="cart-item-${productId}">
        <button
          onclick="removeFromCart(${productId})"
          class="absolute top-0 right-0 m-2 text-3xl text-white hover:scale-110 transition-all duration-300 delay-150"
        >
          <i class="fa-regular fa-rectangle-xmark"></i>
        </button>
        <div class="w-24">
          <img class="" src="${image}" alt="" />
        </div>
        <div class="text-white flex flex-col justify-center">
          <span class="text-2xl font-bold">${title}</span>
          <input class="text-black text-xl outline-none rounded-xl w-14 float-right p-2" id="quantity-${productId}" type="number" value="1" min="1" onchange="updateQuantity(${productId}, this.value)">
          <span class="text-xl font-semibold">price: <span class="price">${price}$</span></span>
        </div>
      </div>`;
  }

  updateCartTotal();
  updateItemsInCart(); 
}

function removeFromCart(productId) {
  
  cart = cart.filter((item) => item.id !== productId);

  
  const cartItemElement = document.getElementById(`cart-item-${productId}`);
  if (cartItemElement) {
    cartItemElement.remove();
  }

  updateCartTotal();
  updateItemsInCart();
}

function updateQuantity(productId, newQuantity) {
  const product = cart.find((item) => item.id === productId);
  if (product) {
    product.quantity = parseInt(newQuantity, 10);
  }

  updateCartTotal();
}
function updateCartTotal() {
  let total = 0;
  cart.forEach((product) => {
    total += product.price * product.quantity;
  });

  document.getElementById("cartTotal").textContent = `Total: $${total.toFixed(2)}`;
}


function updateItemsInCart() {
  const itemsInCart = document.getElementById('itemsInCart');

  itemsInCart.textContent = cart.length;
}