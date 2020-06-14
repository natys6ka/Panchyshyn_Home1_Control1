let textSpace = document.querySelector('.textSpace');
let editbtn = document.querySelector('.editbtn');
let stylebtn = document.querySelector('.stylebtn');
let editBlock = document.querySelector('.editBlock');
let styleBlock = document.querySelector('.onestyleBlock');

editbtn.addEventListener('click', () => {
    editBlock.hidden = false;
    styleBlock.hidden = true;
    textArea.value = textSpace.innerHTML;
    for (const j in twocolorBlock.children) {
        twocolorBlock.children[j].classList.remove('visib');
    }
});

stylebtn.addEventListener('click', () => {
    editBlock.hidden = true;
    styleBlock.hidden = false;
});

let saveTxtbtn = document.querySelector('.saveTxtbtn');
saveTxtbtn.addEventListener('click', () => {
    textSpace.innerHTML = textArea.value;
    editBlock.hidden = true;
});





let fFam = document.querySelector('.fFam');
fFam.slcFontFamily.onchange = function () {
    for (const a in textSpace.children) {
        textSpace.children[a].style.fontFamily = event.target.value;
    }
}




function sizeChange() {
    textSpace.style.fontSize = event.target.id;
}
function fontWeight() {
    textSpace.classList.toggle('fontWeight');
}
function fontStyle() {
    textSpace.classList.toggle('fontStyle');
}





let twocolorBlock = document.querySelector('.twocolorBlock');
let col = document.querySelector('.col');

function showColor() {
    for (const j in twocolorBlock.children) {
        twocolorBlock.children[j].classList.toggle('visib');
    }
}

let fon;
function TextColor() {
    fon = false;
    showColor();
}
function BackColor() {
    fon = true;
    showColor();
}
function ChangeColor() {
    if (fon) {
        textSpace.style.backgroundColor = event.target.id;
    } else textSpace.style.color = event.target.id;
    for (const j in twocolorBlock.children) {
        twocolorBlock.children[j].classList.remove('visib');
    }
}



let addTxtbtn = document.querySelector('.addTxtbtn');
let btnPlace = document.querySelector('.btnPlace');
let editSpace = document.querySelector('.editSpace');
let tableSpace = document.querySelector('.tableSpace');



addTxtbtn.addEventListener('click', ()=>{
    textSpace.hidden = true;
    btnPlace.hidden = true;
    editSpace.hidden = true;
    tableSpace.hidden = false;
});




// Створення таблиці та списку
let tableCreate = document.querySelector('.tableCreate');
let listCreate = document.querySelector('.listCreate');
function tableCreated(){
    tableCreate.hidden = false;
    listCreate.hidden = true;
}
function listCreated(){
    tableCreate.hidden = true;
    listCreate.hidden = false;
}
function clearCreated(){
    textSpace.hidden = false;
    btnPlace.hidden = false;
    editSpace.hidden = false;
    editBlock.hidden = false;
    styleBlock.hidden = true;

    tableSpace.hidden = true;
    tableCreate.hidden = true;
    listCreate.hidden = true;
}

// Додавання списку

function listNew(){
    let countLi = document.getElementById('countLi').value;
    let typeMark = document.getElementById('typeMark').value;
    textArea.value += `<ul type="${typeMark}">\n`;
    for(let a=1; a<=countLi; a++){
        textArea.value += `<li>item ${a}</li>\n`
    }
    textArea.value += `</ul>\n`;
    clearCreated();

    editBlock.hidden = false;
    styleBlock.hidden = true;
}
// Додавання таблиці
function tableNew(){
    let countTR = document.getElementById('countTR').value;
    let countTD = document.getElementById('countTD').value;

    let widthTD = document.getElementById('widthTD').value;
    let heightTD = document.getElementById('heightTD').value;

    let widborder = document.getElementById('widborder').value;
    let typborder = document.getElementById('typborder').value;
    let colborder  = document.getElementById('colborder').value;

    textArea.value += `<table>\n`;
    for (let i=1; i<=countTR; i++){
        textArea.value += `<tr>\n`;
        for (let j=1; j<=countTD; j++){
            textArea.value += `<td style="width: ${widthTD}px; height: ${heightTD}px; border: ${widborder}px ${typborder} ${colborder}">TD</td>\n`;
        }
        textArea.value += `</tr>\n`;
    }
    textArea.value += `</table>\n`;
    clearCreated();
}