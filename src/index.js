const BODY = document.querySelector('body');
const MENU = document.getElementById('menu');
const CONTAINER_MENU = document.getElementById('menu__container');
const HIGH_LETTER = document.querySelector('.highLetter');
const PHOTO = document.querySelector('.photo');

// Event click burger menu
MENU.addEventListener('click', (event) => {
  // console.log(event.target);
  if (event.target.id === 'iconOpenMenu') {
    CONTAINER_MENU.style.right = '0';
    BODY.style.overflow = 'hidden';
  } else if (event.target.id === 'iconCloseMenu') {
    CONTAINER_MENU.style.right = '-100%';
    BODY.style.overflow = 'scroll';
  }
});
// // animation menu letter // //
setTimeout(() => {
  HIGH_LETTER.animate([{ transform: 'rotate(0)' }, { transform: 'rotate(360deg)' }], 1000);
}, 2000);

// //  Controller menu  // //
let lastScrollTop = 0;
function showAndHiddenMenu() {
  const SCROLL_TOP = window.pageYOffset;
  // console.log(` el scroll top es: ${SCROLL_TOP} pixels y el lastScrollTop es: ${lastScrollTop}`);
  if (SCROLL_TOP > lastScrollTop) {
    // console.log(` ${SCROLL_TOP} > ${lastScrollTop} hidden menu`);
    MENU.style.transform = 'translateY(-60px)';
    HIGH_LETTER.classList.remove('animationRotate');
  } else if (SCROLL_TOP === 0) {
    MENU.style.backgroundColor = 'transparent';
  } else {
    // console.log(`${SCROLL_TOP} <  ${lastScrollTop} show menu`);
    MENU.style.background = '#271f2cd2';
    MENU.style.transform = 'translateY(0px)';
    HIGH_LETTER.classList.add('animationRotate');
  }
  lastScrollTop = SCROLL_TOP;
}

document.addEventListener('scroll', showAndHiddenMenu);// window or document? no differences

// //  end controller menu // //
// // intersection observer // //
const OBSERVER = new IntersectionObserver((entries) => {
  const entry = entries[0];
  console.log(entry);
  if (entry.intersectionRatio >= 0.25) {
    entry.target.animate([{ transform: 'scale(20%)' }, { transform: 'scale(100%)' }]);
    entry.target.style.transform = 'scale(100%)';//  { duration: 1000 }
  }
}, { threshold: 0.25 });
OBSERVER.observe(PHOTO);
// OBSERVER.unobserve(PHOTO);
// OBSERVER.disconnect();
