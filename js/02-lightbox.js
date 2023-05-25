import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery")
const galleryMarkup = galleryItems
    .map(({ original, preview, description}) => `<li class = "gallery__item"><a class="gallery__link" href= ${original}> <img src = ${preview} alt =' ${description}' class = "gallery__image"></li>`)
    .join(""); 

gallery.insertAdjacentHTML("afterbegin", galleryMarkup);

new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
});


