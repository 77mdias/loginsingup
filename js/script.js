//VARIAVEIS GLOBAIS
const cadastro = document.querySelector('#button-cad')
const errors = document.querySelectorAll('.errorMSG')
const errorPass = document.getElementById('errorpassword')
const form = document.querySelector('#form')
const input = document.querySelectorAll('.inputError')
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

console.log(form)

form.addEventListener("submit", (event) => {
  event.preventDefault()
  userValidate()
  emailValidate()
  passwordValidate()
})

function setERROR(index) {
  input[index].style.border = '2px solid red'
  errors[index].style.display = 'block'
}

function removeERROR(index) {
  input[index].style.border = ""
  errors[index].style.display = "none"
}

function userValidate(){
  if (input[0].value.length < 8){
      setERROR(0)
  } else {
    removeERROR(0)
  }
}

function emailValidate(){
  if (!emailRegex.test(input[1].value)){
    setERROR(1)
  } else {
    removeERROR(1)
  }
}

function passwordValidate() {
  if (input[2].value.length < 8) {
    errorPass.style.color = 'red'
    errorPass.style.opacity = '1'
    input[2].style.border = '2px solid red'
  } else {
    errorPass.style.color = "rgba(102, 102, 102, 0.7)"
    input[2].style.border = ""
  }
}


// FUNÇÃO - botão de ''crie a conta''
//cadastro.addEventListener('click', cadastrar)

//function cadastrar() {
 // cadastro.innerText = 'Clickou!'

  //if (inputName.value.length < 3){
    //error_name.style.opacity = 1
    //error_name.innerHTML = `Por favor digite no mínimo 3 caracteres`
  //} else {
    //error_name.style.opacity = 0
  //} if (inputEmail.value.length < 3) {
    //error_email.style.opacity = 1
    //error_email.innerHTML = `Por favor digite no mínimo 3 caracteres`
  //}
//}
