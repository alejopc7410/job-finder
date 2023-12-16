'use strict'

import { select, onEvent } from "./utility.js"

const usernameInput = select('#username')
const passwordInput = select('#password')
const logOutBtn = select('.log-out-btn')
const loginBtn = select('.login-btn')
const homePage = select('.homepage')
const loginPage = select('.login-page')
const loginAdvice = select('.login-advice')
const loginWarning = select('.login-advice span')

localStorage.setItem('username', 'myusernameiscool@myemail.com')
localStorage.setItem('password', 'hsgRSBSY76438*$')

let userName = localStorage.getItem('username')
let password = localStorage.getItem('password')

function checkcredentials() {
    let enteredUserName = usernameInput.value
    let enteredPassword = passwordInput.value
    if (enteredUserName === userName && enteredPassword === password) {
        homePage.style.display = "block"
        loginPage.style.display = "none"
        localStorage.setItem('isLoggedIn', true)
    } else {
        loginAdvice.style.display = "block"
        loginWarning.textContent = 'Incorrect username or password'
    }
}

function checkLoggedIn() {
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    if (isLoggedIn == "true") {
        homePage.style.display = "block"
        loginPage.style.display = "none"
    }
}

function logOut() {
    localStorage.removeItem('isLoggedIn')
    homePage.style.display = "none"
    loginPage.style.display = "flex"
}

onEvent('click', loginBtn, checkcredentials)
onEvent('click', logOutBtn, logOut)
onEvent('load', window, checkLoggedIn)