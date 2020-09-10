function UserInfomation (userId, userName, userPassword, userEMail, userPhone) {
  const id = userId;
  const name = userName;
  const eMail = userEMail;
  const phone = userPhone;
  let password = userPassword;
  
  this.getId = () => { return id; }
  this.getName = () => { return name; }
  this.getPassword = () => { return password; }
  this.setPassword = (newPassword) => { password = newPassword; }
  this.getEMail = () => { return eMail; }
  this.getPhone = () => { return phone; }
}

const users = [];
users.push(new UserInfomation(
    'asdf', 
    '경훈', 
    '1234', 
    'sdrbsdru@dsafsdaf.sdfaasdf', 
    '12385439543'
));