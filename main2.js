document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');
            handleButtonClick(value);
        });
    });

    function handleButtonClick(value) {
        if (value === 'C') {
            clearDisplay();
        } else if (value === 'DEL') {
            deleteLast();
        } else if (value === '=') {
            calculateResult();
        } else if (value === '^2') {
            appendToDisplay('**2');
        } else if (value === '√') {
            appendToDisplay('**0.5');
        } else {
            appendToDisplay(value);
        }
    }

    function appendToDisplay(value) {
        display.value += value;
    }

    function clearDisplay() {
        display.value = '';
    }

    function deleteLast() {
        display.value = display.value.slice(0, -1);
    }

    function calculateResult() {
        try {
            display.value = eval(display.value);
        } catch (e) {
            display.value = 'Error';
        }
    }
});
