let deck = [];
let deckLimit = 10;
function PushBackOur() {
  if (deck.length < deckLimit) {
    let elementOfDeck = document.getElementById("pushValueToDeck").value;
    deck.push(elementOfDeck);
    console.log(deck.join(" | "));
    document.getElementById("displayDeck").textContent = deck.join(" | ");
  } else {
    alert("DeckLimit");
  }
}

function PushFrontOur() {
  if (deck.length < deckLimit) {
    let tmpDeck = [];
    let elementOfDeck = document.getElementById("pushValueToDeck").value;
    tmpDeck.push(elementOfDeck);
    console.log("елементи масиву тмпдек: " + tmpDeck.join("|"));
    for (let i = 0; i < deck.length; i++) {
      tmpDeck[i+1] = deck[i];
    }
    console.log("елементи масиву тмпдек1: " + tmpDeck.join("|"));
    deck = tmpDeck;
    document.getElementById("displayDeck").textContent = deck.join(" | ");
  }
  else {
    alert("DeckLimit");
  }
}
function ClearOurDeck() {
  if(deck.length === 0){
    alert("Deck is already empty");
  }
  else {
    deck = [];
    document.getElementById("displayDeck").textContent = deck.join(" | ");
    alert("Cleared ");
  }
}

function PopFrontOur() {
  if(deck.length === 0){
    alert("Deck is already empty");
  }
  else {
    alert(deck[0]);
    deck.reverse();
    deck.pop();
    deck.reverse();
    document.getElementById("displayDeck").textContent = deck.join(" | ");
  }
}
function PopBackOur() {
  if(deck.length === 0){
    alert("Deck is already empty");
  }
  else {
    alert(deck[deck.length - 1]);
    deck.pop();
    document.getElementById("displayDeck").textContent = deck.join(" | ");
  }
}
function FrontOur() {
  if(deck.length === 0){
    alert("Deck is already empty");
  }
  else {
    alert(deck[0]);
  }
}
function BackOur() {
  if(deck.length === 0){
    alert("Deck is already empty");
  }
  else {
    alert(deck[deck.length - 1]);
  }
}
function SizeOurDeck() {
  alert(deck.length + " з " + deckLimit);
}
