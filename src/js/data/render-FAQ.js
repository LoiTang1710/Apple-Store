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

    // Tạo schema markup động
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": FAQs.map((item) => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
    }
    // console.log(schemaData)
    const scriptTag = document.querySelector('script[type="application/ld+json"]')
    if(scriptTag){
      scriptTag.textContent = JSON.stringify(schemaData)
      // console.log("scriptTag: ", scriptTag.textContent)
    }
});
