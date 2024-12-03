const clearButton = document.getElementById('clear');
const container = document.getElementById('numHolder');
const read = document.getElementById('read');

let memory = ['','',undefined];

clearButton.addEventListener('click', () => clear())
container.addEventListener('click', (event) => {
    if(event.target.matches('.row')) return;
    let type = getType(event.target.innerText)[0];
    let value = getType(event.target.innerText)[1];

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
        // clear();
    }
    console.log(memory)
});
function getType(val) {
    let numbers = ['0','1','2','3','4','5','6','7','8','9'];
    let operators = ['/','*','-','+'];

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
function calculate(mem) {
    let num1 = Number(mem[0]);
    let num2 = Number(mem[1]);
    let operator = mem[2];
    console.log('YESSISSSRRR',num1,num2,operator)

    if(operator === '+') {
        return num1 + num2;
    } else if(operator === '-') {
        return num1 - num2;
    } else if(operator === '*') {
        return num1 * num2;
    } else if(operator === '/') {
        if(num2 === 0) {
            return 'ERROR';
        } else if(num1 === 0 && num1 !== 0) {
            return 0;
        }
        return num1 / num2;
    }
};
function clear() {
    memory = ['','',undefined];
    read.innerText = '0';
    console.log(memory);
};