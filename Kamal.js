'use strict'

const firstname = document.querySelector('#fname')
const lastname = document.querySelector('#lname')
const age = document.querySelector('#age')
const form = document.querySelector('#data')

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const td1 = document.createElement('td')
    td1.innerText = firstname.value;

    const td2 = document.createElement('td')
    td2.innerText = lastname.value;

    const td3 = document.createElement('td')
    td3.innerText = age.value;

    const tr = document.createElement('tr')

    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)

    document.querySelector('tbody').appendChild(tr)
})