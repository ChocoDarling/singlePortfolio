
makeElement([
  ['id', 'signUp'],
  ['className', 'infomations'],
  ['style', 'display', 'block'],
  ['style', 'margin', 'auto'],
  ['style', 'textAlign', 'center'],
  ['style', 'border', '1px solid lightgray'],
], 'midLogin');

makeElement([
  ['id', 'signUpIdAria'],
  ['style', 'margin', '10px auto'],
  ['style', 'width', '300px'],
  ['style', 'border', '1px solid lightgray'],
], 'signUp');

makeElement([
  ['id', 'signUpIdInput'],
  ['className', 'inputs'],
  ['type', 'text'],
  ['placeholder', 'ID'],
  ['onfocus', () => { inputIsFocus('signUpIdAria'); }],
  ['onblur', () => { inputIsFocus('signUpIdAria', false); }],
  ['style', 'margin', '10px 5px'],
  ['style', 'width', '280px'],
  ['style', 'height', '30px'],
  ['style', 'border', 'none'],
  ['style', 'outline', 'none'],
], 'signUpIdAria', 'input');

makeElement([
  ['id', 'signUpIdInputError'],
  ['className', 'idError errors'],
  ['style', 'fontSize', '10px'],
  ['style', 'color', 'red'],
  ['style', 'display', 'none'],
], 'signUp', 'p');

makeElement([
  ['id', 'signUpPasswordAria'],
  ['style', 'margin', '10px auto'],
  ['style', 'width', '300px'],
  ['style', 'border', '1px solid lightgray'],
], 'signUp');

makeElement([
  ['id', 'signUpPasswordInput'],
  ['className', 'inputs'],
  ['type', 'password'],
  ['placeholder', 'Password'],
  ['onfocus', () => { inputIsFocus('signUpPasswordAria'); }],
  ['onblur', () => { inputIsFocus('signUpPasswordAria', false); }],
  ['style', 'margin', '10px 5px'],
  ['style', 'width', '280px'],
  ['style', 'height', '30px'],
  ['style', 'border', 'none'],
  ['style', 'outline', 'none'],
], 'signUpPasswordAria', 'input');

makeElement([
  ['id', 'signUpPasswordInputError'],
  ['className', 'passwordError errors'],
  ['style', 'fontSize', '10px'],
  ['style', 'color', 'red'],
  ['style', 'display', 'none'],
], 'signUp', 'p');

makeElement([
  ['id', 'signUpPasswordCheckAria'],
  ['style', 'margin', '10px auto'],
  ['style', 'width', '300px'],
  ['style', 'border', '1px solid lightgray'],
], 'signUp');

makeElement([
  ['id', 'signUpPasswordCheckInput'],
  ['className', 'inputs'],
  ['type', 'password'],
  ['placeholder', 'Password Check'],
  ['onfocus', () => { inputIsFocus('signUpPasswordCheckAria'); }],
  ['onblur', () => { inputIsFocus('signUpPasswordCheckAria', false); }],
  ['style', 'margin', '10px 5px'],
  ['style', 'width', '280px'],
  ['style', 'height', '30px'],
  ['style', 'border', 'none'],
  ['style', 'outline', 'none'],
], 'signUpPasswordCheckAria', 'input');

makeElement([
  ['id', 'signUpPasswordCheckInputError'],
  ['className', 'passwordCheckError errors'],
  ['style', 'fontSize', '10px'],
  ['style', 'color', 'red'],
  ['style', 'display', 'none'],
], 'signUp', 'p');

makeElement([
  ['id', 'signUpNameAria'],
  ['style', 'margin', '10px auto'],
  ['style', 'width', '300px'],
  ['style', 'border', '1px solid lightgray'],
], 'signUp');

makeElement([
  ['id', 'signUpNameInput'],
  ['className', 'inputs'],
  ['type', 'text'],
  ['placeholder', '이름'],
  ['onfocus', () => { inputIsFocus('signUpNameAria'); }],
  ['onblur', () => { inputIsFocus('signUpNameAria', false); }],
  ['style', 'margin', '10px 5px'],
  ['style', 'width', '280px'],
  ['style', 'height', '30px'],
  ['style', 'border', 'none'],
  ['style', 'outline', 'none'],
], 'signUpNameAria', 'input');

makeElement([
  ['id', 'signUpNameInputError'],
  ['className', 'nameError errors'],
  ['style', 'fontSize', '10px'],
  ['style', 'color', 'red'],
  ['style', 'display', 'none'],
], 'signUp', 'p');

makeElement([
  ['id', 'signUpPhoneAria'],
  ['style', 'margin', '10px auto'],
  ['style', 'width', '300px'],
  ['style', 'border', '1px solid lightgray'],
], 'signUp');

makeElement([
  ['id', 'signUpPhoneInput'],
  ['className', 'inputs'],
  ['type', 'text'],
  ['placeholder', '전화번호'],
  ['onfocus', () => { inputIsFocus('signUpPhoneAria'); }],
  ['onblur', () => { inputIsFocus('signUpPhoneAria', false); }],
  ['style', 'margin', '10px 5px'],
  ['style', 'width', '280px'],
  ['style', 'height', '30px'],
  ['style', 'border', 'none'],
  ['style', 'outline', 'none'],
], 'signUpPhoneAria', 'input');

makeElement([
  ['id', 'signUpPhoneInputError'],
  ['className', 'phoneError errors'],
  ['style', 'fontSize', '10px'],
  ['style', 'color', 'red'],
  ['style', 'display', 'none'],
], 'signUp', 'p');

makeElement([
  ['id', 'signUpEMailAria'],
  ['style', 'margin', '10px auto'],
  ['style', 'width', '300px'],
  ['style', 'border', '1px solid lightgray'],
], 'signUp');

makeElement([
  ['id', 'signUpEMailInput'],
  ['className', 'inputs'],
  ['type', 'text'],
  ['placeholder', 'E-mail'],
  ['onfocus', () => { inputIsFocus('signUpEMailAria'); }],
  ['onblur', () => { inputIsFocus('signUpEMailAria', false); }],
  ['style', 'margin', '10px 5px'],
  ['style', 'width', '280px'],
  ['style', 'height', '30px'],
  ['style', 'border', 'none'],
  ['style', 'outline', 'none'],
], 'signUpEMailAria', 'input');

makeElement([
  ['id', 'signUpEMailInputError'],
  ['className', 'eMailError errors'],
  ['style', 'fontSize', '10px'],
  ['style', 'color', 'red'],
  ['style', 'display', 'none'],
], 'signUp', 'p');

makeElement([
  ['id', 'signUpBtn'],
  ['type', 'button'],
  ['value', '회원가입'],
  ['onclick', () => { signUp(); }],
  ['style', 'margin', '10px auto'],
  ['style', 'fontSize', '20px'],
  ['style', 'background', 'none'],
  ['style', 'border', '1px solid lightgray'],
  ['style', 'borderRadius', '10px'],
  ['style', 'outline', 'none'],
  ['style', 'color', 'gray'],
], 'signUp', 'input');

