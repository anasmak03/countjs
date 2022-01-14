const entered = document.getElementById('count-el');

const savex = document.getElementById('save-el');


let score = 0;
function increment(){
    
    score++;
    entered.innerText=score;
}


function save(){
    let sum = score;
    savex.innerHTML  +=  ` <br>
    <span>${sum}</span>
    
    `;
}