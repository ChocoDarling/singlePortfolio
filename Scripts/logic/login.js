function loginError() {
  const loginInput = document.getElementById('loginForm');
  const idInputError = document.getElementById('idInputError');
  const passwordInputError = document.getElementById('passwordInputError');

  if (errorCheck('loginForm')) return false;
  
  const userInfo = checkUserInfo(loginInput[0].value, 'getId');
  if (userInfo) {
    if (userInfo.getPassword() == loginInput[1].value) {
      alert(`${userInfo.getName()}님 오신 것을 환영합니다.`);
    } else {
      errorMsgPrint('loginForm', 'passwordError', '비밀번호를 확인해주세요.');
    }
  }

  // idInputError.style.display = 'none';
  // passwordInputError.style.display = 'none';
  // if (loginInput[0].value === '') idInputError.style.display = 'block';
  // else if (loginInput[1].value === '') passwordInputError.style.display = 'block';
  // else return true;

  return false;
}

function findID() {
  const idInput = document.getElementById('findedId');
  const nameInput = document.getElementById('findIdNameInput').value;
  const nameInputError = document.getElementById('findIdNameInputError');
  const phoneInputError = document.getElementById('findIdPhoneInputError');
  let phoneInput = document.getElementById('findIdPhoneInput').value;
  
  nameInputError.style.display = 'none';
  phoneInputError.style.display = 'none';
  idInput.innerHTML = 'ID';
  idInput.style.color = 'lightgray';
  
  if (errorCheck('findId')) return;

  const findUser = users.find(n => nameInput === n.getName());
  
  if (phoneInput.length === 11) {
    phoneInput = `${phoneInput.substr(0, 3)}-${phoneInput.substr(3, 4)}-${phoneInput.substr(7, 4)}`;
  } 

  if (!findUser) {
    nameInputError.style.display = 'block';
    nameInputError.innerHTML = 'ID가 존재하지 않습니다.'

    return;
  } else if (findUser.getPhone() !== phoneInput) {
    phoneInputError.style.display = 'block';
    phoneInputError.innerHTML = '전화번호가 다릅니다.'

    return;
  } else if (findUser.getPhone() === phoneInput) {
    idInput.innerHTML = findUser.getId();
    idInput.style.color = 'black';
  }
}

function infomationsIsDisplay(nowElement) {
  const allInfo = document.getElementsByClassName('infomations');
  const findElement = document.getElementById(nowElement);
  let tempBool = false;
  resetInput(nowElement);
  
  if (findElement.style.display === 'none') tempBool = true;
  for (let i = 0; i < allInfo.length; ++i) {
    allInfo[i].style.display = 'none';
  } 
  if (tempBool) findElement.style.display = 'block';
}

function signUp() {
  const userId = document.getElementById('signUpIdInput').value;
  const name = document.getElementById('signUpNameInput').value;
  const password = document.getElementById('signUpPasswordInput').value;
  const eMail = document.getElementById('signUpEMailInput').value;
  let phone = document.getElementById('signUpPhoneInput').value;
  
  if (errorCheck('signUp')) return;

  if (checkUserInfo(
    userId, 
    'getId', 
    'signUp', 
    'idError', 
    '아이디가 존재합니다.'
  )) return;

  if (checkUserInfo(
    name, 
    'getName', 
    'signUp', 
    'nameError', 
    '이름이 존재합니다.'
  )) return;

  if (checkUserInfo(
    phone, 
    'getPhone', 
    'signUp', 
    'phoneError', 
    '전화번호가 존재합니다.'
  )) return;

  if (checkUserInfo(
    eMail, 
    'getEMail', 
    'signUp', 
    'eMailError', 
    '이메일이 존재합니다.'
  )) return;

  if (!checkPassword(
    'signUp', 'signUpPasswordInput', 'signUpPasswordCheckInput')
  ) return;

  if (phone.length === 11) {
    phone = `${phone.substr(0, 3)}-${phone.substr(3, 4)}-${phone.substr(7, 4)}`;
  } 

  let checkText = phone.match(/\d{3}-\d{4}-\d{4}/);
  if (!checkText || phone.length !== 13) {
    errorMsgPrint('signUp', 'phoneError', '전화번호를 확인해주세요.');

    return;
  }

  checkText = eMail.match(/[@.]/g);
  if (!checkText || checkText.length !== 2 || checkText[0] !== '@' || checkText[1] !== '.') {
    errorMsgPrint('signUp', 'eMailError', '이메일을 확인해주세요.');

    return;
  }

  users.push(new UserInfomation(userId, name, password, eMail, phone));
  resetInput('signUp');
}

function errorCheck(elementID) {
  const errors = document.getElementById(elementID)
    .getElementsByClassName('inputs');
  const errorMsgs = document.getElementById(elementID)
    .getElementsByClassName('errors');
  let errorMsg;
  
  for (let i = 0; i < errors.length; ++i) {
    errorMsgs[i].style.display = 'none';
    
    if (!errors[i].value && !errorMsg) {
      errorMsg = errors[i].placeholder;
    }
  }

  switch (errorMsg) {
    case '아이디':
      errorMsgPrint(elementID, 'idError', '아이디을 입력해주세요.');

      return true;
  
    case '비밀번호':
      errorMsgPrint(elementID, 'passwordError', '비밀번호를 입력해주세요.');

      return true;
  
    case 'ID':
      errorMsgPrint(elementID, 'idError', '아이디을 입력해주세요.');

      return true;

    case 'Password':
      errorMsgPrint(elementID, 'passwordError', '비밀번호를 입력해주세요.');

      return true;

    case 'Password Check':
      errorMsgPrint(elementID, 'passwordCheckError', '비밀번호를 확인해주세요.');

      return true;

    case '이름':
      errorMsgPrint(elementID, 'nameError', '이름을 입력해주세요.');

      return true;

    case '전화번호':
      errorMsgPrint(elementID, 'phoneError', '전화번호를 입력해주세요.');

      return true;

    case 'E-mail':
      errorMsgPrint(elementID, 'eMailError', '이메일을 입력해주세요.');

      return true;

    default:

      return false;
  }
}

function checkPassword(elementID, pw, pwc) {
  if (document.getElementById(pw).value === 
    document.getElementById(pwc).value) return true;
  
  const errorMsg = document.getElementById(elementID)
    .getElementsByClassName('passwordCheckError')[0];
  errorMsg.style.display = 'block';
  errorMsg.innerHTML = '비밀번호를 확인해주세요.'
  return false;
}

function errorMsgPrint(elementID, className, innerHTML) {
  document.getElementById(elementID).getElementsByClassName(className)[0]
    .style.display = 'block';
  document.getElementById(elementID).getElementsByClassName(className)[0]
    .innerHTML = innerHTML;

}

function checkUserInfo(
  input, 
  isGet, 
  elementID = undefined, 
  className = undefined, 
  innerHTML = undefined
) {
  const findUser = users.find(n => input === n[isGet]());
  if (findUser) {
    if (elementID) errorMsgPrint(elementID, className, innerHTML);
    
    return findUser;
  }

  return;
}

function resetInput(elementID) {
  const elements = document.getElementById(elementID).getElementsByClassName('inputs');
  
  for (let i = 0; i < elements.length; ++i) {
    elements[i].value = '';
  }
}