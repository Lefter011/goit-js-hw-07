import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");
const photoGallery = galleryItems
    .map(({ preview, original, description }) => {
        return `<a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="'${description}'"
            />
            </a>`;
    })
    .join(" ");
gallery.insertAdjacentHTML("beforeend", ` ${photoGallery}`);

const escapeCloseModal = (event) => {
    if (event.code === 'Escape') {
    window.removeEventListener('keydown', escapeCloseModal);
    document.querySelector('.basicLightbox').remove();
} return;  
};

const clickImg = (evt) => {
    evt.preventDefault();
    window.addEventListener('keydown', escapeCloseModal);
    if (!evt.target.classList.contains("gallery__image")) { return; }
    const instance = basicLightbox
        .create(`<img  src="${evt.target.dataset.source}"></img>`)
    instance.show()
}; 
gallery.addEventListener('click', clickImg);

console.log(galleryItems);
