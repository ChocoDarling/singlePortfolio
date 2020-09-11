function menuPlus() {
  if(document.getElementById('topMenuPlusDiv').style.display === 'none') {
    document.getElementById('topDiv').style.boxShadow = '';
    document.getElementById('topMenuPlusDiv').style.display = 'block';
  } else {
    document.getElementById('topMenuPlusDiv').style.display = 'none';
    document.getElementById('topDiv').style.boxShadow = '0px 10px 10px 0px lightgray';
  }
}