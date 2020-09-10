{
  const fontStyle = document.createElement('style');
  document.head.append(fontStyle);
  fontStyle.innerHTML = `@import url('https://fonts.googleapis.com` + 
    `/css2?family=Lobster&display=swap')`;
}

makeElement([
  ['id', 'fullScreeen'],
  ['style', 'margin', 'auto'],
  ['style', 'width', '800px'],
]);

makeElement([
  ['id', 'topLanguage'],
  ['style', 'width', '800px'],
  ['style', 'height', '50px'],
], 'fullScreeen');

makeElement([
  ['id', 'selectLanguage'],
  ['style', 'float', 'right'],
  ['style', 'margin', '10px 20px'],
  ['style', 'width', '100px'],
  ['style', 'height', '30px'],
  ['style', 'border', '1px solid black'],
], 'topLanguage');

makeElement([
  ['id', 'midLogin'],
  ['style', 'margin', 'auto'],
  ['style', 'width', '500px'],
], 'fullScreeen');

makeElement([
  ['id', 'logo'],
  ['innerHTML', 'NAVER'],
  ['style', 'fontSize', '60px'],
  ['style', 'textAlign', 'center'],
  ['style', 'fontFamily', `'Lobster', cursive`],
  ['style', 'fontWeight', '900'],
  ['style', 'color', 'rgb(0, 200, 80)'],
], 'midLogin', 'h1');

makeElement([
  ['id', 'midLoginAria'],
  ['style', 'margin', 'auto'],
  ['style', 'width', '500px'],
], 'midLogin');

makeElement([
  ['id', 'loginAria'],
  ['style', 'margin', 'auto'],
  ['style', 'width', '500px'],
], 'midLoginAria');

makeElement([
  ['id', 'loginForm'],
  ['method', 'get'],
  ['action', 'http://localhost/login'],
  ['onsubmit', () => { return loginError(); }],
  ['style', 'margin', 'auto'],
  ['style', 'width', '500px'],
], 'loginAria', 'form');

makeElement([
  ['id', 'idAria'],
  ['style', 'margin', '10px 0px'],
  ['style', 'width', '498px'],
  ['style', 'border', '1px solid lightgray'],
], 'loginForm');

function inputIsFocus (ariaId, isFocus = true) {
  const parentBorder = document.getElementById(ariaId);
  if (isFocus) parentBorder.style.border = '1px solid rgb(0, 200, 80)';
  else parentBorder.style.border = '1px solid lightgray';
}

makeElement([
  ['id', 'idInput'],
  ['className', 'inputs'],
  ['type', 'text'],
  ['placeholder', '아이디'],
  ['onfocus', () => { inputIsFocus('idAria'); }],
  ['onblur', () => { inputIsFocus('idAria', false); }],
  ['style', 'margin', '10px 5px'],
  ['style', 'width', '400px'],
  ['style', 'height', '30px'],
  ['style', 'border', 'none'],
  ['style', 'outline', 'none'],
], 'idAria', 'input');

makeElement([
  ['id', 'idInputError'],
  ['className', 'idError errors'],
  ['style', 'fontSize', '10px'],
  ['style', 'color', 'red'],
  ['style', 'display', 'none'],
], 'loginForm', 'p');

makeElement([
  ['id', 'passwordAria'],
  ['style', 'margin', '10px 0px'],
  ['style', 'width', '498px'],
  ['style', 'border', '1px solid lightgray'],
], 'loginForm');

makeElement([
  ['id', 'passwordInput'],
  ['className', 'inputs'],
  ['type', 'password'],
  ['placeholder', '비밀번호'],
  ['onfocus', () => { inputIsFocus('passwordAria'); }],
  ['onblur', () => { inputIsFocus('passwordAria', false); }],
  ['style', 'margin', '10px 5px'],
  ['style', 'width', '400px'],
  ['style', 'height', '30px'],
  ['style', 'border', 'none'],
  ['style', 'outline', 'none'],
], 'passwordAria', 'input');

makeElement([
  ['id', 'passwordInputError'],
  ['className', 'passwordError errors'],
  ['style', 'fontSize', '10px'],
  ['style', 'color', 'red'],
  ['style', 'display', 'none'],
], 'loginForm', 'p');

makeElement([
  ['id', 'submitAria'],
  ['style', 'margin', '10px 0px'],
  ['style', 'width', '500px'],
  ['style', 'height', '50px'],
], 'loginForm');

makeElement([
  ['id', 'submitInput'],
  ['type', 'submit'],
  ['value', '로그인'],
  ['style', 'color', 'white'],
  ['style', 'width', '500px'],
  ['style', 'height', '50px'],
  ['style', 'fontSize', '15px'],
  ['style', 'outline', 'none'],
  ['style', 'backgroundColor', 'rgb(0, 200, 80)'],
  ['style', 'border', '1px solid rgb(3, 179, 81)'],
], 'submitAria', 'input');

makeElement([
  ['id', 'hr'],
  ['style', 'color', 'lightgray'],
], 'midLogin', 'hr');

makeElement([
  ['id', 'infomation'],
  ['style', 'margin', 'auto'],
  ['style', 'marginBottom', '30px'],
  ['style', 'textAlign', 'center'],
], 'midLogin');

makeElement([
  ['id', 'findIdBtn'],
  ['type', 'button'],
  ['value', '아이디 찾기'],
  ['onclick', () => { infomationsIsDisplay('findId'); }],
  ['style', 'fontSize', '20px'],
  ['style', 'background', 'none'],
  ['style', 'border', '1px solid lightgray'],
  ['style', 'borderRadius', '10px'],
  ['style', 'outline', 'none'],
  ['style', 'color', 'gray'],
], 'infomation', 'input');

makeElement([
  ['innerHTML', ' | '],
  ['style', 'fontSize', '20px'],
  ['style', 'color', 'lightgray'],
], 'infomation', 'span');

makeElement([
  ['id', 'findPasswordBtn'],
  ['type', 'button'],
  ['value', '비밀번호 찾기'],
  ['onclick', () => { infomationsIsDisplay('findPassword'); }],
  ['style', 'fontSize', '20px'],
  ['style', 'background', 'none'],
  ['style', 'border', '1px solid lightgray'],
  ['style', 'borderRadius', '10px'],
  ['style', 'outline', 'none'],
  ['style', 'color', 'gray'],
], 'infomation', 'input');

makeElement([
  ['innerHTML', ' | '],
  ['style', 'fontSize', '20px'],
  ['style', 'color', 'lightgray'],
], 'infomation', 'span');

makeElement([
  ['id', 'signUPBtn'],
  ['type', 'button'],
  ['value', '회원가입'],
  ['onclick', () => { infomationsIsDisplay('signUp'); }],
  ['style', 'fontSize', '20px'],
  ['style', 'background', 'none'],
  ['style', 'border', '1px solid lightgray'],
  ['style', 'borderRadius', '10px'],
  ['style', 'outline', 'none'],
  ['style', 'color', 'gray'],
], 'infomation', 'input');
