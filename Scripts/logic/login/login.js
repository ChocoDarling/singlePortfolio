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

  return false;
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
  
    case '비밀번호 확인':
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
  if (pw === pwc) return true;
  
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

function logicPassword(elementID, password) {
  if (password.length < 10) {
    errorMsgPrint(elementID, 'passwordError', '비밀번호는 10자 이상.');
  } else if (password.length > 20) {
    errorMsgPrint(elementID, 'passwordError', '비밀번호는 20자 이하.');
  } else if (!password.match(/\W/)) {
    errorMsgPrint(elementID, 'passwordError', '비밀번호에 특수문자 포함.');
  } else if (!password.match(/\d/)) {
    errorMsgPrint(elementID, 'passwordError', '비밀번호에 숫자 포함.');
  } else if (password.match(/\s/)) {
    errorMsgPrint(elementID, 'passwordError', '비밀번호에 공백 없이.');
  } else {
    return true;
  }
  return false;
}
