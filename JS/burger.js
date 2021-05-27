
    const menuElem = document.querySelector('.menu');
    const hamburgerElem = document.querySelector('.hamburger-menu');

    const handlerMenu = event => {
      const target = event.target;
      const parent = target.closest('.menu')
      if ((!parent && target !== hamburgerElem) ||
        target.classList.contains('menu-list__link')) {
        toggleMenu();
      }
    }

    const toggleMenu = () => {
      menuElem.classList.toggle('menu-active');
      hamburgerElem.classList.toggle('hamburger-menu-active');

      if (menuElem.classList.contains('menu-active')) {
        document.body.addEventListener('click', handlerMenu);
      } else {
        document.body.removeEventListener('click', handlerMenu)
      }
    };
      hamburgerElem.addEventListener('click', toggleMenu);
