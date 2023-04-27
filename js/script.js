
let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function getAll() { //get a list of all the pokemon
        return pokemonList;
    }

    function addListItem(pokemon) { //create a list of buttns with each pokemon name
        let pokemonList = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('pokemonButton');
        listItem.appendChild(button);
        pokemonList.appendChild(listItem);
        button.addEventListener('click', function (event) {
            showDetails(pokemon);
        });
    }

    function loadList() { //fetch a list of pokemon from the api
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    height: item.height,
                    types: item.types,
                    detailsUrl: item.url
                };
                add(pokemon);
            });
        }).catch(function (e) {
            console.error(e);
        })
    }

    function loadDetails(pokemon) { //fet the DETAILS of the pokemon from the api
        let url = pokemon.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            pokemon.imageUrl = details.sprites.front_default;
            pokemon.height = details.height;
            pokemon.types = details.types;
        }).catch(function (e) {
            console.error(e);
        });
    }




    //modal: 

    function showDetails(pokemon) { //show the modal
        loadDetails(pokemon).then(function () {
            showModal(pokemon);
        });
    }


    function showModal(pokemon) { //details to go on modal
        let modalContainer = document.querySelector('#modal-container');
        modalContainer.innerHTML = '';

        let modal = document.createElement('div');
        modal.classList.add('modal');

        let closeButtonElement = document.createElement('button');
        closeButtonElement.classList.add('modal-close');
        closeButtonElement.innerText = 'Close';

        let titleElement = document.createElement('h1');
        titleElement.innerText = (pokemon.name);

        let heightElement = document.createElement('p');
        heightElement.innerText = 'Height: ' + (pokemon.height);


        let itemTypes = "";
        pokemon.types.forEach(function (types) {
            itemTypes += [types.type.name + "<br>"];
        });
        let typeElement = document.createElement('p');
        typeElement.innerHTML = "Type(s): " + "<br>" + itemTypes;

        modal.appendChild(closeButtonElement);
        modal.appendChild(titleElement);
        modal.appendChild(heightElement);
        modal.appendChild(typeElement);


        if (pokemon.imageUrl) {
            let imagePokemon = document.createElement('img');
            imagePokemon.setAttribute('src', pokemon.imageUrl);
            imagePokemon.setAttribute('alt', "Pokemon Image");
            modal.appendChild(imagePokemon);
        }

        modalContainer.appendChild(modal);

        modalContainer.classList.add('is-visible');
        closeButtonElement.addEventListener('click', hideModal);
        window.addEventListener('keydown', (e) => {
            let modalContainer = document.querySelector('#modal-container');
            if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
                hideModal();
            }
        });
        modalContainer.addEventListener('click', (e) => {
            let target = e.target;
            if (target === modalContainer) {
                hideModal();
            }
        });
    }
    function hideModal() { 
        let modalContainer = document.querySelector('#modal-container');
        modalContainer.classList.remove('is-visible');
    }

    //end of modal


    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails,
        showModal: showModal
    };
})();


pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});
