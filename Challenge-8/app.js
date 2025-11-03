let cart = [];

function addToCart(productName, price) {
  const existingItem = cart.find(item => item.name === productName);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ name: productName, price: price, quantity: 1 });
  }

  updateCart();
}

function updateCart() {
  const cartItemsContainer = document.getElementById("cart-items");
  const cartTotalContainer = document.getElementById("cart-total");
  cartItemsContainer.innerHTML = "";

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `<div class="empty-cart">Cart is empty</div>`;
    cartTotalContainer.innerHTML = `<h3>Total: $0.00</h3>`;
    return;
  }

  let total = 0;

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `
      <span>${item.name} (x${item.quantity}) - $${itemTotal.toFixed(2)}</span>
      <button onclick="removeItem(${index})">Remove</button>
    `;
    cartItemsContainer.appendChild(div);
  });

  cartTotalContainer.innerHTML = `<h3>Total: $${total.toFixed(2)}</h3>`;
}

function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}
