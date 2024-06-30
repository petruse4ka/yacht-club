/** Алгоритмы переключения стилей страницы */

let themeButtonDark = document.querySelector('.theme-button-dark');
let themeButtonLight = document.querySelector('.theme-button-light');
let fontButtonSansSerif = document.querySelector('.font-button-sans-serif');
let fontButtonSerif = document.querySelector('.font-button-serif');

themeButtonDark.onclick = function () {
    document.body.classList.add('dark');
    themeButtonDark.classList.add('active');
    themeButtonLight.classList.remove('active');
};

themeButtonLight.onclick = function () {
    document.body.classList.remove('dark');
    themeButtonDark.classList.remove('active');
    themeButtonLight.classList.add('active');
};

fontButtonSansSerif.onclick = function () {
    document.body.classList.remove('serif');
    fontButtonSansSerif.classList.add('active');
    fontButtonSerif.classList.remove('active');
};

fontButtonSerif.onclick = function () {
    document.body.classList.add('serif');
    fontButtonSansSerif.classList.remove('active');
    fontButtonSerif.classList.add('active');
};

/** Алгоритмы скрытия текста */

let blogArticles = document.querySelectorAll('.blog-article');

for (let blogArticle of blogArticles) {
    let more = blogArticle.querySelector('.more');
    more.onclick = function () {
    blogArticle.classList.remove('short');
}
};

/** Алгоритмы переключения раскладки в карточках с яхтами */

let rent = document.querySelector('.cards');
let buttonList = document.querySelector('.card-view-button-list');
let buttonGrid = document.querySelector('.card-view-button-grid');

buttonList.onclick = function () {
    rent.classList.add('list');
    buttonList.classList.add('active');
    buttonGrid.classList.remove('active');
};

buttonGrid.onclick = function () {
    rent.classList.remove('list');
    buttonList.classList.remove('active');
    buttonGrid.classList.add('active');
};

/** Алгоритмы переключения изображений в галлерее */

let activePhoto = document.querySelector('.active-photo');
let selectedPhotos = document.querySelectorAll('.preview-list a');

for (let selectedPhoto of selectedPhotos) {
selectedPhoto.onclick = function (evt) {
    evt.preventDefault ();
    let activePreview = document.querySelector('a.active-item');
    activePhoto.src = selectedPhoto.href;
    selectedPhoto.classList.add('active-item');
    activePreview.classList.remove('active-item');
};
};