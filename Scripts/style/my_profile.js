makeElement([
  ['id', 'fullScreen'],
  ['style', 'margin', 'auto'],
  ['style', 'width', '800px'],
  ['style', 'border', '1px solid black'],
]);

//이미지 고른 후 수정
makeElement([
  ['id', 'intro'],
  ['style', 'width', '800px'],
  ['style', 'height', '600px'],
  ['style', 'border', '1px solid black'],
], 'fullScreen');

makeElement([
  ['id', 'profile'],
  ['style', 'margin', 'auto'],
  ['style', 'padding', '1em 4em'],
  ['style', 'height', '300px'],
  ['style', 'border', '1px solid black'],
], 'fullScreen');

makeElement([
  ['id', 'profilePhoto'],
  ['src', '../images/1.jpg'],
  ['style', 'float', 'left'],
  ['style', 'marginRight', '50px'],
  ['style', 'border', '1px solid black'],
], 'profile', 'img');

makeElement([
  ['id', 'profileText'],
  ['style', 'float', 'left'],
  ['style', 'border', '1px solid black'],
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
  ['style', 'width', '150'],
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


makeElement([
  ['id', 'portfolioScreen'],
  ['style', 'border', '1px solid black'],
  ['style', 'height', `${innerHeight}px`],
], 'fullScreen');



makeElement([
  ['id', 'addressAndPhonenumber'],
  ['style', 'height', `${innerHeight}px`],
  ['style', 'border', '1px solid black'],
], 'fullScreen');

makeElement([
  ['id', 'address'],
  ['innerHTML', 'rudekrudek@naver.com'],
  ['style', 'textAlign', 'center'],
  ['style', 'fontSize', '3em'],
  ['style', 'border', '1px solid black'],
], 'addressAndPhonenumber', 'h1');

makeElement([
  ['id', 'phonenumber'],
  ['innerHTML', '010-3283-6388'],
  ['style', 'textAlign', 'center'],
  ['style', 'fontSize', '3em'],
  ['style', 'border', '1px solid black'],
], 'addressAndPhonenumber', 'h1');


