// select elements
const galleryItems = document.querySelectorAll("#gallery .gallery-item");
const overlay = document.querySelector("#overlay");
const overlayImg = document.querySelector("#overlay-img");
const overlayCaption = document.querySelector("#overlay-caption");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const closeBtn = document.querySelector("#close");

// track current gallery and image
let curGallery = [];
let curIdx = 0;

function displayImg(idx) {
  const img = curGallery[idx].querySelector("img");
  const caption =
    curGallery[idx].querySelector(".gallery-img-name")?.textContent || "";

  overlayImg.src = img.src;
  overlayCaption.textContent = caption;
  overlay.style.display = "flex";
  curIdx = idx;
}

function open(gallery, idx) {
  curGallery = [...gallery];
  curIdx = idx;

  displayImg(curIdx);
}

function prev() {
  if (curIdx === 0) {
    curIdx = curGallery.length - 1;
  } else {
    curIdx -= 1;
  }

  displayImg(curIdx);
}

function next() {
  if (curIdx === curGallery.length - 1) {
    curIdx = 0;
  } else {
    curIdx += 1;
  }

  displayImg(curIdx);
}

function close() {
  overlay.style.display = "none";
}

galleryItems.forEach((item, idx) => {
  item.addEventListener("click", () => open(galleryItems, idx));
});

closeBtn.addEventListener("click", close);
prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click", next);

// keyboard controller (additional)
document.addEventListener("keydown", (e) => {
  if (overlay.style.display === "flex") {
    if (e.key === "Escape") {
      closeBtn.click();
    }
    if (e.key === "ArrowLeft") {
      prevBtn.click();
    }
    if (e.key === "ArrowRight") {
      nextBtn.click();
    }
  }
});
