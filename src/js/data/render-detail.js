import products from "./products.js";

document.addEventListener("DOMContentLoaded", () => {
  // lay url tu searching bar
  const url = new URLSearchParams(window.location.search);
  const id = url.get("id");

  const product = products.find((p) => p.id === id);
  if (product) {
    document.getElementById("product-name").innerText = product.name;
    document.getElementById("current-price").innerText = product.price;
    document.getElementById("main-/img").src = product.image;

    const storageContainer = document.getElementById("storage-options");

    if (storageContainer && product.storage) {
      const ButtonStorage = product.storage
        .map((size, index) => {
          const activeClass = index === 0 ? "active" : "";
          return `<button class="opt-btn ${activeClass}">${size}</button>`;
        })
        .join("");
      storageContainer.innerHTML += `
            <p class="storage-info">Dung lượng</p>
            <div class="button-groups">${ButtonStorage}</div>
        `;
    }
  } else {
    document.querySelector("main").innerHTML =
      "<h1>Sản phẩm không còn hàng</h1>";
  }
});
