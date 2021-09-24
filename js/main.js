// Inputmask
var inp = document.querySelector("input[type='tel']");
var im = new Inputmask("+375-(99)-999-99-99");
im.mask(inp);

// Validate 
let text = document.querySelector('.form__text');
let btn = document.querySelector('.form__button');
let message = document.getElementById('message');


btn.addEventListener('click', (e) => {
  e.preventDefault();  
  const phone = inp.inputmask.unmaskedvalue();  
  if (Number(phone) && phone.length === 9) {
    text.classList.remove('is-invalid');
    text.classList.add('is-valid');
    text.innerHTML = 'Номер верный';        
  } else {
      text.classList.remove('is-valid');
      text.classList.add('is-invalid');
      text.innerHTML = 'Номер не верный';   
  }
  
  
  if (message.value.trim() == '') {
    message.value = 'viachaslaufedartsou@gmail.com';
  } 
  
});




