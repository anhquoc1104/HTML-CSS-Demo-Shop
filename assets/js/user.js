let formLogin = document.querySelector('#form__login');
let formRegister = document.querySelector('#form__register');
let indicator = document.querySelector('#indicator');

const loginForm = () => {
  indicator.style.transform = 'translateX(40px)';
  formLogin.style.transform = 'translateX(0px)';
  formRegister.style.transform = 'translateX(0px)';
}

const registerForm = () => {
  indicator.style.transform = 'translateX(140px)';
  formLogin.style.transform = 'translateX(-300px)';
  formRegister.style.transform = 'translateX(-300px)';
}