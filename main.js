// HTML elements 
const clearButton = document.getElementById('clear');
const container = document.getElementById('numHolder');
const read = document.getElementById('read');

let memory = ['','',undefined]; // Declares a storable memory to keep track of the numbers inputted.

clearButton.addEventListener('click', () => clear()); // Calls the clear function on button press
container.addEventListener('click', (event) => { // Grabs all button presses in their parent div
    if(event.target.matches('.row')) return; // Prevents the parent divs of the buttons from being accessed
    // Declares if the input is a number or an operator and then sets a value
    let type = getType(event.target.innerText)[0];
    let value = getType(event.target.innerText)[1];

    // Places the input in its designated slot in memory
    if(type === 'number' && !memory[2]) {
        memory[0] += value;
        read.innerText = memory[0];
    } else if(type === 'decimal' && !memory[2]) {
        memory[0] += value;
        read.innerText = memory[0];
    } else if(type === 'operator') {
        memory[2] = value;
        read.innerText = 0;
    } else if(type === 'number' && memory[2]) {
        memory[1] += value;
        read.innerText = memory[1];
    } else if(type === 'decimal' && memory[2]) {
        memory[1] += value;
        read.innerText = memory[1];
    } else if(type === 'equals') { 
        let ans = calculate(memory);
        console.log(`ans = ${ans}`);
        memory[0] = calculate(memory);
        read.innerText = memory[0];
    }
});
// Returns if it is a number or an operator and the value
function getType(val) {
    let numbers = ['0','1','2','3','4','5','6','7','8','9']; // Declares numbers for the number buttons
    let operators = ['/','*','-','+']; // Declared the operators for the operator buttons

    if(numbers.includes(val)) {
        return ['number', val];
    } else if(operators.includes(val)) {
        return ['operator', val];
    } else if(val === '=') {
        return ['equals', val];
    } else if(val === '.') {
        return ['decimal', val];
    }
};
// Takes the memory and calculates a number using it depending on the operator
function calculate(mem) {
    let num1 = Number(mem[0]);
    let num2 = Number(mem[1]);
    let operator = mem[2];

    if(operator === '+') {
        return num1 + num2;
    } else if(operator === '-') {
        return num1 - num2;
    } else if(operator === '*') {
        return num1 * num2;
    } else if(operator === '/') {
        // Checks if the demoninator is 0 and returns ERROR, If that test is passed then if the numerator is 0 then return 0
        if(num2 === 0) {
            return 'ERROR';
        } else if(num1 === 0 && num1 !== 0) {
            return 0;
        }
        return num1 / num2;
    }
};
// Clears the memory
function clear() {
    memory = ['','',undefined];
    read.innerText = '0';
};