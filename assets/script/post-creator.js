'use strict';
import {select, onEvent} from './utility.js'

const submitBn = select('.submit-btn');
const postContent = select('textarea');
const fileInput = select('#file-input');
const content = select('.content');
const imgInfo = select('.img-info')

function validation() {
    if (!postContent.value.length > 0) {
        return false;
    } else {
        return true;
    }
};

function createPost() {
    let textContentValue = postContent.value;
    let text = document.createElement('p');
    let date = document.createElement('p');
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
    postInfo.appendChild(date);
    profileImg.className = 'profile-image';
    date.innerText = new Date().toString().substring(4, 16);

    if (validation()) { 
        postText.appendChild(text);
        text.innerText = textContentValue;
    };

    let imageURL = URL.createObjectURL(fileInput.files[0]);
    let image = document.createElement('img');
    image.src = imageURL;
    postText.appendChild(image);
    imgInfo.textContent = ''
}

onEvent('change', fileInput, () => {imgInfo.textContent = `${fileInput.files[0].name}`;})
onEvent('click', submitBn, createPost);