{
  document.body.style.backgroundImage = 'url(./images/body_background.jpg)';
  document.body.style.backgroundSize = 'cover';
  document.body.style.margin = '0px';
  document.body.style.color = 'white';
  
  const fontStyle = document.createElement('style');
  document.head.append(fontStyle);
  fontStyle.innerHTML = `@import url('https://fonts.googleapis.com` +
    `/css2?family=Dancing+Script:wght@700&display=swap')`;
}

makeElement([
  ['id', 'fullScreen'],
  ['style', 'margin', 'auto'],
  ['style', 'width', '800px'],
]);

makeElement([
  ['id', 'intro'],
  ['style', 'width', '800px'],
  ['style', 'height', '600px'],
], 'fullScreen');

makeElement([
  ['id', 'introMoon'],
  ['src', './images/intro_moon.png'],
  ['alt', 'intro_moon'],
  ['style', 'zIndex', 'auto'],
  ['style', 'width', `800px`],
], 'intro', 'img');

makeElement([
  ['id', 'title'],
  ['style', 'margin', 'auto'],
  ['style', 'textAlign', 'center'],
  ['style', 'fontSize', '5em'],
  ['style', 'fontFamily', `'Dancing Script', cursive`],
  ['innerHTML', `KyungHoon's Coding Life`],
], 'intro', 'h1');

makeElement([
  ['id', 'profile'],
  ['style', 'margin', 'auto'],
  ['style', 'padding', '1em 4em'],
  ['style', 'height', '500px'],
], 'fullScreen');

makeElement([
  ['id', 'profilePhoto'],
  ['src', './images/1.jpg'],
  ['style', 'float', 'left'],
  ['style', 'marginRight', '50px'],
], 'profile', 'img');

makeElement([
  ['id', 'profileText'],
  ['style', 'float', 'left'],
], 'profile');

makeElement([
  ['id', 'profileTable'],
], 'profileText', 'table');

makeElement([
  ['id', 'profileName'],
  ['style', 'fontSize', '30px'],
  ['innerHTML', '정 경훈(鄭 慶熏)'],
], 'profileTable', 'caption');

makeElement([
  ['id', 'profileColgroup'],
], 'profileTable', 'colgroup');

makeElement([
  ['id', 'profileCol'],
  ['span', '1'],
  ['style', 'width', '150px'],
], 'profileColgroup', 'col');

makeElement([
  ['span', '1'],
], 'profileColgroup', 'col');

makeElement([
  ['id', 'profileNameEnglish'],
], 'profileTable', 'tr');

makeElement([
  ['innerHTML', 'English Name'],
], 'profileNameEnglish', 'th');

makeElement([
  ['innerHTML', 'Jeong Kyung Hoon'],
], 'profileNameEnglish', 'td');

makeElement([
  ['id', 'profileBirthday'],
], 'profileTable', 'tr');

makeElement([
  ['innerHTML', '생년월일'],
], 'profileBirthday', 'th');

makeElement([
  ['innerHTML', '1990년 2월 24일생'],
], 'profileBirthday', 'td');

makeElement([
  ['id', 'university'],
], 'profileTable', 'tr');

makeElement([
  ['innerHTML', '대학'],
], 'university', 'th');

makeElement([
  ['innerHTML', '대진대학교'],
], 'university', 'td');

makeElement([
  ['id', 'graduation'],
], 'profileTable', 'tr');

makeElement([
  ['innerHTML', '졸업'],
], 'graduation', 'th');

makeElement([
  ['innerHTML', '2017년 02월'],
], 'graduation', 'td');

function getPortfolioHeight() {
  if(innerHeight < 800)return '800px';
  return `${innerHeight}px`;
}
makeElement([
  ['id', 'portfolioScreen'],
  ['style', 'height', getPortfolioHeight()],
  ['style', 'border', '1px solid white'],
], 'fullScreen');

const portfolioWidth = Number.parseInt(document.getElementById('fullScreen').style.width) / 5 * 2;
for (let i = 0; i < 4; ++i) {
  let isMargin;

  if (i % 2) isMargin = 'marginLeft'
  else isMargin = 'marginRight'

  makeElement([
    ['className', 'portfolio'],
    ['style', 'margin', '10px'],
    ['style', isMargin, `${portfolioWidth / 2 - 92}px`],
    ['style', 'float', 'left'],
    ['style', 'height', `${portfolioWidth - 2}px`],
    ['style', 'width', `${portfolioWidth - 2}px`],
    ['style', 'borderRadius', `${portfolioWidth / 2}px`],
    ['style', 'border', '1px solid white'],
  ], 'portfolioScreen', 'a');
}

document.getElementsByClassName('portfolio')[0].href = './html/login.html';
document.getElementsByClassName('portfolio')[0].style.backgroundImage = 'url(./images/portfolio_login.jpg)';
document.getElementsByClassName('portfolio')[0].style.backgroundSize = 'cover';

document.getElementsByClassName('portfolio')[1].href = './html/youtube.html';
document.getElementsByClassName('portfolio')[1].style.backgroundImage = 'url(./images/portfolio_login.jpg)';
document.getElementsByClassName('portfolio')[1].style.backgroundSize = 'cover';

for (let i = 0; i < 2; ++i) {
  let isMargin;

  if (i % 2) isMargin = 'marginLeft'
  else isMargin = 'marginRight'

  makeElement([
    ['class', 'portfolio'],
    ['style', 'margin', '10px'],
    ['style', isMargin, `${portfolioWidth / 2 - 92}px`],
    ['style', 'float', 'left'],
    ['style', 'height', `${(portfolioWidth - 2) / 4}px`],
    ['style', 'width', `${portfolioWidth - 2}px`],
    ['style', 'borderRadius', `${portfolioWidth / 2}px`],
    ['style', 'border', '1px solid white'],
  ], 'portfolioScreen');
}

makeElement([
  ['id', 'addressAndPhonenumber'],
  ['style', 'height', `${innerHeight - 200}px`],
  ['style', 'paddingTop', '200px'],
], 'fullScreen');

makeElement([
  ['id', 'address'],
  ['innerHTML', 'rudekrudek@naver.com'],
  ['style', 'textAlign', 'center'],
  ['style', 'fontSize', '3em'],
], 'addressAndPhonenumber', 'h1');

makeElement([
  ['id', 'phonenumber'],
  ['innerHTML', '010-3283-6388'],
  ['style', 'textAlign', 'center'],
  ['style', 'fontSize', '3em'],
], 'addressAndPhonenumber', 'h1');


