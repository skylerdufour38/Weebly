const animals = [
  {
    name: "Gray Wolf",
    scientific: "Canis lupus",
    category: "Mammals",
    image: "images/wolf.jpg",
    sound: "sounds/gray-wolf.mp3",
    description:
      "The gray wolf is Michigan’s largest native land predator. It typically lives in packs and has a strong, distinctive howl."
  },
  {
    name: "Coyote",
    scientific: "Canis latrans",
    category: "Mammals",
    image: "images/coyote.jpg",
    sound: "sounds/coyote.mp3",
    description:
      "Coyotes are adaptable predators found throughout Michigan."
  }
];

let currentAnimal = 0;

function loadAnimal(index) {
  const animal = animals[index];

  document.getElementById("animalName").textContent = animal.name;
  document.getElementById("scientific").textContent = animal.scientific;
  document.getElementById("description").textContent = animal.description;
  document.getElementById("animalImage").src = animal.image;

  document.getElementById("sound").src = animal.sound;
}

document
  .getElementById("playButton")
  .addEventListener("click", () => {
    document.getElementById("sound").play();
  });

document
  .getElementById("nextButton")
  .addEventListener("click", () => {
    currentAnimal++;

    if (currentAnimal >= animals.length) {
      currentAnimal = 0;
    }

    loadAnimal(currentAnimal);
  });

loadAnimal(0);
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<title>Michigan Nature Sounds</title>

<link rel="stylesheet" href="style.css">

</head>

<body>

<div class="app">

<header>
    <img src="images/logo.png">
    <h1>
        Michigan <span>Nature</span> Sounds
    </h1>
</header>


<div class="content">


<section class="animals">

<h2>🐾 Mammals</h2>

<ul id="animalList"></ul>

</section>



<section class="viewer">

<div class="animal-info">

<h2 id="name">
Gray Wolf
</h2>

<i id="scientific">
Canis lupus
</i>


<p id="description">
The gray wolf is Michigan’s largest native land predator.
It typically lives in packs and has a strong distinctive howl.
</p>


<div class="controls">

<button id="play">
▶
</button>


<button id="speaker">
🔊
</button>


<button id="next">
➜
</button>

</div>

</div>


<img id="animalImage"
src="images/gray-wolf.jpg">


<audio id="audio"></audio>


</section>

</div>



<nav>

<button>
🦟
<br>
Insects
</button>


<button>
🐦
<br>
Birds
</button>


<button class="active">
🐿
<br>
Mammals
</button>

</nav>


</div>


<script src="script.js"></script>

</body>
</html>
body {

margin:0;
font-family:
Arial, Helvetica, sans-serif;

background:
linear-gradient(
rgba(0,40,20,.7),
rgba(0,30,15,.8)
),
url("images/forest-bg.jpg");

background-size:cover;

color:white;

}


.app {

max-width:1200px;
margin:auto;
min-height:100vh;

}


header {

height:150px;

display:flex;

align-items:center;

justify-content:center;

gap:25px;

background:
rgba(20,70,40,.65);

}


header img {

width:90px;

}


h1 {

font-size:55px;

font-family:cursive;

}


h1 span {

color:#8bd34b;

}



.content {

display:flex;

gap:15px;

padding:15px;

}



.animals,
.viewer {

background:
rgba(0,45,30,.85);

border-radius:20px;

padding:25px;

}


.animals {

width:32%;

}


.viewer {

width:68%;

display:flex;

}


ul {

padding:0;

list-style:none;

}


li {

padding:12px;

font-size:20px;

cursor:pointer;

}


li:hover,
.selected {

background:#65a63b;

border-radius:15px;

}



.viewer img {

width:45%;

object-fit:cover;

border-radius:20px;

}



.animal-info {

width:55%;

}


.controls button {

border:none;

border-radius:50%;

width:80px;

height:80px;

font-size:35px;

margin:15px;

cursor:pointer;

}


#play {

background:#4285f4;

}


#speaker {

background:#ff3b30;

}


#next {

background:#4285f4;

}



nav {

display:flex;

justify-content:center;

gap:120px;

padding:30px;

}


nav button {

background:none;

border:0;

color:white;

font-size:25px;

}


.active {

border:4px solid #9cff4a;
border-radius:50%;

}
const animals = [

{
name:"Gray Wolf",
scientific:"Canis lupus",

image:"images/gray-wolf.jpg",

sound:"sounds/gray-wolf.mp3",

description:
"The gray wolf is Michigan’s largest native land predator. It typically lives in packs and has a strong distinctive howl."
},


{
name:"Coyote",
scientific:"Canis latrans",

image:"images/coyote.jpg",

sound:"sounds/coyote.mp3",

description:
"Coyotes are adaptable predators found throughout Michigan."
},


{
name:"Black Bear",
scientific:"Ursus americanus",

image:"images/black-bear.jpg",

sound:"sounds/black-bear.mp3",

description:
"Black bears are Michigan’s largest forest mammals."
}

];


let current=0;


const list=document.getElementById("animalList");


animals.forEach((animal,index)=>{

let item=document.createElement("li");

item.textContent=
animal.name+"  "+animal.scientific;


item.onclick=()=>{

current=index;

loadAnimal();

};


list.appendChild(item);

});



function loadAnimal(){

let a=animals[current];


document.getElementById("name")
.textContent=a.name;


document.getElementById("scientific")
.textContent=a.scientific;


document.getElementById("description")
.textContent=a.description;


document.getElementById("animalImage")
.src=a.image;


document.getElementById("audio")
.src=a.sound;


}



document
.getElementById("play")
.onclick=()=>{

document.getElementById("audio").play();

};



document
.getElementById("speaker")
.onclick=()=>{

document.getElementById("audio").play();

};



document
.getElementById("next")
.onclick=()=>{

current++;

if(current>=animals.length)
current=0;


loadAnimal();

};



loadAnimal();
