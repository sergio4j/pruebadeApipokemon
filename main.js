/*Creado por Sergio Rodríguez Siles */

function consiguePokemon(id) {
    //id = prompt("Introduzca un numero.");
    var id = document.getElementsByName('npokemon')[0].value;
    if (id < 150) {
        const habilidad = `https://pokeapi.co/api/v2/ability/${id}`
        fetch(habilidad)
            .then(response => response.json())
            .then(data => {
                let element = document.getElementById('efecto')
                console.log(data.effect_entries[0].effect)
                element.innerHTML = `
                <p>${data.effect_entries[1].effect} </p>
            `
            })
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`
        fetch(url)
            .then(response => response.json())
            .then(data => {
                let element = document.getElementById('pokemon')
                element.innerHTML = `
                <p>${data.name} </p>
                <img class="img" src='${data.sprites.front_default}'/>
            `
            })
    } else {
        let element = document.getElementById('pokemon')
        element.innerHTML = `
            <p class="error">Error, no hay tantos Pokemon - O no has introducido un número</p>
            
        `    }
}

consiguePokemon();
