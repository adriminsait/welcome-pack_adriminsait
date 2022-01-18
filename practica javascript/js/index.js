"use strict"

var pagActual = ""; //registro para saber en que pagina nos encontramos: home / list / detail
import { generateList } from "./list.js"
import { detailUser } from "./detail.js"

$(document).ready(function () {

    
    console.log("cargado");
    pagActual = "home"; 

    const description = () =>{
        var info = "Esta página web es un ejemplo de un generador aleatorio de usuarios, los caules van " +
        "a tener una imagen de perfil, un nombre, un email, género y edad. Todo esto se consigue mediante llamadas " +
        "a una API pública encargada de generar un usuario aleatorio. Esta página se encargará de hacer X llamadas" +
        "(en este caso 10) a dicha API y mostrar una lista de los usuarios generados. Si clickas sobre el nombre de un" +
        "usuario, se abrirá una ventana nueva en la que aparecen los datos mencionados antes."

        var newElem = document.createElement('div');
        newElem.appendChild(document.createTextNode(info));
        newElem.className = 'content__info';
        newElem.style = 'width:70vw; height:50vh; margin: 2px;' + 
         'text-align: left; margin-top: 3%; margin-left: 15vw; padding-left: 1vw; font-size: calc(1vh + 1.5vw) '; 
        $('.content').append(newElem);
    }
    description();

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
            if (pagActual == "detail"){
                $('.content__user').remove();
            }
            else{
                $('.content__info').remove();
            }
            pagActual = "list";
            var listUsers = {};
            $('.content__saludo').remove();

            async function drawUsers(){
                listUsers = await generateList();
                //document.querySelector('.content__saludo').style = 'display: hidden;';

                var divUsersList = document.createElement('div');
                divUsersList.className = 'content__UsersList';
                divUsersList.style = 'display: flex; flex-direction: column; min-height: 80vh;'; 
                $('.content').append(divUsersList);

                listUsers.forEach(user => {
                    //console.log(user);
                    var divUser = document.createElement('div');
                    divUser.className = `content__UsersList__${user.id}`;
                    divUser.style = 'display: flex; flex-direction: row; width:50vw; height:10vh; border-radius: 1%;' + 
                    'text-align: left; margin: 2px; margin-left: 25vw; padding-left: 1vw; font-size: calc(1vh + 1.5vw);' +
                    'background-color: rgb(200, 247, 250);'; 
                    $('.content__UsersList').append(divUser);

                    var divPhoto = document.createElement('img');
                    divPhoto.setAttribute('src', user.photo);
                    divPhoto.className = `content__UsersList__${user.id}__photo`;
                    divPhoto.style = 'width: 10%; margin-top: 1.1vh;padding-bottom: 1vh; border-radius: 10%;'; 
                    $(`.content__UsersList__${user.id}`).append(divPhoto);

                    var divName = document.createElement('a');
                    divName.appendChild(document.createTextNode(`${user.name} ${user.last}`));
                    divName.className = `content__UsersList__${user.id}__name`;
                    divName.style = 'width:auto; height: auto;  text-decoration: none; color: black;' + 
                    'text-align: left; margin-left: 5%; font-size: calc(1vh + 1.5vw); cursor: pointer;' +
                    'margin-top: 2vh'; 
                    $(`.content__UsersList__${user.id}`).append(divName);

                    //vista del detalle del usuario
                    document.querySelector(`.content__UsersList__${user.id}__name`).addEventListener('click', function(event) {
                        $('.content__UsersList').remove();
                        detailUser(user);
                        pagActual = "detail";
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
            if (pagActual == "list"){
                $('.content__UsersList').remove(); 
            }
            else{
                $('.content__user').remove();
            }
            pagActual = "home";
            description();
        }
    });

    document.querySelector('#header__link__home').addEventListener('click', function(event) {
        //si ya estas en esta vista te salta una alerta
        if(pagActual == "home"){
            alert("¡Ya estas en la pagina de inicio!");
        }
        else{
            if (pagActual == "list"){
                $('.content__UsersList').remove(); 
            }
            else{
                $('.content__user').remove();
            }
            pagActual = "home";
            description();
        }
    });

})
