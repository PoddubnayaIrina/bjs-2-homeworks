function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let avg;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i];
  }
  avg = sum / (arr.length);
  avg = avg.toFixed(2);
  avg = Number(avg);
  console.log('min: ' + min + ' max: ' + max + ' avg: ' + avg);
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let result = arr.reduce(function(sum, elem) {
    return sum + elem;
    }, 0 );
  return result;
  }

function differenceMaxMinWorker(...arr) {
  if (arr.length > 0) {
    let max = Math.max.apply(null, arr);
    let min = Math.min.apply(null, arr);
    return max - min;
  } else return 0;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  let difference
  
  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
        sumEvenElement = sumEvenElement + arr[i];
      } else {
        sumOddElement = sumOddElement + arr[i];
      }
      difference = sumEvenElement - sumOddElement;
    } 
    return difference; 
  } else return 0;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  let a;

  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
        sumEvenElement = sumEvenElement + arr[i];
        countEvenElement = countEvenElement + 1;
      }
    }
    return sumEvenElement / countEvenElement;
  } else return 0;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (i = 0; i < arrOfArr.length; i++) {
    const funcResult = func(...arrOfArr[i]);
    if (funcResult > maxWorkerResult) {
      maxWorkerResult = funcResult;
    }
  }
  return maxWorkerResult;
}