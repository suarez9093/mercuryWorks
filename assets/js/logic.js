// Variables
// =============================================================
const getRandomJokeBtn = document.querySelector('.header-btn');
const punchlineBtn = document.querySelector('.punchline-btn');
const joke = document.querySelector('.joke');
const errorMessage = document.querySelector('.error-text');
const punchline = document.querySelector('.punchline');
const loadingText = document.querySelector('.loading-text');
// Functions
// =============================================================
async function getRandomJoke() {
  loadingText.classList.add('show');
  errorMessage.classList.remove('show');
  try {
    const url = 'https://official-joke-api.appspot.com/jokes/random';
    let response = await fetch(url);
    let data = await response.json();
    joke.innerText = data.setup;
    punchline.innerText = data.punchline;
    loadingText.classList.add('hidden');
  } catch (err) {
    console.error(err);
    errorMessage.classList.add('show');
  }
}

function punchLine(e) {
  punchline.classList.toggle('hidden');
  if (e.target.innerText === 'Show Punchline') {
    console.log('loading');
    e.target.innerText = 'Hide Punchline';
  } else if (e.target.innerText === 'Hide Punchline') {
    e.target.innerText = 'Show Punchline';
  }
}

// Event Listeners
// =============================================================
window.addEventListener('DOMContentLoaded', () => getRandomJoke());
getRandomJokeBtn.addEventListener('click', () => getRandomJoke());
punchlineBtn.addEventListener('click', (e) => punchLine(e));
