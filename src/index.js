const logInForm = document.querySelector('#logInForm');
const userName = document.querySelector('#userName')
const logInSection = document.querySelector('#logInSection')
const signUpLink = document.querySelector('#signUp')

document.addEventListener('DOMContentLoaded', () => {
    let c = 2;
    signUpLink.addEventListener("click", () => {
        if(c % 2 === 0){
        c++
        document.querySelector('#logInHeader').innerText = "Sign Up"
        document.querySelector('#pReminderlogIn').innerText = "Please enter your new signin and password!"
        document.querySelector('#logInBtn').value = "SIGN UP"
        document.querySelector('#signUp').innerText ="Log In"
        document.querySelector('#signUpP').innerText = "Have an account?"
    }else{
        c++
        document.querySelector('#logInHeader').innerText = "Login"
        document.querySelector('#pReminderlogIn').innerText = "Please enter your new login and password!"
        document.querySelector('#logInBtn').value = "LOG IN"
        document.querySelector('#signUp').innerText = "Sign Up"
        document.querySelector('#signUpP').textContent = "Don't have an account?"
    }

    })

    logInForm.addEventListener('submit', (e) => {
        e.preventDefault()
        console.log('hello')
        logInSection.style.display = 'none'
        alert(`Welcome ${userName.value}`)
    })





})