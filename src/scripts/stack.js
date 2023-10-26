let stack1 = [];
let N = 5;

function PushOur() {

    if(stack1.length < N) {
        let elementOfQueue = document.getElementById("pushValue").value;
        stack1.push(elementOfQueue);
        document.getElementById("displayStack").textContent = stack1.join(" | ");
    }
    else {
        alert("Stack is full");
    }
}

function PopOur() {

    if(stack1.length === 0) {
        alert("Stack doesnt have any element");
    }
    else {
        alert(stack1[0]);
        stack1.shift()
        document.getElementById("displayStack").textContent = stack1.join(" | ");
    }
}


function SizeOur() {
    alert("Size stack " + (stack1.split(', ').length - 1));
}

function ClearOur() {
    stack1 = "";
    document.getElementById("displayStack").textContent = stack1;
    alert("Cleared ");
}