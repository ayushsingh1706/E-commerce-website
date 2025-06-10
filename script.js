const products = [
    { id: 1, name: "T-shirt", price: 499 },
    { id: 2, name: "Shoes", price: 999 },
    { id: 3, name: "Cap", price: 299 }
  ];
  
  function renderProducts() {
    const list = document.getElementById('product-list');
    if (list) {
      list.innerHTML = products.map(p => `
        <div class="product">
          <h3>${p.name}</h3>
          <p>₹${p.price}</p>
          <button onclick="addToCart(${p.id})">Add to Cart</button>
        </div>
      `).join('');
    }
  }
  
  function addToCart(id) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const item = products.find(p => p.id === id);
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${item.name} added to cart!`);
  }
  
  function renderCart() {
    const items = JSON.parse(localStorage.getItem("cart")) || [];
    const container = document.getElementById("cart-items");
    const total = document.getElementById("total-price");
    if (container && total) {
      container.innerHTML = items.map(item => `
        <div class="product">
          <h3>${item.name}</h3>
          <p>₹${item.price}</p>
        </div>
      `).join('');
  
      const totalPrice = items.reduce((sum, item) => sum + item.price, 0);
      total.innerText = `Total: ₹${totalPrice}`;
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    renderProducts?.();
    renderCart?.();
  });
  