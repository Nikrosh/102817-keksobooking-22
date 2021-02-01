
//Получение случайного целого числа, частично взял с https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

const randomizeWholeNumber = (minNumber, maxNumber) => {
  if (minNumber < 0) {
    minNumber = 0;
  }
  if (maxNumber < minNumber) {
    maxNumber = minNumber;
  }
  minNumber = Math.ceil(minNumber);
  maxNumber = Math.floor(maxNumber);
  return Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
}

//Получение случайного числа с плавающей запятой

const randomizeNumber = (minNumber, maxNumber, numberAfter) => {
  if (minNumber < 0) {
    minNumber = 0;
  }
  if (maxNumber < minNumber) {
    maxNumber = minNumber;
  }
  return Number((Math.random() * (maxNumber - minNumber) + minNumber).toFixed(numberAfter));
}
