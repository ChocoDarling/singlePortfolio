makeElement([
  ['id', 'findPassword'],
  ['className', 'infomations'],
  ['style', 'display', 'none'],
  ['style', 'margin', 'auto'],
  ['style', 'textAlign', 'center'],
  ['style', 'border', '1px solid lightgray'],
], 'midLogin');

makeElement([
  ['id', 'findPasswordIdAria'],
  ['style', 'margin', '10px auto'],
  ['style', 'width', '300px'],
  ['style', 'border', '1px solid lightgray'],
], 'findPassword');

makeElement([
  ['id', 'findPasswordIdInput'],
  ['className', 'inputs'],
  ['type', 'text'],
  ['placeholder', '아이디'],
  ['onfocus', () => { inputIsFocus('findPasswordIdAria'); }],
  ['onblur', () => { inputIsFocus('findPasswordIdAria', false); }],
  ['style', 'margin', '10px 5px'],
  ['style', 'width', '280px'],
  ['style', 'height', '30px'],
  ['style', 'border', 'none'],
  ['style', 'outline', 'none'],
], 'findPasswordIdAria', 'input');

makeElement([
  ['id', 'findPasswordIdInputError'],
  ['className', 'idError errors'],
  ['style', 'fontSize', '10px'],
  ['style', 'color', 'red'],
  ['style', 'display', 'none'],
], 'findPassword', 'p');

makeElement([
  ['id', 'findPasswordNameAria'],
  ['style', 'margin', '10px auto'],
  ['style', 'width', '300px'],
  ['style', 'border', '1px solid lightgray'],
], 'findPassword');

makeElement([
  ['id', 'findPasswordNameInput'],
  ['className', 'inputs'],
  ['type', 'text'],
  ['placeholder', '이름'],
  ['onfocus', () => { inputIsFocus('findPasswordNameAria'); }],
  ['onblur', () => { inputIsFocus('findPasswordNameAria', false); }],
  ['style', 'margin', '10px 5px'],
  ['style', 'width', '280px'],
  ['style', 'height', '30px'],
  ['style', 'border', 'none'],
  ['style', 'outline', 'none'],
], 'findPasswordNameAria', 'input');

makeElement([
  ['id', 'findPasswordNameInputError'],
  ['className', 'nameError errors'],
  ['style', 'fontSize', '10px'],
  ['style', 'color', 'red'],
  ['style', 'display', 'none'],
], 'findPassword', 'p');

makeElement([
  ['id', 'findPasswordPhoneAria'],
  ['style', 'margin', '10px auto'],
  ['style', 'width', '300px'],
  ['style', 'border', '1px solid lightgray'],
], 'findPassword');

makeElement([
  ['id', 'findPasswordPhoneInput'],
  ['className', 'inputs'],
  ['type', 'text'],
  ['placeholder', '전화번호'],
  ['onfocus', () => { inputIsFocus('findPasswordPhoneAria'); }],
  ['onblur', () => { inputIsFocus('findPasswordPhoneAria', false); }],
  ['style', 'margin', '10px 5px'],
  ['style', 'width', '280px'],
  ['style', 'height', '30px'],
  ['style', 'border', 'none'],
  ['style', 'outline', 'none'],
], 'findPasswordPhoneAria', 'input');

makeElement([
  ['id', 'findPasswordPhoneInputError'],
  ['className', 'phoneError errors'],
  ['style', 'fontSize', '10px'],
  ['style', 'color', 'red'],
  ['style', 'display', 'none'],
], 'findPassword', 'p');

makeElement([
  ['id', 'findPasswordBtn'],
  ['type', 'button'],
  ['value', '비밀번호 찾기'],
  ['onclick', () => { findPassword(); }],
  ['style', 'margin', '10px auto'],
  ['style', 'fontSize', '20px'],
  ['style', 'background', 'none'],
  ['style', 'border', '1px solid lightgray'],
  ['style', 'borderRadius', '10px'],
  ['style', 'outline', 'none'],
  ['style', 'color', 'gray'],
], 'findPassword', 'input');

makeElement([
  ['id', 'changePassword'],
  ['className', 'infomations'],
  ['style', 'display', 'none'],
  ['style', 'margin', 'auto'],
  ['style', 'textAlign', 'center'],
  ['style', 'border', '1px solid lightgray'],
], 'midLogin');

makeElement([
  ['id', 'changePasswordPasswordAria'],
  ['style', 'margin', '10px auto'],
  ['style', 'width', '300px'],
  ['style', 'border', '1px solid lightgray'],
], 'changePassword');

makeElement([
  ['id', 'changePasswordPasswordInput'],
  ['className', 'inputs'],
  ['type', 'password'],
  ['placeholder', '비밀번호'],
  ['onfocus', () => { inputIsFocus('changePasswordPasswordAria'); }],
  ['onblur', () => { inputIsFocus('changePasswordPasswordAria', false); }],
  ['style', 'margin', '10px 5px'],
  ['style', 'width', '280px'],
  ['style', 'height', '30px'],
  ['style', 'border', 'none'],
  ['style', 'outline', 'none'],
], 'changePasswordPasswordAria', 'input');

makeElement([
  ['id', 'changePasswordPasswordInputError'],
  ['className', 'passwordError errors'],
  ['style', 'fontSize', '10px'],
  ['style', 'color', 'red'],
  ['style', 'display', 'none'],
], 'changePassword', 'p');

makeElement([
  ['id', 'changePasswordCheckAria'],
  ['style', 'margin', '10px auto'],
  ['style', 'width', '300px'],
  ['style', 'border', '1px solid lightgray'],
], 'changePassword');

makeElement([
  ['id', 'changePasswordCheckInput'],
  ['className', 'inputs'],
  ['type', 'password'],
  ['placeholder', '비밀번호 확인'],
  ['onfocus', () => { inputIsFocus('changePasswordCheckAria'); }],
  ['onblur', () => { inputIsFocus('changePasswordCheckAria', false); }],
  ['style', 'margin', '10px 5px'],
  ['style', 'width', '280px'],
  ['style', 'height', '30px'],
  ['style', 'border', 'none'],
  ['style', 'outline', 'none'],
], 'changePasswordCheckAria', 'input');

makeElement([
  ['id', 'changePasswordCheckInputError'],
  ['className', 'passwordCheckError errors'],
  ['style', 'fontSize', '10px'],
  ['style', 'color', 'red'],
  ['style', 'display', 'none'],
], 'changePassword', 'p');

makeElement([
  ['id', 'changePasswordBtn'],
  ['type', 'button'],
  ['value', '비밀번호 바꾸기'],
  ['onclick', () => { changePassword(); }],
  ['style', 'margin', '10px auto'],
  ['style', 'fontSize', '20px'],
  ['style', 'background', 'none'],
  ['style', 'border', '1px solid lightgray'],
  ['style', 'borderRadius', '10px'],
  ['style', 'outline', 'none'],
  ['style', 'color', 'gray'],
], 'changePassword', 'input');
