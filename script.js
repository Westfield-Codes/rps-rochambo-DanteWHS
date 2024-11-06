
function main(){
    let uChoice = 0;
    let cChoice = 0;
    while (uChoice==cChoice) {
        uChoice = uTurn();
        cChoice = cTurn();
        if (uChoice==cChoice) alert("we both chose " + cChoice);
    }
    findWinner(uChoice, cChoice);
}

function uTurn(){
   let choice = prompt("enter r, p, or s");
   if (choice=="r" || choice=="p" || choice=="s") {
    return choice;
   }
   else {
    alert("must be r, p, or s");
    uTurn();
   }
}

function cTurn(){
    choice = Math.floor(Math.random()*2)
    switch(choice) {
        case 0 :
            choice = "r";
            break;
        case 1 :
            choice = "p";
            break;
        case 2 :
            choice = "s";
            break;
    }
    return choice;
}

function findWinner(uChoice, cChoice){
    let winner = 0
    switch (uChoice) {
        case "r" :
            if (cChoice=="p") winner = "Computer";
            else winner = "You";
            break;
        case "p" :
            if (cChoice=="s") winner = "Computer";
            else winner = "You";
            break;
        case "s" :
            if (cChoice=="r") winner = "Computer";
            else winner = "You";
            break;
    }
    alert(uChoice + " Vs. " + cChoice + ". " + winner + " won!");
}