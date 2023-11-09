// Your code here
const movieAPI = 'http://localhost:3000/films'

const navFilmList = document.getElementById('films');
const title = document.getElementById('title');
const poster = document.getElementById('poster');
const runtime = document.getElementById('runtime');
const filmInfo = document.getElementById('film-info');
const showtime = document.getElementById('showtime');
const ticketRemaining = document.getElementById('ticket-num');


const buyTicketButton = document.getElementById('buy-ticket');
buyTicketButton.addEventListener('click', buyTicket);

fetch(movieAPI)
    .then(res => res.json())
    .then(renderMovies);

fetch(`${movieAPI}/1`)
    .then(res => res.json())
    .then(renderFirstMovie);


function renderMovies(film) {
    navFilmList.innerHTML = '';
    film.forEach(renderfilm);
};

function renderFirstMovie(film) {
    const availableTickets = film.capacity - film.tickets_sold;
    title.textContent = film.title
    poster.src = film.poster
    poster.alt = film.title
    runtime.textContent = film.runtime
    filmInfo.textContent = film.description
    showtime.textContent = film.showtime
    ticketRemaining.textContent = `Available Tickets: ${availableTickets}`;

};

function renderfilm(film) {
    const movieListItem = document.createElement('li')
    // movieListItem.classList.add('film item');
    movieListItem.textContent = film.title;
    navFilmList.append(movieListItem);
};

function buyTicket(buy){
    const availableTickets = parseInt(ticketRemaining.textContent.split(': ')[1]);
    if (availableTickets > 0) {
        ticketRemaining.textContent = `Available Tickets: ${availableTickets - 1}`;
    alert('Enjoy The Movie!');
} else {
    alert('No tickets available.');
}
}



