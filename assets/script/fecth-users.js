'use strict'

import { select, onEvent } from "./utility.js"

const newFriendList = select('.friends-info ul')
const jobTitles = [
    'Software Engineer','Data Scientist','Graphic Designer','Marketing Manager','Financial Analyst',
    'Customer Support Representative','Project Manager','Human Resources Specialist','Sales Associate', 'Content Writer'
];
const companies = [
    'Apple','Google','Microsoft','Amazon','Facebook',
    'Tesla','IBM','Samsung', 'Oracle','Intel'
];

const url = 'https://randomuser.me/api/?nat=CA&results=10&seed=same';
const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json; charset=UTF-8',
    },
    mode: 'cors',
};

async function fetchData() {
    try {
        const response = await fetch(url, options);
        const json = await response.json();
        const resultsArray = json.results;
        return resultsArray;
    } catch (error) {
        console.error(error);
    }
}

fetchData().then((resultsArray) => {
    for (let i = 0; i <= 9; i++) {
    let newFriend = document.createElement('li')
    let friendImageDiv = document.createElement('div')
    let friendInfo = document.createElement('div')
    let friendImage = document.createElement('img')
    let friendName = document.createElement('h3')
    let friendJob = document.createElement('p')
    let friendCompany = document.createElement('p')
    let followBtn = document.createElement('button')
    let icon = document.createElement('i')
    followBtn.className = 'follow-friend-btn'
    icon.className = 'fa-solid fa-plus'
    friendImageDiv.className = 'friend-img'
    friendInfo.className = 'friend-info-list'
    friendCompany.className = 'friend-company'
    friendJob.className = 'friend-job'
    
    newFriendList.appendChild(newFriend)
    newFriend.appendChild(friendImageDiv)
    newFriend.appendChild(friendInfo)
    friendImageDiv.appendChild(friendImage)
    friendInfo.appendChild(friendName)
    friendInfo.appendChild(friendJob)
    friendInfo.appendChild(friendCompany)
    friendInfo.appendChild(followBtn)
    followBtn.appendChild(icon)

    friendImage.src = resultsArray[i].picture.medium
    friendName.textContent = resultsArray[i].name.first + " " + resultsArray[i].name.last
    friendJob.textContent = jobTitles[i]
    friendCompany.textContent = companies[i]

    onEvent('click', followBtn, () => {
        if (icon.className === 'fa-solid fa-plus') {
            icon.className = 'fa-solid fa-check'
        } else {
            icon.className = 'fa-solid fa-plus'
        }
    })
    }
});