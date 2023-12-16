'use strict';
import {select, onEvent} from './utility.js'
import { friendImageArray, friendArray } from "./fecth-users.js"

const submitBn = select('.submit-btn');
const postContent = select('textarea');
const fileInput = select('#file-input');
const content = select('.content');
const imgInfo = select('.img-info')
const profileImg = select('.profile-image')

function validation() {
    if (!postContent.value.length > 0) {
        return false;
    } else {
        return true;
    }
};

function randomNumber() {
    return Math.floor(Math.random() * 10)
}

let number;
function createPost() {
    randomNumber()
    number = randomNumber()
    let textContentValue = postContent.value;
    let text = document.createElement('p');
    let date = document.createElement('p');
    let infoPost = document.createElement('p');
    let profileImg = document.createElement('div');
    let post = document.createElement('div');
    let postText = document.createElement('section');
    let postInfo = document.createElement('section');
    let test = select('.content div:nth-child(2)')
    content.insertBefore(post, test);
    post.className = 'post-design';
    post.appendChild(postInfo);
    postInfo.className = 'post-info';
    post.appendChild(postText);
    postText.className = 'post-text';
    postInfo.appendChild(profileImg);
    postInfo.appendChild(infoPost);
    postInfo.appendChild(date);
    profileImg.className = 'profile-image';
    infoPost.innerText = friendArray[number];
    profileImg.style.backgroundImage = `url(${friendImageArray[number]})`
    date.innerText = new Date().toString().substring(4, 16);

    if (validation()) { 
        postText.appendChild(text);
        text.innerText = textContentValue;
    };

    if (fileInput.files.length > 0) {
        let imageURL = URL.createObjectURL(fileInput.files[0]);
        let image = document.createElement('img');
        image.src = imageURL;
        postText.appendChild(image);
        imgInfo.textContent = ''
    }
}

onEvent('change', fileInput, () => {imgInfo.textContent = `${fileInput.files[0].name}`;})
onEvent('click', submitBn, createPost);