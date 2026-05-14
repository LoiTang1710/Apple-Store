const scrollContainer = document.querySelector(".rf-cards [role='listitem']");

// Xu ly an/hien
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

// Xu ly khi cuon
function scrollCard(btn, distance) {
  // 1. Tìm container chứa danh sách tương ứng với nút vừa bấm
  const container = btn.closest(".rf-cards").querySelector('[role="listitem"]');
  container.scrollBy({
    left: distance,
    behavior: "smooth",
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const allShelves = document.querySelectorAll(".rf-cards");

  allShelves.forEach((shelf) => {
    const container = shelf.querySelector("[role='listitem']");
    const nextBtn = shelf.querySelector(".next-button");
    const prevBtn = shelf.querySelector(".previous-button");

    if (!container || !nextBtn || !prevBtn) return;

    updateButton(container, prevBtn, nextBtn);


    // xu ly su kien khi click button scroll
    container.addEventListener("scroll", () => {updateButton(container,prevBtn,nextBtn)});

  });
});
