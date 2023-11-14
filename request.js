const divRender = document.querySelector(".contenedor-render");
const apiButton = document.getElementById('api-Button');





const mostrarPokemon = (data) => {
    divRender.innerHTML = '';
    const div = document.createElement("div");
    div.classList.add("pokemon");
    div.innerHTML = `
    <div class="pokemon">
            <div class="pokemon-imagen">
                <img class="pokemon-img" src="${data.sprites.other["official-artwork"].front_default}" alt="${data.name}">
            </div>
            <div class="pokemon-info">
                <h1 class="pokemon-nombre">${data.name}</h1>
                <h2 class="pokemon-tipo">${data.types[0].type.name}</h2>
                <p class="pokemon-peso">${data.weight}</p>
                <p class="${data.height}">3m</p>
            </div>
        </div>
    `;
    
    return divRender.appendChild(div);
    }

const fetchPokemon = async () => { 
        let URL = "https://pokeapi.co/api/v2/pokemon/";
        const pokeInput = document.getElementById('buscar-input').value
        console.log(pokeInput);


    try {
        const respuesta = await fetch(URL+pokeInput);
        // console.log(respuesta);
        const data = await respuesta.json();
        

    await mostrarPokemon(data);

    } catch (error) {
        console.log("Hubo un error");
    }

    };

const init = () => {
    apiButton.addEventListener('click', fetchPokemon);
}
init();


/*const requestPoke = async (poke) => {
    const response = await fetch(URL);

    const data = await response.json ()
    console.log(data);
}

requestPoke(); */



/*let numeroDePokemon = data.id.map((id) => `<p class= ${data.id} numero">${id}</p>`);
console.log(numeroDePokemon);*/





