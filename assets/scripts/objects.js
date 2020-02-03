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

    const filteredMovies = !filter ? movies : movies.filter(movie => movie.info.title.includes(filter));

    filteredMovies.forEach((movie) => {
        const movieEl = document.createElement('li');
        // movieEl.textContent = movie.info.title;
        const {
            info
        } = movie; //object destructuting
        let text = info.title + ' - ';
        for (const key in info) {
            if (key !== 'title') {
                text = text + `${key}: ${info[key]}`
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
        id: Math.random().toString()
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