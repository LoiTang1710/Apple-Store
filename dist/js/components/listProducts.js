function updateButton(container, prevBtn, nextBtn) {
  const scrollLeft = container.scrollLeft;
  const maxScroll = container.scrollWidth - container.clientWidth;
  console.log(scrollLeft);
  console.log(maxScroll);

  const isAtStart = scrollLeft <= 10;
  const isAtEnd = scrollLeft >= maxScroll - 200;

  prevBtn.style.opacity = isAtStart ? "0" : "1";
  prevBtn.style.pointerEvents = isAtStart ? "none" : "auto";

  nextBtn.style.opacity = isAtEnd ? "0" : "1";
  nextBtn.style.pointerEvents = isAtEnd ? "none" : "auto";
}

function scrollList(btn, distance) {
  const wrapper =
    btn.closest(".list-products-container") ||
    btn.closest("#airpods-feature-card-container");
  if (!wrapper) {
    console.warn("Khong tim thay wrapper");
  }
  const container = wrapper.querySelector("[role='listitem']");
  container.scrollBy({
    left: distance,
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const allList =
    document.querySelectorAll(".list-products-container") ||
    document.querySelectorAll("#airpods-feature-card-container");
  allList.forEach((list) => {
    const container = list.querySelector("[role = 'listitem']");
    const prevBtn = list.querySelector(".list-previous-button");
    const nextBtn = list.querySelector(".list-next-button");

    if (!container || !prevBtn || !nextBtn) return;
    updateButton(container, prevBtn, nextBtn);

    container.addEventListener("scroll", () => {
      updateButton(container, prevBtn, nextBtn);
    });
  });
});
