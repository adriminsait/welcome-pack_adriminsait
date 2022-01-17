"use strict"

const numberUsers = 12;
var listUsers = [];

async function generateUsers() {
    for(let i = 0; i < numberUsers; i++){
        await fetch('https://randomuser.me/api/')
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            listUsers.push(myJson);
        });
        // await $.ajax({
        //     url: 'https://randomuser.me/api/',
        //     dataType: 'json',
        //     success: function(data) {
        //         listUsers.push(data);
        //     }
        // });
    }
}

async function generateList(){
    try {
        await generateUsers();

         console.log(listUsers[0].results[0])
        // console.log(listUsers[0].results[0].name.first);

        var prettyList;
        prettyList = listUsers.map(person => ({
            id: person.results[0].name.tittle + person.results[0].name.first + person.results[0].name.first,
            name: person.results[0].name.first, 
            last: person.results[0].name.last,
            email: person.results[0].email,
            gender: person.results[0].gender,
            age: person.results[0].dob.age,
            photo: person.results[0].picture.large
        }));

        console.log(prettyList);    
        return prettyList;

      } catch (error) {
        console.error('error', error);
      }
}

export {generateList};