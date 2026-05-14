import FAQs from "./FAQs.js";


document.addEventListener("DOMContentLoaded", () => {
  const FAQContainer = FAQs.map((FAQ) => {
    return `<div class="AEO-card">
      <h3>${FAQ.question}</h3>
      <p>${FAQ.answer}</p>
    </div>`;
  }).join("");
  document
    .getElementById("AEO-container")
    .insertAdjacentHTML("beforeend", FAQContainer);
});
