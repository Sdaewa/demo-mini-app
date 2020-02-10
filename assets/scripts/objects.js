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
        movieEl.textContent = movie.info.title;
        const {
            info,
            ...otherProps
        } = movie; //object destructuting
        let {
            formattedTitle
        } = movie;
        // formattedTitle = formattedTitle.bind(movie); // this refers to this movie object not to newMovie object
        // formattedTitle = formattedTitle.call(movie);
        formattedTitle = formattedTitle.apply(movie);
        let text = formattedTitle + ' - ';
        for (const key in info) {
            if (key !== 'title' && key !== '_title') {
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

    if (extraName.trim() === '' || extraValue.trim() === '') {
        return;
    }
    const newMovie = {
        info: {
            // title,
            set title(val) {
                if (val.trim() === '') {
                    this._title = 'DEFAULT';
                    return;
                }
                this._title = val;
            },
            get title() {
                return this._title;
            },
            [extraName]: extraValue
        },
        id: Math.random().toString(),
        formattedTitle() {
            return this.info.title.toUpperCase();
        }
    };

    newMovie.info.title = title;
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