const clearButton = document.getElementById('clear');
const container = document.getElementById('numHolder');

let memory = ['','',undefined];

container.addEventListener('click', (event) => {
    if(event.target.matches('.row')) return;
    let type = getType(event.target.innerText)[0];
    let value = getType(event.target.innerText)[1];

    if(type === 'number' && !memory[2]) {
        memory[0] += value;
    } else if(type === 'decimal' && !memory[2]) {
        memory[0] += value;
    } else if(type === 'operator') {
        memory[2] = value;
    } else if(type === 'number' && memory[2]) {
        memory[1] += value;
    } else if(type === 'decimal' && memory[2]) {
        memory[1] += value;
    } else if(type === 'equals') {
        calculate(memory);
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
function calculate(memory) {
    let num1 = Number(memory[0]);
    let num2 = Number(memory[1]);
    let operator = memory[2];
    console.log(num1,num2,operator);
}

clearButton.addEventListener('click', () => {
    memory = ['','',undefined];
    console.log(memory);
});
