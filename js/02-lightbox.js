import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");
const photoGallery = galleryItems
    .map(({ preview, original, description }) => {
        return `<a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                alt="'${description}'"
            />
            </a>`;
    })
    .join(" ");
gallery.insertAdjacentHTML("beforeend", ` ${photoGallery}`);

console.log(galleryItems);
