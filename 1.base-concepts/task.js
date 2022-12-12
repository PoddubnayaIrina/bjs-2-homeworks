"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let firstRoot;
  let secondRoot;
  let d = Math.pow(b, 2) - 4 * a * c;

  if (d < 0) {
    console.log('Корней нет')
  }
  else if (d === 0) {
    firstRoot = -b / (2 * a);
    arr[0] = firstRoot;
    console.log(arr);
  }
  else {
    firstRoot = (-b + Math.sqrt(d)) / (2 * a);
    secondRoot = (-b - Math.sqrt(d)) / (2 * a);
    arr[0] = firstRoot;
    arr.push(secondRoot);
    console.log('Первый корень = ' + arr[0] + ';' + ' Второй корень = ' + arr[1])
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let bodyCredit;
  let monthPayment;
  let totalAmount;

  if (
    isNaN(percent) ||
    isNaN(contribution) ||
    isNaN(amount) ||
    isNaN(countMonth)
  ) {
    console.log('Введите, пожалуйста, данные в числовом виде')
  } return false;

  percent = (percent / 100) / 12;
  bodyCredit = amount - contribution;
  monthPayment = bodyCredit * (percent + (percent / ((Math.pow((1 + percent), countMonths)) - 1)));
  totalAmount = parseFloat ((monthPayment * countMonths).toFixed(2));

  return totalAmount;
}