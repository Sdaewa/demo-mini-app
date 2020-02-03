addMovieBtn = document.getElementById('add-movie-btn');
searchBtn = document.getElementById('search-btn');

const addMoviHandler = () => {
    const title = document.getElementById('title').value;
    const extraName = document.getElementById('extra-name').value;
    const extraValue = document.getElementById('extra-value');

    if (title.trim() === '' || extraName.trim() === '' || extraValue.trim() === '') {
        return;
    }
    const newMovie = {
        info: {
            title,
            [extraName]: ,
            [extraValue]:
        }

    }
};