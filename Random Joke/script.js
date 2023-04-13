const jokeContainer = document.querySelector('.jokes')
const btn = document.querySelector('#btn')
const url="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"

function getJokes(){
    jokeContainer.classList.remove('fade')
    fetch(url)
    .then(data => data.json())
    .then(item => {
        jokeContainer.innerHTML = `${item.joke}`
        jokeContainer.classList.add('fade')
        console.log(item) 
    })
    
}
btn.addEventListener('click',(getJokes))
getJokes();