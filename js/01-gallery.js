import {galleryItems } from './gallery-items.js';
// Change code below this line


const gallery = document.querySelector(".gallery");
const galleryMarkup = galleryItems
    .map(({original, preview, description }) =>
        `<li class = "gallery__item">
<class = "gallery__link" href = ${preview}> <img src = ${original} alt = ${description}
data-source = ${original} class = "gallery__image"></li>`)
    .join(""); 

gallery.insertAdjacentHTML("afterbegin", galleryMarkup);

const onImageClick = (event) => {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }
    const instance = basicLightbox.create(
        `<img src = ${event.target.dataset.source} alt = ${event.target.alt}
        width = "800" height = "600" >`,
     {
     onClose: (instance) => gallery.removeEventListener("keydown", closeByEscape),
        }
    );
     const closeByEscape = (key) => {
        if (key.code === "Escape") {
            instance.close();
        }
    };
    instance.show();
    if (instance.visible()) {
        gallery.addEventListener("keydown", closeByEscape);
    }
};
gallery.addEventListener("click", onImageClick);

// console.log(galleryItems);
