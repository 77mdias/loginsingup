//VARIAVEIS GLOBAIS
var cadastro = document.querySelector('#button-cad')
var error_name = document.querySelector('p#errorname')
var error_email = document.querySelector('p#errormail')
var inputName = document.querySelector('input#username')
var inputEmail = document.querySelector('input#useremail')
var inputSenha = document.querySelector('input#usersenha')


// FUNÇÃO - botão de ''crie a conta''
cadastro.addEventListener('click', cadastrar)

function cadastrar() {
  cadastro.innerText = 'Clickou!'

  if (inputName.value.length < 3){
    error_name.style.opacity = 1
    error_name.innerHTML = `Por favor digite no mínimo 3 caracteres`
  } else {
    error_name.style.opacity = 0
  } if (inputEmail.value.length < 3) {
    error_email.style.opacity = 1
    error_email.innerHTML = `Por favor digite no mínimo 3 caracteres`
  }
}
