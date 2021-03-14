const expandableCloseBtn = document.querySelector('.expandable__close-btn');
const expandableOpenBtn = document.querySelector('.nav__hamburger-menu');

if (expandableCloseBtn) {
    expandableCloseBtn.addEventListener('click', e => {
        document.querySelector('.expandable').setAttribute('id', 'in-active');
    })
}

if (expandableOpenBtn)  {
    expandableOpenBtn.addEventListener('click', e => {
        document.querySelector('.expandable').removeAttribute('id');
    })
}
