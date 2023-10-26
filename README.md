<details>
<summary>Перевірка роботи програми</summary>
  <details>
    <summary>Стек</summary>
Push
  
  ![image](https://github.com/therotherithethethe/Stack_deck_queue/assets/98651796/63282e18-ff96-4878-9f5d-0b78c1826bba)
  ![image](https://github.com/therotherithethethe/Stack_deck_queue/assets/98651796/ee992fe3-c317-4cc4-b97b-0b326774ed41)
У коді вказана кількість елементів у стеці
![image](https://github.com/therotherithethethe/Stack_deck_queue/assets/98651796/904a77f2-7fa5-4599-b010-1fe14c1fc5ab)
![image](https://github.com/therotherithethethe/Stack_deck_queue/assets/98651796/84cf3535-854a-44dd-86e4-ae8f3077b497)
Додати новий елемент у стек неможливо
____
![image](https://github.com/therotherithethethe/Stack_deck_queue/assets/98651796/e783ac83-564a-4fae-8bc3-53a698c180fc)
Фукнція поп + вивід елемента якого запопило
____
![image](https://github.com/therotherithethethe/Stack_deck_queue/assets/98651796/4b8ef71f-1461-4814-acfa-fedc6524f1ba)
Функція back, яка виводить останній елемент
____
![image](https://github.com/therotherithethethe/Stack_deck_queue/assets/98651796/b5e88fe9-f5e1-42a2-a7c0-54e302e6cdf4)
Функція Size, яка виводить кількість елементів у стеці та максимальну можливу кількість елементів
____
![image](https://github.com/therotherithethethe/Stack_deck_queue/assets/98651796/c67ed728-72f0-4908-bd9d-ffdc9635d54e)
Фукнція clear, яка після натискання сповіщає користувача, що стек очищено. Після натискання Ок, стек очишується
![image](https://github.com/therotherithethethe/Stack_deck_queue/assets/98651796/9b126cb3-b468-4979-8285-3b0066a95226)
  </details>

  <details>
    <summary>Дека</summary>

https://github.com/therotherithethethe/Stack_deck_queue/assets/98651796/4db313ba-35b6-464f-95e3-0f6925f2a17c

 </details>


<details>
    <summary>Черга</summary>


https://github.com/therotherithethethe/Stack_deck_queue/assets/98651796/fdf174c3-51b1-4392-8116-dcbdc4aebbd7

</details>
</details>

 # Код
 <details>
<summary>Стек</summary>
   
```javascript
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
        alert(stack1[stack1.length -1]);
        stack1.pop()
        document.getElementById("displayStack").textContent = stack1.join(" | ");
    }
}


function SizeOur() {
    alert(stack1.length + " з " + N);
}

function ClearOur() {
    stack1 = "";
    document.getElementById("displayStack").textContent = stack1;
    alert("Cleared ");
}
function BackOurStack() {
    if(stack1.length === 0){
        alert("Stack is already empty");
    }
    else {
        alert(stack1[stack1.length - 1]);
    }
}
```

</details>
<details>
<summary>Дека</summary>

```javascript
let deque = [];
let dequeLimit = 10;
function PushBackOur() {
  if (deque.length < dequeLimit) {
    let elementOfDeque = document.getElementById("pushValueToDeque").value;
    deque.push(elementOfDeque);
    console.log(deque.join(" | "));
    document.getElementById("displayDeque").textContent = deque.join(" | ");
  } else {
    alert("DequeLimit");
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
    alert("Deque is already empty");
  }
  else {
    alert(deque[0]);
  }
}
function BackOur() {
  if(deque.length === 0){
    alert("Deque is already empty");
  }
  else {
    alert(deque[deque.length - 1]);
  }
}
function SizeOurDeque() {
  alert(deque.length + " з " + dequeLimit);
}

```

</details>

<details>
<summary>Черга</summary>

```javascript
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
```

</details>
