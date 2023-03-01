const listaArray = [
    "latte",
    "pane",
    "uova",
    "formaggio",
    "affettati vari",
    "riso",
    "tonno"
]

const lista = document.querySelector('.lista_spesa');

let i = 0;

while(i < listaArray.length - 1){
    i++;
   lista.innerHTML += `<li> ${listaArray[i]}</li>`
}

