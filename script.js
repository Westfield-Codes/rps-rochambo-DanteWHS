function main() {
    let score = [0, 0];
    let winner = 3;
    let rounds = setRound();
    for (let round = 1; round <= rounds; round++, score[winner]++) {
       alert("Round " + round);
       winner = rpsRound();
    }
    alert("you have " + score[0] + " and computer has " + score[1]);
    if (score[0] > score[1]) alert("You win!");
    else alert("Computer wins!");
    again = confirm("Play again?");
    if (again == true) main();
 }
 
 function setRound() {
    let set = prompt("How many rounds?");
    if (set % 2 == 0 || isNaN(set) == true) {
       alert("Must be an odd number");
       return setRound();
    } else return set;
 }
 
 function rpsRound() {
    let uChoice = 0;
    let cChoice = 0;
    while (uChoice == cChoice) {
       uChoice = uTurn();
       cChoice = cTurn();
       if (uChoice == cChoice) alert("we both chose " + cChoice);
    }
    let winner = findWinner(uChoice, cChoice);
    let players = ["You", "Computer"];
    let win = players.indexOf(winner);
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
 
 function cTurn() {
    let moves = ["r", "p", "s"];
    let choice = Math.floor(Math.random() * 3);
    return moves[choice];
 }
 
 function findWinner(uChoice, cChoice) {
    let winArray = [
       ["r", "p", "Computer"],
       ["p", "s", "Computer"],
       ["s", "r", "Computer"],
       ["r", "s", "You"],
       ["s", "p", "You"],
       ["p", "r", "You"]
    ];
    for (var i = 0; i < winArray.length; i++) {
       if (winArray[i][0] + winArray[i][1] == uChoice + cChoice) break;
    }
    alert(uChoice + " Vs. " + cChoice + ". " + winArray[i][2] + " won!");
    return winArray[i][2];
 }