
//Получение случайного целого числа, частично взял с https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

const generateWholeNumber = (minNumber, maxNumber) => {
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

generateWholeNumber();

//Получение случайного числа с плавающей запятой

const generateNumber = (minNumber, maxNumber, numberAfter) => {
  if (minNumber < 0) {
    minNumber = 0;
  }
  if (maxNumber < minNumber) {
    maxNumber = minNumber;
  }
  return Number((Math.random() * (maxNumber - minNumber) + minNumber).toFixed(numberAfter));
}

generateNumber();

//Список слов для генерации названия и описания

const words = ['огромный', 'желтый', 'особняк', 'комнаты', 'кирпичный', 'для', 'с', 'около', 'маленький', 'белый', 'палаты', 'дворец', 'квартира', 'ремонт', 'европейский', 'уют', 'качество', 'доступная', 'славяне', 'только', 'если', 'регистрация', 'бабушкин', 'хороший'];

//Функция для получения случайной строки

const generateText = (sumWords) => {
  let randomText = '';
  let i = 0;
  while (i < sumWords) {
    randomText += words[generateWholeNumber(0, words.length - 1)]
    if (i !== sumWords - 1) {
      randomText += ' ';
    }
    i += 1;
  }
  return randomText
}

//Типы объекта

const typesObject = ['palace', 'flat', 'house', 'bungalow'];

//Время заезда и выезда

const times = ['12:00', '13:00', '14:00'];

//Дополнительный опции

const featuresObject = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

//Фото

const photosOdject = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg']

//Функция для генерации случайного массива строк

const generateStrings = (array) =>  {
  return array.slice(0, generateWholeNumber(1, array.length -1))
}

//Объект

const createObject = () => {
  return {
    author: {
      avatar: 'img/avatars/user' + '0' + generateWholeNumber(1, 8) + '.png',
    },
    offer: {
      title: generateText(generateWholeNumber(1, 4)),
      address: 'location.x, location.y',
      price: generateWholeNumber(1000, 100000),
      type: typesObject[generateWholeNumber(0, 3)],
      rooms: generateWholeNumber(1, 5),
      guests: generateWholeNumber(1, 5),
      checkin: times[generateWholeNumber(0, 2)],
      checkout: times[generateWholeNumber(0, 2)],
      features: generateStrings(featuresObject),
      description: generateText(generateWholeNumber(6, 15)),
      photos: generateStrings(photosOdject),
    },
    location: {
      x: generateNumber(35.65000, 35.70000, 5),
      y: generateNumber(139.70000, 139.80000, 5),
    },
  }
};

const similarObjectCount = 10;

const similarObjects = new Array(similarObjectCount).fill(null).map(() => createObject());

