let btnControl = document.querySelectorAll('.btnclick');
let formContent = document.querySelectorAll('.staff-form');

for (let i = 0; i < btnControl.length; i++) {
  btnControl[i].addEventListener('click', function() {
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
