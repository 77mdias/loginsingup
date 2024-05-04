let username = document.querySelector ('#username')
let useremail = document.querySelector ('#useremail')
let erromensagem = document.querySelector ('.erromensagem')


username.addEventListener ('keyup', () => {
  if(username.value.length <= 2){
    erromensagem.setAttribute ('style', 'color: red', 'opacity: 1')
    erromensagem.innerHTML = '<strong> Nome *Insira no mínimo 3 caracteres</strong>'
  } else {
      erromensagem.setAttribute('style', 'opacity: 0')
    }
  })
