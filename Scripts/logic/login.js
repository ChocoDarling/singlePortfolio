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
  const findUser = users.find(n => nameInput === n.getName());
  
  nameInputError.style.display = 'none';
  phoneInputError.style.display = 'none';
  idInput.innerHTML = 'ID';
  idInput.style.color = 'lightgray';
  
  if (!nameInput) {
    nameInputError.style.display = 'block';
    nameInputError.innerHTML = '이름을 입력해주세요.'

    return;
  } else if (!phoneInput) {
    phoneInputError.style.display = 'block';
    phoneInputError.innerHTML = '전화번호를 입력해주세요.'

    return;
  } else if (!findUser) {
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
  console.log(nowElement);
  console.log(allInfo);
  console.log(findElement);
  let tempBool = false;
  
  if (findElement.style.display === 'none') tempBool = true;
  for (let i = 0; i < allInfo.length; ++i) allInfo[i].style.display = 'none';
  if (tempBool) findElement.style.display = 'block';
}