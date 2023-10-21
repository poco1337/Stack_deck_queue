let queue = []
let queueLimit = 10;
function PushToQueue() {
    if(queue.length < queueLimit) {
        let elementOfQueue = document.getElementById("pushValueToQueue").value;
        queue.push(elementOfQueue);
        document.getElementById("displayQueue").textContent = queue.join(" | ");
    }
    else {
        alert("Queue is full");
    }
}
function PopQueue() {
    if(queue.length === 0) {
        alert("Queue doesnt have any element");
    }
    else {
        alert(queue[0]);
        queue.reverse();
        queue.pop();
        queue.reverse();
        document.getElementById("displayQueue").textContent = queue.join(" | ");
    }
}
function FrontQueue() {
    if(queue.length === 0) {
        alert("Queue doenst have any element");
    }
    else {
        alert(queue[0]);
    }
}
function SizeQueue() {
    alert(queue.length + " з " + queueLimit);
}
function ClearQueue() {
    if(queue.length === 0) {
        alert("Queue already doesnt have any element");
    }
    else {
        queue = [];
        document.getElementById("displayQueue").textContent = queue.join(" | ");
        alert("cleared");
    }
}