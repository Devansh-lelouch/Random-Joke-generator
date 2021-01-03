const jokeVisible = document.querySelector('.joke');
jokeVisible.addEventListener('click', generateJoke);
async function generateJoke(){
    const jokeInfo  = await fetch('https://icanhazdadjoke.com/' ,{
        headers:{
            'Accept': 'application/json'
        }
    })
    const joke = await jokeInfo.json()
    jokeVisible.innerHTML=joke.joke
}