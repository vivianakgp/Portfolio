// //  Controller show and hidden menu  //////
let lastScrollTop = 0;
const MENU = document.getElementById('menu');
const ICON_OPEN_MENU = document.getElementById('iconOpenMenu');
const ICON_CLOSE_MENU = document.getElementById('iconCloseMenu');
const CONTAINER_MENU = document.getElementById('menu__container');

function showAndHideMenu() {
  const st = window.pageYOffset || document.documentElement.scrollTop;
  console.log(` el scroll de la pantalla es: ${st}`);
  if (st > lastScrollTop) {
    MENU.classList.add('menuScrollUp');
    console.log(`El scroll actual es: ${st} > al ultimo scroll ${lastScrollTop} (0)  y oculta el menu`);
  } else if (st === 0) {
    // MENU.style.backgroundColor = 'transparent';
  } else {
    MENU.classList.remove('menuScrollUp');
    console.log(`El scroll actual es: ${st} < al ultimo scroll ${lastScrollTop}  y muestra el menu`);
  }
  lastScrollTop = st;
}
// events //
window.addEventListener('scroll', showAndHideMenu);
ICON_OPEN_MENU.addEventListener('click', () => { CONTAINER_MENU.style.right = '0'; });
ICON_CLOSE_MENU.addEventListener('click', () => { CONTAINER_MENU.style.right = '-100%'; });
// // // // /// /// ///