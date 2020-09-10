function loginError() {
  const loginInput = document.getElementById('loginForm');
  const idInputError = document.getElementById('idInputError');
  const passwordInputError = document.getElementById('passwordInputError');

  idInputError.style.display = 'none';
  passwordInputError.style.display = 'none';
  if (loginInput[0].value === '') idInputError.style.display = 'block';
  else if (loginInput[1].value === '') passwordInputError.style.display = 'block';
  else return true;

  return false;
}

function findID() {
  const idInput = document.getElementById('findedId');
  const nameInput = document.getElementById('findIdNameInput').value;
  const nameInputError = document.getElementById('findIdNameInputError');
  const phoneInput = document.getElementById('findIdPhoneInput').value;
  const phoneInputError = document.getElementById('findIdPhoneInputError');
  
  nameInputError.style.display = 'none';
  phoneInputError.style.display = 'none';
  idInput.innerHTML = 'ID';
  idInput.style.color = 'lightgray';
  
  if (errorCheck('findId')) return;

  const findUser = users.find(n => nameInput === n.getName());
  
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
  
  if (findElement.style.display === 'none') tempBool = true;
  for (let i = 0; i < allInfo.length; ++i) allInfo[i].style.display = 'none';
  if (tempBool) findElement.style.display = 'block';
}

function signUp() {
  const userId = document.getElementById('signUpIdInput').value;
  const name = document.getElementById('signUpNameInput').value;
  const password = document.getElementById('signUpPasswordInput').value;
  const passwordcheck = document
    .getElementById('signUpPasswordCheckInput').value;
  const eMail = document.getElementById('signUpEMailInput').value;
  const phone = document.getElementById('signUpPhoneInput').value;
  
  if (errorCheck('signUp')) return;
  


  return;
  allInfo.pusu(new UserInfomation(userId, name, password, eMail, phone));
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
    case 'ID':
      document.getElementById(elementID).getElementsByClassName('idError')[0]
        .style.display = 'block';
      document.getElementById(elementID).getElementsByClassName('idError')[0]
        .innerHTML = '이름을 입력해주세요.'

      return true;

    case 'Password':
      document.getElementById(elementID).getElementsByClassName('passwordError')[0]
        .style.display = 'block';
      document.getElementById(elementID).getElementsByClassName('passwordError')[0]
        .innerHTML = '비밀번호를 입력해주세요.'

      return true;

    case 'Password Check':
      document.getElementById(elementID).getElementsByClassName('passwordCheckError')[0]
        .style.display = 'block';
      document.getElementById(elementID).getElementsByClassName('passwordCheckError')[0]
        .innerHTML = '비밀번호를 확인해주세요.'

      return true;

    case '이름':
      document.getElementById(elementID).getElementsByClassName('nameError')[0]
        .style.display = 'block';
      document.getElementById(elementID).getElementsByClassName('nameError')[0]
        .innerHTML = '이름을 입력해주세요.'

      return true;

    case '전화번호':
      document.getElementById(elementID).getElementsByClassName('phoneError')[0]
        .style.display = 'block';
      document.getElementById(elementID).getElementsByClassName('phoneError')[0]
        .innerHTML = '전화번호를 입력해주세요.'

      return true;

    case 'E-mail':
      document.getElementById(elementID).getElementsByClassName('eMailError')[0]
        .style.display = 'block';
      document.getElementById(elementID).getElementsByClassName('eMailError')[0]
        .innerHTML = '이메일을 입력해주세요.'

      return true;

    default:

      return false;
  }
}