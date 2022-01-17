"use strict"

var pagActual = ""; //registro para saber en que pagina nos encontramos: home / list /
import { generateList } from "./list.js"

$(document).ready(function () {

    
    console.log("cargado");
    pagActual = "home"; 

    //funcion que a los 2 segundos te da la bienvenida
    const saludar = () => {
        var newElem = document.createElement('div');
        newElem.appendChild(document.createTextNode("¡Bienvenido a esta maravillosa pagina web!"));
        newElem.className = 'content__saludo';
        newElem.style = 'background-color:rgb(255, 169, 136); width:90vw; height:7vh;' + 
         'text-align: left; margin: 2px; margin-left: 5vw; padding-left: 1vw; font-size: calc(1vh + 1.5vw) '; 
        $('.content').append(newElem);
    }
    setTimeout(saludar, 2000);

    //funcion que cambia el color de los enlaces cuando pasas sobre ellos
    const lista = document.querySelectorAll('.header__link--string');
    lista.forEach((elem) => {
        elem.addEventListener('mouseover', function(event) {
            elem.style= `color: white;`;
        });
        elem.addEventListener('mouseout', function(event) {
            elem.style= `color: black;`;
        });
    })

    //funcion que cambia a la vista de las listas
    document.querySelector('#header__link__list').addEventListener('click', function(event) {
        //si ya estas en esta vista te salta una alerta
        if(pagActual == "list"){
            alert("¡Ya estas en la pagina de la lista!");
        }
        else{
            pagActual = "list";
            var listUsers;

            async function drawUsers(){
                listUsers = await generateList();

                $('.content__saludo').remove();
                //document.querySelector('.content__saludo').style = 'display: hidden;';

                listUsers.forEach(user => {
                    //console.log(user);
                    var divUser = document.createElement('div');
                    divUser.className = `content__user__${user.id}`;
                    divUser.style = 'display: flex; flex-direction: row; width:50vw; height:10vh; border-radius: 1%;' + 
                    'text-align: left; margin: 2px; margin-left: 25vw; padding-left: 1vw; font-size: calc(1vh + 1.5vw);' +
                    'background-color: rgb(200, 247, 250);'; 
                    $('.content').append(divUser);

                    var divPhoto = document.createElement('img');
                    divPhoto.setAttribute('src', user.photo);
                    divPhoto.className = `content__user__${user.id}__photo`;
                    divPhoto.style = 'width: 10%; margin-top: 1.1vh;padding-bottom: 1vh; border-radius: 10%;'; 
                    $(`.content__user__${user.id}`).append(divPhoto);

                    var divName = document.createElement('a');
                    divName.appendChild(document.createTextNode(`${user.name} ${user.last}`));
                    divName.className = `content__user__${user.id}__name`;
                    divName.style = 'width:auto; height: auto;  text-decoration: none; color: black;' + 
                    'text-align: left; margin-left: 5%; font-size: calc(1vh + 1.5vw); cursor: pointer;' +
                    'margin-top: 2vh'; 
                    $(`.content__user__${user.id}`).append(divName);

                    document.querySelector(`.content__user__${user.id}__name`).addEventListener('click', function(event) {
                        
                        console.log("eeeeeeeeyyy");
                    });

                })
            }

            drawUsers();
        }
    });

    //funcion que cambia a la vista home (tanto el logo como el enlace home)
    document.querySelector('#header__link__logo').addEventListener('click', function(event) {
        //si ya estas en esta vista te salta una alerta
        if(pagActual == "home"){
            alert("¡Ya estas en la pagina de inicio!");
        }
        else{
            pagActual = "home";

        }
    });

    document.querySelector('#header__link__home').addEventListener('click', function(event) {
        //si ya estas en esta vista te salta una alerta
        if(pagActual == "home"){
            alert("¡Ya estas en la pagina de inicio!");
        }
        else{
            pagActual = "home";


        }
    });

    /*
     * ME QUEDA
    hacer que cuando des a home se borre toda la mierda (y si tal un parrafo explicativo en el content)
    cuando pinches a un pavo que se borre todo lo que haya en el content 
        (creo que voy a necesitar hacer un div general para toda la mierda de los usuarios, que se borren rapido)
    nada mas yo creo
     */

})
