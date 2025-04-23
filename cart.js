const container = document.getElementById("cartItems");

function renderCart() {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  container.innerHTML = "";
  let total = 0;

  if (cartItems.length === 0) {
    container.innerHTML = " 🛒 Sepetiniz boş. ";
    return;
  }

  cartItems.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `
      ${item.name} ${item.price} TL 
      <button onclick="removeItem(${index})">Sil</button>
    `;
    container.appendChild(div);
    total += item.price;
  });

  const totalDiv = document.createElement("div");
  totalDiv.className = "total";
  totalDiv.textContent = `Toplam: ${total} TL`;
  container.appendChild(totalDiv);

  const button = document.createElement("a");
  button.className = "buy-button";
  button.href = "payment.html";
  button.textContent = "Satın Al";
  container.appendChild(button);
}

function removeItem(index) {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  cartItems.splice(index, 1); // İlgili öğeyi sil
  localStorage.setItem("cart", JSON.stringify(cartItems)); // Güncellenmiş sepeti localStorage'a kaydet
  renderCart(); // Sepeti yeniden render et
}

renderCart();
