function main(){
    let rounds = setRound();
    for (let round=1;round<=rounds;round++) {
        alert("Round "+round);
        rpsRound();
    }
}

function setRound(){
    let set = prompt("How many rounds?")
    parseInt(set);
    return set;
}

function rpsRound(){
        let uChoice = 0;
        let cChoice = 0;
        while (uChoice==cChoice) {
            uChoice = uTurn();
            cChoice = cTurn();
            if (uChoice==cChoice) alert("we both chose " + cChoice);
        }
        let winner = findWinner(uChoice, cChoice);
        let players = ["You", "Computer"];
        let win = players.indexOf(winner)
        return win;
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
    for (var i = 0; i<winArray.length; i++){
        if (winArray[i][0]+winArray[i][1]==uChoice+cChoice) break;
    }
    alert(uChoice + " Vs. " + cChoice + ". " + winArray[i][2] + " won!");
    return winArray[i][2];
}