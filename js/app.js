
document.addEventListener('DOMContentLoaded',function(){

    let modal = document.querySelector('#myModal')
    let close = document.querySelector('#close')

    window.addEventListener('click',function(e){
        if(e.target==modal){
            modal.style.display='none'
        }
    })

    close.addEventListener('click',function(){
        modal.style.display = 'none'
    })

    document.getElementById('registerForm').addEventListener('submit',function(e){
        e.preventDefault()
        
        if(validarFormulario()){
            modal.style.display='block'
        }
    })
})

function validarFormulario(){

let nombre = document.querySelector('#name').value 
let apellido = document.querySelector('#surname').value 
let email = document.querySelector('#email').value 
let password = document.querySelector('#password').value 
let confirmPassword = document.querySelector('#confirmPassword').value 

let nameError = document.querySelector('#nameError')
let surnameError = document.querySelector('#surnameError')
let emailError = document.querySelector('#emailError')
let passwordError = document.querySelector('#passwordError')
let confirmPasswordError = document.querySelector('#confirmPasswordError')

let validar=true

//Validación nombre

if(nombre.trim()==''){
    nameError.textContent='El nombre es obligatorio.'
    nameError.style.display='block'
    validar=false
}else{
    nameError.style.display='none'
}

//Validación apellido
if(apellido.trim()==''){
    surnameError.textContent='El apellido es obligatorio.'
    surnameError.style.display='block'
    validar=false
}else{
    surnameError.style.display='none'
}

//Validación email

if(email.trim()==''){
    emailError.textContent='El correo es obligatorio.'
    emailError.style.display='block'
    validar=false

}else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
    emailError.textContent='El formato de correo no es válido.'
    emailError.style.display='block'
    validar=false
} else{
    emailError.style.display='none'
}

//Validación contraseña
if(password.trim()==''){
    passwordError.textContent='La contraseña es obligatoria.'
    passwordError.style.display='block'
    validar=false

}else if(password.length<6){
    passwordError.textContent='La contraseña debe tener al menos 6 caracteres.'
    passwordError.style.display='block'
    validar=false

}else{
    passwordError.style.display='none'
}

if(confirmPassword.trim()==''){
    confirmPasswordError.textContent='Debe confirmar su contraseña.'
    confirmPasswordError.style.display='block'
    validar=false

}else if(password!==confirmPassword){
    confirmPasswordError.textContent='Las contraseñas no coinciden.'
    confirmPasswordError.style.display='block'
    validar=false

}
else{
    confirmPasswordError.style.display='none'
}
    return validar
}//Cierre de la función


