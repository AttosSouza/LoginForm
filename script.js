/* Seleciona formulário, email e senha por ID */
const form = document.getElementById('form')
const email = document.getElementById('email')
const password = document.getElementById('password')

/* Quando o submit ocorrer chama uma função
   para validar os campo do formulário  */
form.addEventListener('submit', (event) => {
    event.preventDefault()
    validateInput()
})

/* A função faz a validação dos campo */
const validateInput = () => {

    /* Pega os valores dos campo */
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()

    /* Faz uma verificação no campo do email para checar se é válido */
    if (emailValue === '') {
        setError(email, 'Email precisa ser inserido')
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Insira um email válido')
    } else {
        setSucess(email)
    }

    /* Faz uma verificação no campo da senha para checar se é válida */
    if (passwordValue === '') {
        setError(password, 'Senha precisa ser inserida')
    } else if (passwordValue.length < 6) {
        setError(password, 'Senha deve conter pelo menos 6 digitos')
    } else {
        setSucess(password)
    }

}

/* A função seta uma mensagem de erro no campo do formulário */
const setError = (element, message) => {

    const inputControl = element.parentElement
    const errorDisplay = inputControl.querySelector('.error')

    errorDisplay.innerText = message
    inputControl.classList.add('error')
    inputControl.classList.remove('sucess')

}

/* A função seta uma mensagem de sucesso no campo do formulário */
const setSucess = (element, message) => {

    const inputControl = element.parentElement
    const errorDisplay = inputControl.querySelector('.error')

    errorDisplay.innerText = ''
    inputControl.classList.add('sucess')
    inputControl.classList.remove('error')

}

/* A função usa regex para validar o email */
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

