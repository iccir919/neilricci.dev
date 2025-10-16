const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCaption = document.getElementById("lightbox-caption");

document.querySelectorAll(".photo img").forEach((img) => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    const caption = img.closest("figure").querySelector(".photo-caption").textContent;
    const date = img.closest("figure").querySelector(".photo-date").textContent;
    lightboxCaption.textContent = `${caption} — ${date}`;
    lightbox.classList.remove("hidden");
  });
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox || e.target === lightboxCaption) {
    lightbox.classList.add("hidden");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    lightbox.classList.add("hidden");
  }
});