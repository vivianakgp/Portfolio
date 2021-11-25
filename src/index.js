let lastScrollTop = 0;
window.addEventListener('scroll', () => {
  const st = window.pageYOffset || document.documentElement.scrollTop;
  console.log(` el scroll de la pantalla es: ${st}`);
  if (st > lastScrollTop) {
    document.getElementById('menu').style.top = '-100%';
    console.log(`El scroll actual es: ${st} > al ultimo scroll ${lastScrollTop} (0)  y oculta el menu`);
  } else {
    document.getElementById('menu').style.top = '0';
    console.log(`El scroll actual es: ${st} < al ultimo scroll ${lastScrollTop}  y muestra el menu`);
  }
  lastScrollTop = st;
});
