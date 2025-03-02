let resultField = document.getElementById('result');
let historyList = document.getElementById('history-list');
let history = [];

function appendValue(value) {
    resultField.value += value;
}

function calculateResult() {
    try {
        let result = eval(resultField.value);
        addHistory(resultField.value, result);
        resultField.value = result;
    } catch (error) {
        resultField.value = 'Error';
    }
}

function clearResult() {
    resultField.value = '';
    history = [];
    updateHistory();
}

function addHistory(expression, result) {
    if (history.length >= 5) {
        history.pop();
    }
    history.unshift(`${expression} = ${result}`);
    updateHistory();
}

function updateHistory() {
    historyList.innerHTML = '';
    history.forEach(entry => {
        let listItem = document.createElement('li');
        listItem.textContent = entry;
        historyList.appendChild(listItem);
    });
}
