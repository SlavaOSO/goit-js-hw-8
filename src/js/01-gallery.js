// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');

const createGallery = createGalleryItemMarkup(galleryItems);

inputGallery(createGallery);

function createGalleryItemMarkup(cards) {
    return cards.map(({ description, original, preview }) => {
        return `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`
        // return `
        // <div class="gallery__item">
        //     <a class="gallery__link" href="large-image.jpg">
        //         <img
        //             class="gallery__image"
        //             src="${preview}"
        //             data-source="${original}"
        //             alt="${description}"
        //         />
        //     </a>
        // </div>
        // `
    }).join(' ');
}

function inputGallery(markup) {
    gallery.insertAdjacentHTML('beforeend', markup);
    // gallery.innerHTML = markup;
}
var lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250 });


// Выполняй это задание в файлах 01-gallery.html и 01-gallery.js. Разбей его на несколько подзадач:

// Добавь библиотеку SimpleLightbox как зависимость проекта используя npm (ссылка на CDN из твоей прошлой работы больше не нужна).
// Используй свой JavaScript код из предыдущей домашней работы, но выполни рефакторинг с учетом того, что библиотека была установлена через npm (синтаксис import/export).
// Для того чтобы подключить CSS код библиотеки в проект, необходимо добавить еще один импорт, кроме того который описан в документации.

// // Описан в документации
// import SimpleLightbox from "simplelightbox";
// // Дополнительный импорт стилей
// import "simplelightbox/dist/simple-lightbox.min.css";