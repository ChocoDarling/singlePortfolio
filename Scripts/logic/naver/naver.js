function menuPlus() {
  if(document.getElementById('topMenuPlusDiv').style.display === 'none') {
    document.getElementById('topMenuPlus').innerHTML = '접기';
    document.getElementById('topMenuPlus').style.color = 'rgb(0, 200, 80)';
    document.getElementById('topDiv').style.boxShadow = '';
    document.getElementById('topMenuPlusDiv').style.display = 'block';
  } else {
    document.getElementById('topMenuPlus').innerHTML = '더보기';
    document.getElementById('topMenuPlus').style.color = 'black';
    document.getElementById('topMenuPlusDiv').style.display = 'none';
    document.getElementById('topDiv').style.boxShadow = '0px 10px 10px 0px lightgray';
  }
}

