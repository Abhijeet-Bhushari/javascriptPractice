let isBJ = false;
let isAlive = true;
let cardSum = 0;
let message = "";
let cardsArr = [];
let messageEl = document.querySelector("#message");
let cards = document.querySelector("#cards");
let sum = document.querySelector("#sum");
let startEl = document.querySelector("#start");
let newCardEl = document.querySelector("#new-card");
let restartEl = document.querySelector("#restart");
let buyChipsEl = document.querySelector("#buy-chips");

let player = {
  name: "Abhi",
  chips: 10,
}

let playerEl = document.querySelector("#player");

playerEl.textContent = player.name + ": $" + player.chips;
console.log(player.name);
console.log(player.chips);

function buyChips(){
  player.chips = 100;
  restart();
}

function setChips(x){
  player.chips = x;
  playerEl.textContent = player.name + ": $" + x;
}

restart();

function outOfChips(){
  messageEl.textContent = player.name + ", You are out of chips"
  cards.style.display = "none";
  sum.style.display = "none";
  startEl.style.display = "none";
  restartEl.style.display = "none";
  buyChipsEl.style.display = "block";
}

function restart(){
  if(player.chips == 0) outOfChips();
  else{
  setChips(player.chips);
  cards.style.display = "block";
  sum.style.display = "block";
  startEl.style.display = "block";
  buyChipsEl.style.display = "none";
  cards.textContent = "Cards: ";
  cardSum = 0;
  message = "";
  cardsArr = [];
  messageEl.textContent = "Want to play a new round?";
  sum.textContent = "Sum: ";
  isBJ = false;
  isAlive = true;
  restartEl.style.display = "none";
  startEl.style.display = "block";
  }
}

function setRandom(){
    let card = Math.floor(Math.random() * 100) % 13;  
    if (card === 0) card = 11;
    else if (card >= 10) card = 10;
    else card += 1;
    return card;
}

function displayCards(){
    let cardsText = "Cards: ";
    for(let i=0; i<cardsArr.length; i++){
        cardsText += " " + cardsArr[i];
    }
    cards.textContent = cardsText;
}

function startGame() {
  cardsArr.push(setRandom());
  cardsArr.push(setRandom());
  displayCards();
  cardSum += cardsArr[0] + cardsArr[1];
  sum.textContent = "Sum: " + cardSum;
  checkBlackjack();
}

function checkBlackjack() {
  if (cardSum === 21) {
    message = "you have blackjack";
    isBJ = true;
    setChips(player.chips*10);
    newCardEl.style.display = "none";
    startEl.style.display = "none";
    restartEl.style.display = "block";
  } 
  else if (cardSum > 21) {
    message = "you are out of the game";
    isAlive = false;
    setChips(player.chips - 10);
    newCardEl.style.display = "none";
    startEl.style.display = "none";
    restartEl.style.display = "block";
  } 
  else {
    message = "Do you want to draw a new card?";
    startEl.style.display = "none";
    newCardEl.style.display = "block";
  }
  messageEl.textContent = message;
  console.log(message);
}

function newCard(){
    cardsArr.push(setRandom());
    displayCards();
    cardSum += cardsArr[cardsArr.length - 1];
    sum.textContent = "Sum: " + cardSum;
    checkBlackjack();
}
