const logInForm = document.querySelector('#logInForm');
const userName = document.querySelector('#userName')
const logInSection = document.querySelector('#logInSection')
const signUpLink = document.querySelector('#signUp')
const navTools = document.querySelectorAll('.navTools')
const welcomeP = document.querySelector('#welcomeUserP')
const brewerUl = document.querySelector('#contentUl')
const breweryMenu = document.querySelector('#breweryMenu')

document.addEventListener('DOMContentLoaded', () => {
    let c = 2;
    signUpLink.addEventListener("click", () => {
        authentication(c);
        c++
    })

    logInForm.addEventListener('submit', (e) => {
        e.preventDefault()
        landPage()
        breweryMenu.style.backgroundColor = 'black'
        fetch('https://api.openbrewerydb.org/breweries') 
        .then(resp => resp.json())  
        .then(data => {
            data.forEach((brewery) => {
                let liBrewery = document.createElement('li')
                let detailsBtn = document.createElement('button')
                let moreDetails = document.createElement('div')

                liBrewery.innerHTML = `
                <h2>${brewery.name}</h2>
                <p><i>TYPE: </i><b>${brewery.brewery_type}</b></p>
                `
                detailsBtn.innerText = "Details"
                liBrewery.appendChild(detailsBtn)
                liBrewery.appendChild(moreDetails)
                liBrewery.style.borderBottom = "thin solid black"
                liBrewery.style.paddingBottom = "10px"
                brewerUl.appendChild(liBrewery)
                brewerUl.className = "centerDiv"

                let c = 2
                detailsBtn.addEventListener('click', () => {
                    if(c % 2 === 0){
                        moreDetails.innerHTML = ''
                    moreDetails.innerHTML = `
                   <p><b>Address:</b> ${brewery.street} ${brewery.city} ${brewery.state}</p>
                    <p><b>Telephone:</b> <a href="tel:${brewery.phone}">${brewery.phone}</a></p>
              <p><b>Website:</b> <a href="${(brewery.website_url === null)? '#': brewery.website_url}">${(brewery.website_url === null)? `No WEBSITE`: brewery.website_url}</a></p>
                    <p><b>Country: </b>${brewery.country}</p>
                                            `
                        c++
                    }else {
                        moreDetails.innerHTML = ''
                        c++
                    }
                })
            })
        })
        
    })





})
                // <p>${brewery.street}${brewery.city}${brewery.state}</p>
                // // <p>${brewery.phone}</p>
                // // <p>${brewery.website_url}</p>
                // // <p>${brewery.country}</p>


//user to login or sign up
function authentication(c){
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
}

//Set up landing page and menu
function landPage(){
    logInSection.remove()
    alert(`Welcome ${userName.value}`)
    navTools[0].style.visibility = 'visible'
    navTools[1].style.visibility = 'visible'
    navTools[2].style.visibility = 'visible'
    navTools[3].style.visibility = 'visible'
    navTools[4].style.visibility = 'visible'
    welcomeP.style.display = `none`
}