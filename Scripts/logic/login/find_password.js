function findPassword() {
  const idInput = document.getElementById('findPasswordIdInput').value;
  const nameInput = document.getElementById('findPasswordNameInput').value;
  let phoneInput = document.getElementById('findPasswordPhoneInput').value;
 
  if (phoneInput.length === 11) {
    phoneInput = `${phoneInput.substr(0, 3)}-` +
      `${phoneInput.substr(3, 4)}-` +
      `${phoneInput.substr(7, 4)}`;
  } 
  
  console.log(phoneInput);

  if (errorCheck('findPassword')) return;
  
  const findUser = checkUserInfo(idInput, 'getId');
  if (!findUser) errorMsgPrint('findPassword', 'idError', '아이디가 존재하지 않습니다.');
  else if (findUser.getName() !== nameInput) {
    errorMsgPrint('findPassword', 'nameError', '이름을 확인해주세요.');
  } else if (findUser.getPhone() !== phoneInput) {
    errorMsgPrint('findPassword', 'phoneError', '전화번호를 확인해주세요.');
  } else {
    document.getElementById('changePassword').style.display = 'block';
    document.getElementById('changePassword').value = idInput;
  }
  

}

function changePassword() {
  const passwordInput = document.getElementById('changePasswordPasswordInput').value;
  const checkInput = document.getElementById('changePasswordCheckInput').value;
  
  errorCheck('changePassword');
  console.log(`${passwordInput} : ${checkInput}`);
  if (checkPassword('changePassword', passwordInput, checkInput) && 
    logicPassword('changePassword', passwordInput)) {
    users.find(n => document.getElementById('changePassword')
      .value = n.getId()).setPassword(passwordInput);
    infomationsIsDisplay('findPassword');
  }
}