async function showMovies(){
    let response = await fetch('https://portiaportia.github.io/csce242/json/movies.json');
    let moviesJSON = await response.json();
    let movieDiv = document.getElementById("movies-section");
    
    //loop through the list of movies from the JSON file
    for(i in moviesJSON){
        let movie = moviesJSON[i];
        movieDiv.append(getmovieItem(movie));
    }

}

function getmovieItem(movie){
    let oneMovieSection = document.createElement("section");
    oneMovieSection.classList.add("one-movie-section");
    let movieImgSection = document.createElement("section");

    let movieImg = document.createElement("IMG");
    movieImg.classList.add("movieImg");
    movieImg.src = `images/${movie.title}.jpg`;
    movieImgSection.append(movieImg);
    oneMovieSection.append(movieImgSection);

    let h3Elem = document.createElement("h3");
    h3Elem.innerHTML = movie.title;
    oneMovieSection.append(h3Elem);

    let ulElem = document.createElement("ul");
    oneMovieSection.append(ulElem);

    let liDirector = document.createElement("li");
    liDirector.innerHTML = `<strong>Director:</strong> ${movie.director}`;
    ulElem.append(liDirector);

    let liActors = document.createElement("li");
    liActors.innerHTML = `<strong>Actors:</strong> ${movie.actors.join(', ')}`;
    ulElem.append(liActors);

    let liYear = document.createElement("li");
    liYear.innerHTML = `<strong>Year:</strong> ${movie.year}`;
    ulElem.append(liYear);

    let liGenres = document.createElement("li");
    liGenres.innerHTML = `<strong>Genres:</strong> ${movie.genres.join(', ')}`;
    ulElem.append(liGenres);

    let liDescription = document.createElement("li");
    liDescription.innerHTML = `<strong>Description:</strong> ${movie.description}`;
    ulElem.append(liDescription);

    return oneMovieSection;
}

window.onload = function(){
    this.showMovies();
}
