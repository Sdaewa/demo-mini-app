addMovieBtn = document.getElementById('add-movie-btn');
searchBtn = document.getElementById('search-btn');

const movies = [];

const renderMovies = (filter = '') => {
    const movieList = document.getElementById('movie-list');
    if (movies.length === 0) {
        movieList.classList.remove('visible');
        returnl
    } else {
        movieList.classList.add('visible');
    }
    movieList.innerHTML = ''; // not ideal

    const filteredMovies = !filter ? movies : movies.filter();

    movies.forEach((movie) => {
        const movieEl = document.createElement('li');
        // movieEl.textContent = movie.info.title;
        let text = movie.info.title + ' - ';
        for (const key in movie.info) {
            if (key !== 'title') {
                text = text + `${key}: ${movie.info[key]}`
            }
        };
        movieEl.textContent = text;
        movieList.append(movieEl);
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
    renderMovies();
    // console.log(newMovie);
};

const searchMovieHandler = () => {
    const filterSearch = document.getElementById('filter-title').value;
    renderMovies(filterSearch);
};

addMovieBtn.addEventListener('click', addMoviHandler);
searchBtn.addEventListener('click', searchMovieHandler);