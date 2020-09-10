
function signUp() {
    const userId = document.getElementById('signUpIdInput').value;
    const name = document.getElementById('signUpNameInput').value;
    const password = document.getElementById('signUpPasswordInput').value;
    const passwordCheck = document.getElementById('signUpPasswordCheckInput').value;
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
  
    if (!checkPassword('signUp', password, passwordCheck)) return;
  
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
  