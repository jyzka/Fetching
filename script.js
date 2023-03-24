const joke = document.querySelector('.joke')
const button = document.querySelector('.btn')
const randomJokeUrl = "https://api.chucknorris.io/jokes/random";
const categoriesOfJokes = "https://api.chucknorris.io/jokes/categories"
const categoriesButton = document.querySelector('.btn-categories')
const div = document.querySelector('.btn-div')



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

async function fetchData(){
    try{
    const response = await fetch(randomJokeUrl);
    const data = await response.json();
    joke.innerHTML = data.value;
    console.log(categories)
    } catch(err){
        console.log(err)
    }
}


async function fetchCategory(){
    try{
        const catResponse = await fetch(categoriesOfJokes);
        const categories = await catResponse.json();
        categories.map((el)=>{
             const btn = document.createElement('button');
             div.appendChild(btn);
             btn.innerText = el;
           
        })
        
       
        } catch(err){
            console.log(err)
        }

}



//click function
function btnClick(){
    console.log('clicked')
    fetchData()
}

function categoryClick(){
    fetchCategory()
    
}

button.addEventListener('click',btnClick)
categoriesButton.addEventListener('click',categoryClick)
