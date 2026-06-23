let selected = "";
let fire = 1;
let protect = 0;

function startGame(){
    document.getElementById("home").style.display = "none";
    document.getElementById("game").style.display = "block";
}

function openMenu(){
    let menu = document.getElementById("menu");

    if(menu.style.display === "block"){
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

function choose(item){
    selected = item;
    alert("Выбрано: " + item);
}

function setFire(level){
    fire = level;
    document.getElementById("fire").textContent = level;

    protect = level * 10;
    document.getElementById("protect").textContent = protect;
}

function removeMode(){
    alert("Режим удаления включён");
}

function clearBase(){
    document.getElementById("map").innerHTML = "";
}
