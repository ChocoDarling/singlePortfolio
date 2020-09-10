makeElement([
  ['id', 'findId'],
  ['className', 'infomations'],
  ['style', 'display', 'none'],
  ['style', 'margin', 'auto'],
  ['style', 'textAlign', 'center'],
  ['style', 'border', '1px solid lightgray'],
], 'midLogin');

makeElement([
  ['id', 'findedId'],
  ['innerHTML', 'ID'],
  ['style', 'margin', '10px auto'],
  ['style', 'color', 'lightgray'],
  ['style', 'fontSize', '40px'],
  ['style', 'height', '50px'],
  ['style', 'textAlign', 'center'],
], 'findId');

makeElement([
  ['id', 'findIdNameAria'],
  ['style', 'margin', '10px auto'],
  ['style', 'width', '300px'],
  ['style', 'border', '1px solid lightgray'],
], 'findId');

makeElement([
  ['id', 'findIdNameInput'],
  ['className', 'inputs'],
  ['type', 'text'],
  ['placeholder', '이름'],
  ['onfocus', () => { inputIsFocus('findIdNameAria'); }],
  ['onblur', () => { inputIsFocus('findIdNameAria', false); }],
  ['style', 'margin', '10px 5px'],
  ['style', 'width', '280px'],
  ['style', 'height', '30px'],
  ['style', 'border', 'none'],
  ['style', 'outline', 'none'],
], 'findIdNameAria', 'input');

makeElement([
  ['id', 'findIdNameInputError'],
  ['className', 'nameError errors'],
  ['style', 'fontSize', '10px'],
  ['style', 'color', 'red'],
  ['style', 'display', 'none'],
], 'findId', 'p');

makeElement([
  ['id', 'findIdPhoneAria'],
  ['style', 'margin', '10px auto'],
  ['style', 'width', '300px'],
  ['style', 'border', '1px solid lightgray'],
], 'findId');

makeElement([
  ['id', 'findIdPhoneInput'],
  ['className', 'inputs'],
  ['type', 'text'],
  ['placeholder', '전화번호'],
  ['onfocus', () => { inputIsFocus('findIdPhoneAria'); }],
  ['onblur', () => { inputIsFocus('findIdPhoneAria', false); }],
  ['style', 'margin', '10px 5px'],
  ['style', 'width', '280px'],
  ['style', 'height', '30px'],
  ['style', 'border', 'none'],
  ['style', 'outline', 'none'],
], 'findIdPhoneAria', 'input');

makeElement([
  ['id', 'findIdPhoneInputError'],
  ['className', 'phoneError errors'],
  ['style', 'fontSize', '10px'],
  ['style', 'color', 'red'],
  ['style', 'display', 'none'],
], 'findId', 'p');

makeElement([
  ['id', 'findIdBtn'],
  ['type', 'button'],
  ['value', '아이디 찾기'],
  ['onclick', () => { findID(); }],
  ['style', 'margin', '10px auto'],
  ['style', 'fontSize', '20px'],
  ['style', 'background', 'none'],
  ['style', 'border', '1px solid lightgray'],
  ['style', 'borderRadius', '10px'],
  ['style', 'outline', 'none'],
  ['style', 'color', 'gray'],
], 'findId', 'input');
