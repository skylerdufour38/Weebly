<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Movie Collection - MKV</title>

<style>
body {
    font-family: Arial, sans-serif;
    background: #111;
    color: white;
    margin: 0;
}

header {
    background: #222;
    padding: 20px;
    text-align: center;
}

input {
    width: 80%;
    max-width: 500px;
    padding: 12px;
    font-size: 18px;
    border-radius: 8px;
    border: none;
}

.container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px,1fr));
    gap: 20px;
    padding: 20px;
}

.movie {
    background: #222;
    border-radius: 10px;
    padding: 15px;
}

.movie img {
    width: 100%;
    border-radius: 8px;
}

.movie h3 {
    margin: 10px 0;
}

.tag {
    color: #00ff99;
}

a {
    color: white;
    text-decoration: none;
}
</style>

</head>

<body>

<header>
<h1>Movie Collection</h1>

<input 
type="text" 
id="search" 
placeholder="Search movie..."
onkeyup="searchMovies()">

</header>


<div class="container" id="movieList">


<div class="movie">
<img src="poster1.jpg">
<h3>Movie Title 1</h3>
<p class="tag">Format: MKV</p>
<a href="movies/movie1.mkv">Open MKV</a>
</div>


<div class="movie">
<img src="poster2.jpg">
<h3>Movie Title 2</h3>
<p class="tag">Format: MKV</p>
<a href="movies/movie2.mkv">Open MKV</a>
</div>


<div class="movie">
<img src="poster3.jpg">
<h3>Movie Title 3</h3>
<p class="tag">Format: MKV</p>
<a href="movies/movie3.mkv">Open MKV</a>
</div>


</div>


<script>

function searchMovies(){

let input = document
.getElementById("search")
.value
.toLowerCase();


let movies = document
.getElementsByClassName("movie");


for(let i=0;i<movies.length;i++){

let title = movies[i]
.querySelector("h3")
.textContent
.toLowerCase();


if(title.includes(input)){
movies[i].style.display="block";
}
else{
movies[i].style.display="none";
}

}

}

</script>

</body>
</html>
