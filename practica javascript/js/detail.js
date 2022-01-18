"use strict"

const detailUser = (user) => {
    var contentUser = document.createElement('div');
    contentUser.className = 'content__user';
    contentUser.style = 'display: flex; flex-direction: column; width:60vw; min-height:80vh;' + 
    'justify-content: left; margin: 2px; margin-left: 20vw; padding-left: 1vw; font-size: calc(1vh + 1.5vw);' +
    'background-color: rgb(200, 247, 250);'; 
    $('.content').append(contentUser);

    var profile = document.createElement('div');
    profile.className = 'content__user__profile';
    profile.style = 'display: flex; flex-direction: row; width:97%; height:20%;' + 
    'justify-content: center; margin: 2px; border-bottom: 5px solid lightblue'; 
    $('.content__user').append(profile);

    var divPhoto = document.createElement('img');
    divPhoto.setAttribute('src', user.photo);
    divPhoto.className = 'content__user__profile__photo';
    divPhoto.style = 'width: 20%; margin-top: 1.1vh;padding-bottom: 1vh; border-radius: 10%;'; 
    $('.content__user__profile').append(divPhoto);

    var divName = document.createElement('div');
    divName.appendChild(document.createTextNode(`${user.name} ${user.last}`));
    divName.className = 'content__user__profile__name';
    divName.style = 'width:60%; height: auto; color: black; font-weight: bold;' + 
    'text-align: center; margin-left: 5%; font-size: calc(2vh + 2.5vw); margin-top: 6%'; 
    $('.content__user__profile').append(divName);

    var divGender = document.createElement('div');
    divGender.appendChild(document.createTextNode(`- Género: ${user.gender}.`));
    divGender.className = 'content__user__gender';
    divGender.style = 'width:90%; height: 15%; color: black; border-bottom: 2px solid lightblue; border-left: 2px solid lightblue;' + 
    'text-align: left; margin-left: 3%; font-size: calc(1vh + 1.5vw); margin-top: 6%; padding-left: 2%;'; 
    $('.content__user').append(divGender);

    var divAge = document.createElement('div');
    divAge.appendChild(document.createTextNode(`- Edad: ${user.age} años. `));
    divAge.className = 'content__user__age';
    divAge.style = 'width:90%; height: 15%; color: black; border-bottom: 2px solid lightblue; border-left: 2px solid lightblue;' + 
    'text-align: left; margin-left: 3%; font-size: calc(1vh + 1.5vw); margin-top: 6%; padding-left: 2%;'; 
    $('.content__user').append(divAge);

    var divEmail = document.createElement('div');
    divEmail.appendChild(document.createTextNode(`- Email de contacto: ${user.email}.`));
    divEmail.className = 'content__user__email';
    divEmail.style = 'width:90%; height: 15%; color: black; border-bottom: 2px solid lightblue; border-left: 2px solid lightblue;' + 
    'text-align: left; margin-left: 3%; font-size: calc(1vh + 1.5vw); margin-top: 6%; padding-left: 2%;'; 
    $('.content__user').append(divEmail);
}

export {detailUser};