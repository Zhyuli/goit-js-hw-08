
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const container = document.querySelector('.gallery');
// // console.log(container);
const createMarkup = createGalMarkup(galleryItems);

container.insertAdjacentHTML('beforeend', createMarkup);

const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250});

function createGalMarkup(items) {
    return items.map(({ original, preview, description }) =>
   `<li class="gallery__item">
        <a class="galllery__link" href="${original}">
        <img
         class="gallery__image"
         src="${preview}"
         data-source="${original}"
         alt="${description}"

        />
 </a>
</li>`
        )
        .join('')
}


console.log(galleryItems);
