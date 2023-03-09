// 'Base URL' er stedet man skal gå hen for at få fat på en API. 

// Mickey Mouse ID nummer 4703


let myPage = 1;
const myAppElement = document.getElementById('myApp')

// entry point, her bliver de kaldt
loadingScreen();
setUpShowAllButton();
setUpSearchForm();
fetchOneCharacter(4703);

function fetchOneCharacter(myId) {
    let URI = `https://api.disneyapi.dev/characters/${myId}`
    console.log(URI);

    fetch(URI).then((response) => {

        return response.json();

    }).then((data) => {
        console.log(data);
        showCharacter(data);
    })
    
    .catch ();
}

function showCharacter(myData) {
    // myAppElement
    console.log(myData.name);

    let myFilms= "<h3>Film<h3>";
    myData.films.map((film) => {
        myFilms += `${film}` 
    })

    let myHTML = `<h2>${myData.name}</h2> <img src="${myData.imageUrl}"> <p>${myFilms}</p>`;
    myAppElement.innerHTML = myHTML;
    console.log(myHTML);
}


// Loading Screen kaldese når vi henter data
function loadingScreen() {

    myAppElement.innerHTML = "<h2>Loading...</h2>"

}

function setUpShowAllButton() {

    let showAllButton = document.getElementById('showAllButton');

    showAllButton.addEventListener('click', (e) => {
        myPage = 1;
        fetchCharacterPage();
    });
}


function setUpSearchForm() {
    let searchButton = document.getElementById('searchButton');

    searchButton.addEventListener('click', (e) => {

        e.preventDefault();

        let searchInput = document.getElementById('searchInput')
        let myValue = searchInput.value;

        if (myValue) {
            console.log('vi har en string');

        }

        else {

            alert('instast noget i søgefeltet')

        }

        console.log(myValue)

    });
}


function fetchCharacterPage() {


    console.log('fetchCharacterPage');

}