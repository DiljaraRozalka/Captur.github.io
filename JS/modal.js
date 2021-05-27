
    const designBlockElem = document.querySelector('.design-block');
    const modalElem = document.querySelector('.modal');

    const openModal = () => {
      modalElem.classList.remove('hidden');
      disableScroll();
    };

    const closeModal = () => {
      modalElem.classList.add('hidden');
      enableScroll();
    };

    designBlockElem.addEventListener('click', event => {
      const target = event.target;

      if (target.matches('.more')) {
        openModal();
      }
    });

    modalElem.addEventListener('click', (event) => {
      const target = event.target;

      if (target.matches('.overlay, .modal__close')) {
        closeModal()
      }
    })
