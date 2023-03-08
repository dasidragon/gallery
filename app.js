const headerTitle = document.querySelector('.header__title')

const name = prompt('Прежде чем зайти на сайт напиши все имя!')

headerTitle.innerHTML = `${headerTitle.innerHTML} ${name}`