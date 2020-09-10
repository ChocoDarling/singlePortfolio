
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
  
    const findUser = checkUserInfo(nameInput, 'getName');
    
    if (phoneInput.length === 11) {
      phoneInput = `${phoneInput.substr(0, 3)}-${phoneInput.substr(3, 4)}-${phoneInput.substr(7, 4)}`;
    } 
  
    if (!findUser) {
      errorMsgPrint('findId', 'nameError', '아이디가 존재하지 않습니다.');
  
      return;
    } else if (findUser.getPhone() !== phoneInput) {
      errorMsgPrint('findId', 'phoneError', '전화번호를 확인해주세요.');
  
      return;
    } else if (findUser.getPhone() === phoneInput) {
      idInput.innerHTML = findUser.getId();
      idInput.style.color = 'black';
    }
  }
  