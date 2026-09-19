<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Movie Collection iOS 26</title>

<style>

* {
    box-sizing:border-box;
}

body {
    margin:0;
    font-family:
    -apple-system,
    BlinkMacSystemFont,
    "SF Pro Display",
    "Hiragino Sans",
    sans-serif;

    background:
    linear-gradient(
    180deg,
    #000,
    #111827
    );

    color:white;
}


/* iOS Header */

.header {

    position:sticky;
    top:0;

    padding:20px;

    backdrop-filter:
    blur(20px);

    background:
    rgba(20,20,25,.75);

    z-index:10;

}


.header h1 {

    font-size:32px;
    margin:0 0 15px;

}


/* Search */

.search {

    width:100%;

    padding:15px 20px;

    border-radius:18px;

    border:none;

    outline:none;

    font-size:17px;

    background:
    rgba(255,255,255,.15);

    color:white;

}


/* Filters */

.filters {

    display:flex;

    gap:10px;

    padding:15px;

    overflow:auto;

}


.filter {

    background:
    rgba(255,255,255,.15);

    padding:10px 18px;

    border-radius:30px;

    white-space:nowrap;

}


.filter.active {

    background:#007aff;

}



/* Movie Grid */

.collection {

    display:grid;

    grid-template-columns:
    repeat(auto-fill,minmax(160px,1fr));

    gap:18px;

    padding:20px;

}



/* Movie Card */

.movie {

    background:
    rgba(255,255,255,.12);

    border-radius:22px;

    padding:10px;

    backdrop-filter:
    blur(20px);

    transition:.3s;

}


.movie:hover {

    transform:scale(1.04);

}


.poster {

    width:100%;

    aspect-ratio:
    2/3;

    object-fit:cover;

    border-radius:18px;

}


.title {

    margin-top:10px;

    font-size:17px;

    font-weight:600;

}


.info {

    color:#aaa;

    font-size:13px;

    line-height:1.5;

}



.play {

    margin-top:10px;

    width:100%;

    border:0;

    padding:10px;

    border-radius:14px;

    background:#007aff;

    color:white;

    font-size:15px;

}



/* Bottom iOS bar */

.bottom {

    position:fixed;

    bottom:0;

    width:100%;

    padding:15px;

    text-align:center;

    background:
    rgba(20,20,20,.75);

    backdrop-filter:
    blur(20px);

}

</style>

</head>


<body>


<div class="header">

<h1>
🎬 映画コレクション
</h1>


<input
class="search"
id="search"
placeholder="映画を検索..."
onkeyup="searchMovie()">


</div>



<div class="filters">

<div class="filter active">
すべて
</div>

<div class="filter">
日本語
</div>

<div class="filter">
MKV
</div>

<div class="filter">
アニメ
</div>

<div class="filter">
映画
</div>

</div>




<div class="collection"
id="movies">



<div class="movie">


<img class="poster"
src="images/totoro.jpg">


<div class="title">
となりのトトロ
</div>


<div class="info">

日本語<br>
MKV<br>
1988

</div>


<button class="play">
▶ 再生
</button>


</div>




<div class="movie">


<img class="poster"
src="images/chihiro.jpg">


<div class="title">
千と千尋の神隠し
</div>


<div class="info">

日本語<br>
MKV<br>
2001

</div>


<button class="play">
▶ 再生
</button>


</div>





<div class="movie">


<img class="poster"
src="images/kiki.jpg">


<div class="title">
魔女の宅急便
</div>


<div class="info">

日本語<br>
MKV<br>
1989

</div>


<button class="play">
▶ 再生
</button>


</div>




</div>



<div class="bottom">

🍿 Movie Library • iOS 26 Style

</div>



<script>


function searchMovie(){

let text =
document
.getElementById("search")
.value
.toLowerCase();


let movies =
document
.getElementsByClassName("movie");



for(
let i=0;
i<movies.length;
i++
){


let title =
movies[i]
.querySelector(".title")
.innerText
.toLowerCase();



if(
title.includes(text)
){

movies[i]
.style.display="block";

}

else{

movies[i]
.style.display="none";

}


}

}



</script>


</body>
</html>
