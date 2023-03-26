const joke = document.querySelector('.joke')
const button = document.querySelector('.btn')
const randomJokeUrl = 'https://api.chucknorris.io/jokes/random';
const categoriesOfJokes = 'https://api.chucknorris.io/jokes/categories'
const jokesByCategories = 'https://api.chucknorris.io/jokes/random?category={category}'
const categoriesButton = document.querySelector('.btn-categories')
const div = document.querySelector('.btn-div')
const createdCategoryButtons = document.querySelector('.createdButtons')


//fetching function
// function fetchData(){
//     let data = {}
//     fetch(randomJokeUrl)
//     // const randomJoke = fetch(randomJokeUrl)
//     .then (response => response.json())
//     .then (data => {
//          joke.innerHTML = data.value;

//     })
// }

async function fetchData() {
    try {
        const response = await fetch(randomJokeUrl);
        const data = await response.json();
        joke.innerHTML = data.value;
        console.log(categories)
    } catch (err) {
        console.log(err)
    }
}


async function fetchCategory() {
    try {
        const catResponse = await fetch(categoriesOfJokes);
        const categories = await catResponse.json();
        categories.map((el) => {
            const btn = document.createElement('button');
            btn.addEventListener('click', createdBtnsClick)
            div.appendChild(btn);
            btn.innerText = el;
            btn.className = 'createdButtons';

           async function createdBtnsClick() {
                console.log('hooray it works!!!')
                joke.innerHTML = 'Button works, but URL doesn\'t !!!! ';
                // try{
                //     const catJokesRespons = await fetch (jokesByCategories);
                //     const catJokesData = await catJokesRespons.json();
                //     console.log( catJokesData)

                // } catch (err){
                //     console.log(err)
                // }

            }

        })

    } catch (err) {
        console.log(err)
    };

}

function clearFetchCategory() {
    if (div.innerHTML != '') {
        div.innerHTML = '';
    }
}


//click function
function btnClick() {
    // console.log('clicked')
    fetchData()
}

function categoryClick() {
    clearFetchCategory()
    fetchCategory()
    // console.log('clicked Categoty BTN')

}



button.addEventListener('click', btnClick)
categoriesButton.addEventListener('click', categoryClick)