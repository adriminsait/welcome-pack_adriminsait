"use strict"

const numberUsers = 10;
var listUsers = [];

async function generateUsers() {
    listUsers = [];
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

        var prettyList;
        prettyList = listUsers.map(person => ({
            id: 'u',
            name: person.results[0].name.first, 
            last: person.results[0].name.last,
            email: person.results[0].email,
            gender: person.results[0].gender,
            age: person.results[0].dob.age,
            photo: person.results[0].picture.large
        }));

        var i = 0;
        prettyList.forEach(user => {
            user.id += i;
            i++;
        });

        console.log(prettyList);    
        return prettyList;

      } catch (error) {
        console.error('error', error);
      }
}

export {generateList};