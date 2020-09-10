
function loginError () {
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
  