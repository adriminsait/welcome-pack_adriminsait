"use strict"

var pagActual = ""; //registro para saber en que pagina nos encontramos: home / list /

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

})
