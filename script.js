let selected = "";
let fire = 1;
let protect = 0;


// Запуск игры
function startGame(){

    document.getElementById("home").style.display = "none";
    document.getElementById("game").style.display = "block";

    createMap();

}


// Меню
function openMenu(){

    let menu = document.getElementById("menu");

    if(menu.style.display === "block"){
        menu.style.display = "none";
    }
    else{
        menu.style.display = "block";
    }

}


// Выбор предмета
function choose(item){

    selected = item;

}


// Установка уровня костра
function setFire(level){

    fire = level;

    document.getElementById("fire").textContent = level;


    protect = level * 10;

    document.getElementById("protect").textContent = protect;

}


// Режим удаления
function removeMode(){

    selected = "remove";

}


// Очистить базу
function clearBase(){

    createMap();

}


// Создание карты
function createMap(){

    let map = document.getElementById("map");

    map.innerHTML = "";


    for(let i = 0; i < 150; i++){


        let cell = document.createElement("div");

        cell.className = "cell";


        if(i === 112){

            cell.textContent = "🔥";

        }
        else{

            cell.textContent = "🟩";

        }



        cell.onclick = function(){


            if(selected === "remove"){

                cell.textContent = "🟩";

            }


            else if(selected !== ""){

                cell.textContent = selected;

            }


        };



        map.appendChild(cell);


    }


}
