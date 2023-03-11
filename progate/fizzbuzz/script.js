let button = document.getElementById('button');
let parent = document.getElementsByClassName('display')[0];

button.addEventListener('click', (e) => {
    e.preventDefault();

    let number = document.getElementById('masukan').value;
    let child = document.createElement("p");
    console.log(number);
    console.log(button);
    console.log(parent);
    if (number > 0) {
        if (number%3 == 0 && number%5 == 0) {
            child.innerText = "FizzBuzz!";
            parent.appendChild(child);
        } else if (number%5 == 0) {
            child.innerText = "Buzz!";
            parent.appendChild(child);
        } else if (number%3 == 0) {
            child.innerText = "Fizz!";
            parent.appendChild(child);
        } else {
            child.innerText = number;
            parent.appendChild(child);
        }
    } else {
        child.innerText = "Not a valid number";
        parent.appendChild(child);
    }
})