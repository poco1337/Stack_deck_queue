let deque = [];
let dequeLimit = 10;
function PushBackOur() {
  if (deque.length < dequeLimit) {
    let elementOfDeque = document.getElementById("pushValueToDeque").value;
    deque.push(elementOfDeque);
    console.log(deque.join(" | "));
    document.getElementById("displayDeck").textContent = deque.join(" | ");
  } else {
    alert("DeckLimit");
  }
}

function PushFrontOur() {
  if (deque.length < dequeLimit) {
    let tmpDeque = [];
    let elementOfDeque = document.getElementById("pushValueToDeque").value;
    tmpDeque.push(elementOfDeque);
    console.log("елементи масиву тмпдек: " + tmpDeque.join("|"));
    for (let i = 0; i < deque.length; i++) {
      tmpDeque[i+1] = deque[i];
    }
    console.log("елементи масиву тмпдек1: " + tmpDeque.join("|"));
    deque = tmpDeque;
    document.getElementById("displayDeque").textContent = deque.join(" | ");
  }
  else {
    alert("DequeLimit");
  }
}
function ClearOurDeque() {
  if(deque.length === 0){
    alert("Deque is already empty");
  }
  else {
    deque = [];
    document.getElementById("displayDeque").textContent = deque.join(" | ");
    alert("Cleared ");
  }
}

function PopFrontOur() {
  if(deque.length === 0){
    alert("Deque is already empty");
  }
  else {
    alert(deque[0]);
    deque.reverse();
    deque.pop();
    deque.reverse();
    document.getElementById("displayDeque").textContent = deque.join(" | ");
  }
}
function PopBackOur() {
  if(deque.length === 0){
    alert("Deque is already empty");
  }
  else {
    alert(deque[deque.length - 1]);
    deque.pop();
    document.getElementById("displayDeque").textContent = deque.join(" | ");
  }
}
function FrontOur() {
  if(deque.length === 0){
    alert("Deck is already empty");
  }
  else {
    alert(deque[0]);
  }
}
function BackOur() {
  if(deque.length === 0){
    alert("Deck is already empty");
  }
  else {
    alert(deque[deque.length - 1]);
  }
}
function SizeOurDeck() {
  alert(deque.length + " з " + dequeLimit);
}
