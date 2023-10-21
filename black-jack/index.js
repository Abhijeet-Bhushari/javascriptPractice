let firstCard = 4;
let secondCard = 5;
function addCard(player, card){
    player += card;
}

let sum = firstCard + secondCard;
console.log(sum);

let player1 = 0, player2 = 0;

addCard(player1, 3);
addCard(player2, 10);
addCard(player1, 10);
addCard(player2, 12);

console.log(player1 + " " + player2);

if(player1 > 21) console.log("Player1 lost");
else if(player2 > 21) console.log("Player2 lost");
else if(player1 < player2) console.log("Player2 won");
else if(player1 > player2) console.log("Player1 won");
else console.log("oh! That's a tie"); 



