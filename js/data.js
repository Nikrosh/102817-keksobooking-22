import {generateWholeNumber, generateNumber} from './util.js';

//Массив для названия

const TITLES = ['1 комнатная квартира', '2х комнатная квартира', 'Квартира студия', 'Частный дом', 'Пентхаус'];

//Массив для описания

const DISCRIPTIONS = ['Уютная квартира с современным ремонтом', 'Жилье не далеко от метро', 'Жилье с современным ремонтом', 'Сдам квартиру, срочно, только славяне'];

//Типы объекта

const TYPES_OBJECT = ['palace', 'flat', 'house', 'bungalow'];

//Время заезда и выезда

const TIMES = ['12:00', '13:00', '14:00'];

//Дополнительный опции

const FEATURES_OBJECT = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

//Фото

const PHOTOS_OBJECT = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg']

//Функция для генерации случайного массива строк

const generateStrings = (array) =>  {
  return array.slice(0, generateWholeNumber(1, array.length -1))
}

//Объект

const createObject = () => {
  let locationX = generateNumber(35.65000, 35.70000, 5);
  let locationY = generateNumber(139.70000, 139.80000, 5);
  return {
    author: {
      avatar: 'img/avatars/user' + '0' + generateWholeNumber(1, 8) + '.png',
    },
    offer: {
      title: TITLES[generateWholeNumber(0, 4)],
      address: locationX + ', ' + locationY,
      price: generateWholeNumber(1000, 100000),
      type: TYPES_OBJECT[generateWholeNumber(0, 3)],
      rooms: generateWholeNumber(1, 5),
      guests: generateWholeNumber(1, 5),
      checkin: TIMES[generateWholeNumber(0, 2)],
      checkout: TIMES[generateWholeNumber(0, 2)],
      features: generateStrings(FEATURES_OBJECT),
      description: DISCRIPTIONS[generateWholeNumber(0, 3)],
      photos: generateStrings(PHOTOS_OBJECT),
    },
    location: {
      x: generateNumber(35.65000, 35.70000, 5),
      y: generateNumber(139.70000, 139.80000, 5),
    },
  }
};

const SIMILAR_OBJECT_COUNT = 10;

const similarObjects = new Array(SIMILAR_OBJECT_COUNT).fill(null).map(createObject);

console.log(similarObjects);