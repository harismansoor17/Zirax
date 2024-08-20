// Cart
const cartNav = document.querySelector("#cartNav");


function showCart() {
  cartNav.style.right = "0";
}

function hideCart() {
  cartNav.style.right = "-400px";
}

function addToCart(productId) {
  const product = products.find(item => item.id === productId);
  if (!product) return; // Guard clause if product not found

  const { image, title, price } = product;
  
  document.getElementById('cartItems').innerHTML += `
    <div class="mt-4 p-6 border-b-2 relative flex justify-evenly items-center">
      <button
        onclick="removeFromCart(${productId})"
        class="absolute top-0 right-0 m-2 text-3xl text-white hover:scale-110 transition-all duration-300 delay-150"
      >
        <i class="fa-regular fa-rectangle-xmark"></i>
      </button>
      <div class="w-24">
        <img class="" src="${image}" alt="" />
      </div>
      <div class="text-white grid">
        <span class="row-span-1 text-2xl font-bold">${title}</span>
        <span class="row-span-2 text-xl font-semibold">price: <span class="price">${price}$</span></span>
      </div>
    </div>`;
     
}

function removeFromCart(productId) {
  // Implement the remove functionality here
}
