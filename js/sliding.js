'use strict';

const showMenu = (toggleId, bodyId) => {
    const toggle = document.getElementById(toggleId),
          body = document.getElementById(bodyId);

    toggle.addEventListener('click', () => {
        if (body.classList.toggle('nav_is_visible') !== true) {
            body.classList.remove('nav_is_visible');
            toggle.classList.remove('close');
            toggle.classList.remove('button__left');
        } else {
            body.classList.add('nav_is_visible');
            toggle.classList.add('close');
            toggle.classList.add('button__left');
        }
    })
};
    showMenu('button', 'body');