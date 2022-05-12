let boxes= document.querySelectorAll(".color-box");

let newColorBtn =document.getElementById("newColBtn")
let rgbTitle = document.getElementById("colorTitle")
let winBoxNum =0;
let winBox= document.getElementById(boxes[3].id);
console.log(boxes[2]);


let boxSel = document.getElementsByClassName(".color-box")
// Generador Numero Aleatorio 0-255

function getRandomNumber(max) {
    return parseInt(Math.round(Math.random()*(max)))
    
}

function rgb (r,g,b){
    return ["rgb(",r,",",g,",",b,")"].join("");
}
console.log(getRandomNumber())
let color1=getRandomNumber(255);
let color2=getRandomNumber(255);
let color3=getRandomNumber(255);


// Elegir box que tendra el ganador



function newColor() {
    let colorR=getRandomNumber(255);
    let colorG=getRandomNumber(255);
    let colorB=getRandomNumber(255);

    rgbTitle.innerHTML=rgb(colorR,colorG,colorB);
    // winBox.innerHTML="TEST"
    
    // Obtener win box
    winBoxNum=getRandomNumber(boxes.length)
    winBox=document.getElementById(boxes[winBoxNum].id)
    winBox.style.backgroundColor=rgb(colorR,colorG,colorB);

    // cambiar el color de los no ganadores

    for (let i = 0; i < 6; i++) {
        if (i != winBoxNum) {
            let boxLose = document.getElementById(boxes[i].id)
            
            boxLose.style.backgroundColor=rgb(getRandomNumber(255),getRandomNumber(255),colorB);

        }
       
    }
    
}


function checkWin(id) {

    let element = document.getElementById(id);
    let style = window.getComputedStyle(element);
    let color = style.getPropertyValue("background-color");
    console.log(color);

    if (color === winBox.style.backgroundColor){
        alert("ganaste")
    }
    else
    {
        alert("intenta otra vez")
    }

    
}

let colorRgb= rgb(color1,color2,color3);



newColorBtn.addEventListener("click",newColor)

// boxSel.addEventListener("click",checkWin)