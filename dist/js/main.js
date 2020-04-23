let btnControl = document.querySelectorAll('.btnclick');
let formContent = document.querySelectorAll('.staff-form');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');
const toggle = document.getElementById('toggle');

for (let i = 0; i < btnControl.length; i++) {
  btnControl[i].addEventListener('click', function () {
    for (let i = 0; i < formContent.length; i++) {
      formContent[i].className = 'staff-form';
    }
    document.getElementById(this.dataset.id).className = 'staff-form active';

    for (let i = 0; i < btnControl.length; i++) {
      btnControl[i].className = 'btnclick';
    }
    this.className = 'btnclick active';
  });
}

// Toggle nav
toggle.addEventListener('click', () =>
  document.body.classList.toggle('show-nav')
);

// Show
open.addEventListener('click', () => modal.classList.add('show-modal'));

// Hide
close.addEventListener('click', () => modal.classList.remove('show-modal'));

// Hide Modal on outside Click
// window.addEventListener('click', (e) =>
//   e.target == modal ? modal.classList.remove('show-modal') : false
// );
