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
  }, 0);
    
  console.log(result);
  }

function differenceMaxMinWorker(...arr) {
  let max = Math.max.apply(null, arr);
  let min = Math.min.apply(null, arr);
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  let difference

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenElement = sumEvenElement + arr[i];
    }

    if (arr[i] % 2 != 0) {
      sumOddElement = sumOddElement + arr[i];
    }

    difference = sumEvenElement - sumOddElement;
  }

  return difference;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  let a;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenElement = sumEvenElement + arr[i];
      countEvenElement = countEvenElement + 1;
    }
  }
  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = arrOfArr[0];
  for (i = 1; i < arrOfArr.length; i++) {
    const funcResult = func(...arrOfArr);
    if (funcResult > maxWorkerResult) {
      maxWorkerResult = funcResult;
    }
  }
  return maxWorkerResult;
}
