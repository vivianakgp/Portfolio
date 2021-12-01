const MENU = document.getElementById('menu');
const ICON_OPEN_MENU = document.getElementById('iconOpenMenu');
const ICON_CLOSE_MENU = document.getElementById('iconCloseMenu');
const CONTAINER_MENU = document.getElementById('menu__container');
const HIGH_LETTER = document.querySelector('.highLetter');
// // animation menu letter // //

setTimeout(() => {
  HIGH_LETTER.animate([{ transform: 'rotate(0)' }, { transform: 'rotate(360deg)' }], 1000);
}, 2000);

// //  Controller menu  // //
let lastScrollTop = 0;
function showAndHiddenMenu() {
  const SCROLL_TOP = window.pageYOffset || document.documentElement.scrollTop;
  // console.log(` el scroll de la pantalla es: ${st}`);
  if (SCROLL_TOP > lastScrollTop) {
    MENU.classList.add('menuScrollDown');
    HIGH_LETTER.classList.remove('animationRotate');
    // console.log(`El scroll actual es: ${st} > al ultimo scroll ${lastScrollTop} (0)
    //  y oculta el menu`);
  } else if (SCROLL_TOP === 0) {
    MENU.style.backgroundColor = 'transparent';
  } else {
    MENU.classList.remove('menuScrollDown');
    MENU.style.backgroundColor = '#000000b4';
    HIGH_LETTER.classList.add('animationRotate');
    // console.log(`El scroll actual es: ${st} < al ultimo scroll ${lastScrollTop}
    //  y muestra el menu`);
  }
  lastScrollTop = SCROLL_TOP;
}
// //  end controller menu // //

// // events // //
window.addEventListener('scroll', showAndHiddenMenu);
ICON_OPEN_MENU.addEventListener('click', () => { CONTAINER_MENU.style.right = '0'; });
ICON_CLOSE_MENU.addEventListener('click', () => { CONTAINER_MENU.style.right = '-100%'; });
// end events //
