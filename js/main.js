const PICTURE_COUNT = 25;
const AVATAR_COUNT = 6;
const LIKE_MIN_COUNT = 15;
const LIKE_MAX_COUNT = 200;
const COMMENT_COUNT = 30;
const COMMENT_LINES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTION = [
  'Описание 1.',
  'Описание 2.',
  'Описание 3.',
  'Описание 4.',
  'Описание 5.',
  'Описание 6.',
  'Описание 7.',
  'Описание 8.',
  'Описание 9.',
  'Описание 10.'
];

const NAMES = [
  'Николай',
  'Олег',
  'Таня',
  'Катерина',
  'Сергей',
  'Карина'
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};


const getRandomArrayElement = (items) => items[getRandomInteger(0, items.length - 1)];

const createIdGenerator = () => {
  let lastGeneratedId = 0;

  return() => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

const generayeCommentId = createIdGenerator();

const createMessage = () => Array.from(
  {length: getRandomInteger(1,2)},
  () => getRandomArrayElement(COMMENT_LINES),
).join(' ');

const createComment = () => ({
  id: generayeCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});

const createPicture = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
  comments: Array.from({
    length: getRandomInteger(0, COMMENT_COUNT)},
  createComment,
  ),
});

const getPicture = () => Array.from(
  {length: PICTURE_COUNT},
  (_, puctureIndex) => createPicture(puctureIndex + 1),
);

getPicture();
