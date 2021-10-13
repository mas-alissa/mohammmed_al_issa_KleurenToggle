let hamburger_icon = document.getElementById("hamburger-menu-icon");
let container = document.querySelector(".container");

//colors divs
let Home = document.querySelector(".Home");
let Red = document.querySelector(".Red");
let Orange = document.querySelector(".Orange");
let Purple = document.querySelector(".Purple");
let Green = document.querySelector(".Green");


//with out radio buttons

hamburger_icon.addEventListener("click", function(){
    container.classList.toggle("hide");
})


Home.addEventListener("click", function(){
    document.body.style.backgroundColor = "gray"
     container.classList.add("hide")
})

Red.addEventListener("click", function(){
    document.body.style.backgroundColor = "red"
     container.classList.add("hide")
})

Orange.addEventListener("click", function(){
    document.body.style.backgroundColor = "Orange"
     container.classList.add("hide")
})

Purple.addEventListener("click", function(){
    document.body.style.backgroundColor = "Purple"
     container.classList.add("hide")
})

Green.addEventListener("click", function(){
    document.body.style.backgroundColor = "Green"
     container.classList.add("hide")
})



//with radio buttons

let hamburger_icon1 = document.getElementById("hamburger-menu-icon1");
let container1 = document.querySelector(".container1");

//colors divs
let Home1 = document.getElementById("Home1");
let Red1 = document.getElementById("Red1");
let Orange1 = document.getElementById("Orange1");
let Purple1 = document.getElementById("Purple1");
let Green1 = document.getElementById("Green1");






hamburger_icon1.addEventListener("mouseover", function(){
    container1.style.left = "-20px"
    container1.style.transition = "all 2s";
})

container1.addEventListener("mouseleave", function(){
    container1.style.left = "-400px"
    container1.style.transition = "all 2s";
})





Home1.addEventListener("click", function(){
    document.body.style.backgroundColor = "gray"
    container1.style.left = "-400px"
    container1.style.transition = "all 2s";
})

Red1.addEventListener("click", function(){
    document.body.style.backgroundColor = "red"
    container1.style.left = "-400px"
    container1.style.transition = "all 2s";
})

Orange1.addEventListener("click", function(){
    document.body.style.backgroundColor = "Orange"
    container1.style.left = "-400px"
    container1.style.transition = "all 2s";
})

Purple1.addEventListener("click", function(){
    document.body.style.backgroundColor = "Purple"
    container1.style.left = "-400px"
    container1.style.transition = "all 2s";
})

Green1.addEventListener("click", function(){
    document.body.style.backgroundColor = "Green"
    container1.style.left = "-400px"
    container1.style.transition = "all 2s";
})

//keyboard event

document.addEventListener("keydown", function(e){
if (e.key === "1"){
    document.body.style.backgroundColor = "gray";
    Home1.checked = true;
} else if(e.key === "2"){
    document.body.style.backgroundColor = "red";
    Red1.checked = true;
} else if(e.key === "3"){
    document.body.style.backgroundColor = "orange";
    Orange1.checked = true;
}else if(e.key === "4"){
    document.body.style.backgroundColor = "purple";
    Purple1.checked = true;
}else if(e.key === "5"){
    document.body.style.backgroundColor = "green";
    Green1.checked = true;
}
})