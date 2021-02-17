const url = 'https://official-joke-api.appspot.com/jokes/random';

fetch(url)
  .then((res) => res.json())
  .then((data) => console.log(data));
