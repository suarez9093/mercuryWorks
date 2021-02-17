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
  errorMessage.style.display = 'none';
  joke.innerText = '';
  punchline.innerText = '';
  punchline.style.display = 'none';
  try {
    const url = 'https://official-joke-api.appspot.com/jokes/random';
    let response = await fetch(url);
    let data = await response.json();
    // throw 'error';
    joke.innerText = data.setup;
    punchline.innerText = data.punchline;
    loadingText.classList.add('hidden');
  } catch (err) {
    console.error(err);
    errorMessage.style.display = 'block';
    errorMessage.classList.remove('hidden');
    errorMessage.classList.add('show');
    punchlineBtn.classList.add('hidden');
    loadingText.classList.add('hidden');
  }
}

function punchLine(e) {
  if (e.target.innerText === 'Show Punchline') {
    e.target.innerText = 'Hide Punchline';
    punchline.style.display = 'block';
  } else if (e.target.innerText === 'Hide Punchline') {
    e.target.innerText = 'Show Punchline';
    punchline.style.display = 'none';
  }
}

// Event Listeners
// =============================================================
window.addEventListener('DOMContentLoaded', () => getRandomJoke());
getRandomJokeBtn.addEventListener('click', () => getRandomJoke());
punchlineBtn.addEventListener('click', (e) => punchLine(e));
