
function loginError () {
  const loginInput = document.getElementById('loginForm');
  if (loginInput[0].value === '') alert('아이디를 입력해주세요');
  else if (loginInput[1].value === '') alert('비밀번호를 입력해주세요');
  else return true;

  return false;
}
