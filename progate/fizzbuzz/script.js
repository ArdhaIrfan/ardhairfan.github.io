let button = document.getElementById('button');
let parent = document.getElementsByClassName('display')[0];
let word = document.getElementById('word');

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
            child.classList.add('violet');
            parent.appendChild(child);
            word.innerText = 'FizzBuzz!';
            word.style.color = 'rgb(162, 93, 225)';
        } else if (number%5 == 0) {
            child.innerText = "Buzz!";
            child.classList.add('blue');
            parent.appendChild(child);
            word.innerText = 'Buzz!';
            word.style.color = 'rgb(44, 163, 214)';
        } else if (number%3 == 0) {
            child.innerText = "Fizz!";
            child.classList.add('red');
            parent.appendChild(child);
            word.innerText = 'Fizz!';
            word.style.color = 'rgb(231, 67, 67)';
        } else {
            child.innerText = number;
            parent.appendChild(child);
            word.innerText = number;
            word.style.color = 'white';
        }
    } else {
        child.innerText = "Not a valid number";
        parent.appendChild(child);
    }
})