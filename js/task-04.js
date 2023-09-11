const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueSpan = document.querySelector('#value');



function updateValue() {
    valueSpan.textContent = counterValue;
}

let counterValue = 0;

incrementBtn.addEventListener('click', counterUp);

function counterUp() {
    counterValue += 1;
    return updateValue();
}

decrementBtn.addEventListener('click', counterDown);

function counterDown() {
    counterValue -= 1;
    return updateValue();
}



