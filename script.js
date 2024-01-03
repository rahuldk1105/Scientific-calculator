document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const calculatorButtons = document.getElementById('calculatorButtons');
    const darkModeButton = document.createElement('button');
    darkModeButton.textContent = 'Toggle Dark Mode';
    darkModeButton.addEventListener('click', toggleDarkMode);
    calculatorButtons.appendChild(darkModeButton);

    const buttons = [
        '7', '8', '9', '/',
        '4', '5', '6', '*',
        '1', '2', '3', '-',
        '0', '.', '=', '+',
        'C', 'sin', 'cos', 'tan',
        '(', ')', 'sqrt', '^',
    ];

    buttons.forEach(buttonValue => {
        const button = document.createElement('button');
        button.textContent = buttonValue;
        button.addEventListener('click', () => handleButtonClick(buttonValue));
        calculatorButtons.appendChild(button);
    });

    let darkMode = false;

    function toggleDarkMode() {
        darkMode = !darkMode;
        document.body.classList.toggle('dark-mode', darkMode);
    }

    function handleButtonClick(value) {
        if (value === '=') {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        } else if (value === 'C') {
            display.value = '';
        } else {
            display.value += value;
        }
    }
});
