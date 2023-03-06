let display = document.getElementById('display');
let button = Array.from(document.getElementsByTagName('button'));
let equal = 0;

button.map(button => {
    button.addEventListener('click', (e) => {
        console.log('clicked');
        console.log(e);
        console.log(e.target);
        console.log(e.target.innerText);
        if(equal == 1) {
            display.innerText = '';
            equal = 0;
        }
        switch(e.target.innerText) {
            case 'C':
                display.innerText = '';
                break;
            case '←':
                if(display.innerText) {
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case '×':
                display.innerText += '*';
                break;
            case '=':
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = 'Error';
                }
                equal = 1;
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});