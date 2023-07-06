let calculation = '';

function inputCalculation(number) {
  calculation += number;

  document.querySelector('.calculation')
    .innerHTML = calculation;
}

function showResult() {
  calculation = eval(calculation);

  document.querySelector('.result')
    .innerHTML = calculation;
}

function clearAllCalculation() {
  calculation = '',

  document.querySelector('.calculation')
    .innerHTML = '';

  document.querySelector('.result')
    .innerHTML = '';
}

function clearCurrentCalculation() {
  calculation = document.querySelector('.result').innerHTML;

  document.querySelector('.calculation').innerHTML = '';
}