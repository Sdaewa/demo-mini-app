addMovieBtn = document.getElementById('add-movie-btn');
searchBtn = document.getElementById('search-btn');

const movies = [];

const renderMovies = () => {
    const movieList = document.getElementById('movie-list');
    if (movies.length === 0) {
        movieList.classList.remove('visible');
        returnl
    } else {
        movieList.classList.add('visible');
    }
    movieList.innerHTML = ''; // not ideal
    movies.forEach(() => {

    });
};

const addMoviHandler = () => {
    const title = document.getElementById('title').value;
    const extraName = document.getElementById('extra-name').value;
    const extraValue = document.getElementById('extra-value').value;

    if (title.trim() === '' || extraName.trim() === '' || extraValue.trim() === '') {
        return;
    }
    const newMovie = {
        info: {
            title,
            [extraName]: extraValue
        },
        id: Math.random()
    };
    movies.push(newMovie);
    console.log(newMovie);
};



addMovieBtn.addEventListener('click', addMoviHandler);
// searchBtn.addEventListener('click', );