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

function uTurn() {
    let moves = ["r", "p", "s"];
    let choice = prompt("enter r, p, or s");
    if (moves.includes(choice)) return choice;
    else {
        alert("must be r, p, or s");
        return uTurn();
    }
}

function cTurn(){
    let moves = ["r", "p", "s"];
    let choice = Math.floor(Math.random()*2);
    return moves[choice];
}

function findWinner(uChoice, cChoice){
    let winArray = [["r", "p", "Computer"], ["p", "s", "Computer"], ["s", "r", "Computer"], ["r", "s", "You"], ["s", "p", "You"], ["p", "r", "You"]];
    for (let i = 0; i<winArray.length; i++){
        if (winArray[i][0]+winArray[i][1]==uChoice+cChoice) break;
    }
    alert(uChoice + " Vs. " + cChoice + ". " + winArray[i][2] + " won!");
}