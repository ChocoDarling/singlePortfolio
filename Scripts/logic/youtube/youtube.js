// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}
// call this to Enable
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}

function changeIcon(elementId1, elementId2) {
  document.getElementById(elementId1).style.display = 'block';
  document.getElementById(elementId2).style.display = 'none';
}

function nowIcon(elementId) {
  const allIcon = document.getElementsByClassName('nowCheck');
  const nowIcon = document.getElementById(elementId);

  if (!nowIcon.value) {
    backgroundOpacity(elementId);
    nowIcon.value = true;
    changeIcon(`${elementId}ImageCheck`, `${elementId}Image`);
  }

  for (let i = 0; i < allIcon.length; i++) {
    if (allIcon[i].id === elementId) continue;
    
    if (allIcon[i].value) {
      backgroundOpacity(allIcon[i].id, false);
      changeIcon(`${allIcon[i].id}Image`, `${allIcon[i].id}ImageCheck`);
      allIcon[i].value = false;
    }
  }
}

function menuPlus(parentID, childrenClassName, elementID) {
  const nowState = 
    document.getElementById(elementID).value = 
    !document.getElementById(elementID).value;

  if (nowState) {
    document.getElementById(`${elementID}Text`).innerHTML = '간략히 보기';
    changeIcon(`${elementID}ImageCheck`, `${elementID}Image`);
  } else {
    document.getElementById(`${elementID}Text`).innerHTML = '더보기';
    changeIcon(`${elementID}Image`, `${elementID}ImageCheck`);
  }

  const children = document.getElementById(parentID).getElementsByClassName(childrenClassName);

  for (let i = 0; i < children.length; ++i) {
    if (nowState) {
      children[i].style.display = 'block';
    } else {
      children[i].style.display = 'none';
    } 
  }
}

function makeMenuElements(elementId, imageName, text) {
  makeElement([
    ['id', elementId],
    ['className', 'nowCheck'],
    ['href', '#'],
    ['value', false],
    ['onmouseenter', () => { backgroundOpacity(elementId); }],
    ['onmouseleave', () => { backgroundOpacity(elementId, false); }],
    ['onclick', () => { nowIcon(elementId); }],
    ['style', 'float', 'left'],
    ['style', 'width', '15em'],
    ['style', 'height', '1.5em'],
    ['style', 'padding', '0.75em 0em'],
    ['style', 'textDecoration', 'none'],
    ['style', 'backgroundColor', 'rgba(200, 200, 200, 0.0)'],
  ], 'menu', 'a');
  
  makeElement([
    ['id', `${elementId}Image`],
    ['src', `../images/${imageName}.png`],
    ['alt', imageName],
    ['style', 'display', 'block'],
    ['style', 'float', 'left'],
    ['style', 'margin', 'auto 1em'],
    ['style', 'height', '1.5em'],
    ['style', 'backgroundSize', 'cover'],
  ], elementId, 'img');
  
  makeElement([
    ['id', `${elementId}ImageCheck`],
    ['src', `../images/${imageName}_check.png`],
    ['alt', imageName],
    ['style', 'display', 'none'],
    ['style', 'float', 'left'],
    ['style', 'margin', 'auto 1em'],
    ['style', 'height', '1.5em'],
    ['style', 'backgroundSize', 'cover'],
  ], elementId, 'img');
  
  makeElement([
    ['id', `${elementId}Text`],
    ['innerHTML', text],
    ['style', 'float', 'left'],
    ['style', 'margin', 'auto'],
    ['style', 'fontSize', '1em'],
    ['style', 'color', 'black'],
  ], elementId, 'p');
}

function menuEnter() {
  const scrollbar = document.getElementById('menuScrollBar');
  const menuEnd = document.getElementById('menuEnd');

  if (innerHeight > menuEnd.offsetTop) return;

  scrollbar.style.display = 'block';
  scrollbar.style.height = `${ 
    (innerHeight - document.getElementById('header').offsetHeight) * 
    (innerHeight - document.getElementById('header').offsetHeight) / 
    menuEnd.offsetTop}px`;

  disableScroll();
}

function menuLeave() {
  document.getElementById('menuScrollBar').style.display = 'none';
  enableScroll();
}

function menuScroll(e) {
  const scrollbar = document.getElementById('menuScrollBar');
  const menuEnd = document.getElementById('menuEnd');
  const menu = document.getElementById('menu');
  const maxMenuTop = document.getElementById('header').offsetHeight;
  const minMenuTop = innerHeight - menuEnd.offsetTop;
  
  if (innerHeight > menuEnd.offsetTop) return;

  menu.style.top = `${menu.offsetTop + e.wheelDelta}px`;

  if (menu.offsetTop > maxMenuTop) {
    menu.style.top = `${maxMenuTop}px`;
  } else if (menu.offsetTop < minMenuTop) {
    menu.style.top = `${minMenuTop}px`;
  }
  scrollbar.style.top = `${
    (menu.offsetTop - maxMenuTop) / 
    (minMenuTop - maxMenuTop) * 
    (innerHeight - maxMenuTop - scrollbar.offsetHeight) + 
    maxMenuTop
  }px`;
}

function backgroundOpacity(elementId, isOn = true) {
  const element = document.getElementById(elementId);
  let opacity = element.style.backgroundColor.match(/0\.\d/);

  if (opacity) opacity = Number.parseFloat(opacity);
  
  let inOpacity = opacity + 0.3;
  
  if (isOn) inOpacity = opacity + 0.3;
  else  inOpacity = opacity - 0.3;

  if (inOpacity < 0) inOpacity = 0;
  else if (inOpacity > 1) inOpacity = 1;

  element.style.backgroundColor = `rgba(200, 200, 200, ${inOpacity})`;
}

function plusButten(elementId) {
  const element = document.getElementById(elementId);
  
  if (Number.parseFloat(
    element.style.backgroundColor.match(/\d\.\d/)
    )) return;
  
  let changeOpacity = 0.2;
  let nowOpacity = 0;
  const changingOpacity = setInterval(() => {
    if (nowOpacity > 1) changeOpacity = -0.2;
    nowOpacity += changeOpacity;
    element.style.backgroundColor = `rgba(200, 200, 200, ${nowOpacity})`;
    if (nowOpacity < 0) clearInterval(changingOpacity);
  }, 50);
}

function plusMenu(elementId) {
  const element = document.getElementById(elementId);
  if (element.value) {
    element.value = false;
    element.style.display = 'none';
  } else {
    element.value = true;
    element.style.display = 'block';
  }
}

let nowWidth;
setInterval(() => {
  const element = document.getElementById('container');
  const videoListLength = element.value;
  const maxMenuTop = document.getElementById('header').offsetHeight;
  let videoCountY = document.getElementById('videoCountY');

  if (videoListLength) {
    if (element.offsetWidth / videoCountY.value > maxMenuTop * 30 / 3) {
      videoCountY.value += 1;
      allVideoResize('videoList', videoCountY.value);
    }
    if (element.offsetWidth / videoCountY.value < maxMenuTop * 20 / 3) {
      videoCountY.value -= 1;
      allVideoResize('videoList', videoCountY.value);
      if (videoCountY.value < 1) videoCountY.value = 1;
    } 
  }

  if (scrollY + innerHeight > element.offsetHeight - maxMenuTop) {
    for (let i = 1; i < 7; ++i) {
      makeElement([
        ['id', `videoListDiv${i + videoListLength}`],
        ['className', 'videoList'],
        ['href', '#'],
        ['style', 'position', 'relative'],
        ['style', 'display', 'inline-block'],
        ['style', 'float', 'left'],
        ['style', 'width', `${100 / videoCountY.value}%`],
        ['style', 'height', '20em'],
        ['style', 'textDecoration', 'none'],
      ], 'container');

      makeElement([
        ['id', `videoList${i + videoListLength}`],
        ['href', '#'],
        ['onmouseenter', () => { backgroundOpacity(`videoList${i + videoListLength}`); }],
        ['onmouseleave', () => { backgroundOpacity(`videoList${i + videoListLength}`, false); }],
        ['style', 'position', 'absolute'],
        ['style', 'display', 'inline-block'],
        ['style', 'top', '1em'],
        ['style', 'left', '1em'],
        ['style', 'right', '1em'],
        ['style', 'bottom', '1em'],
        ['style', 'textDecoration', 'none'],
        ['style', 'backgroundColor', 'rgba(200, 200, 200, 0.0)'],
      ], `videoListDiv${i + videoListLength}`, 'a');

      makeElement([
        ['id', `videoListImage${i + videoListLength}`],
        ['style', 'position', 'absolute'],
        ['style', 'display', 'inline-block'],
        ['style', 'top', '0em'],
        ['style', 'left', '0em'],
        ['style', 'right', '0em'],
        ['style', 'bottom', '50%'],
        ['style', 'backgroundImage', 'url(../images/video_image.png)'],
        ['style', 'backgroundSize', 'contain'],
        ['style', 'overflow', 'hidden'],
      ], `videoList${i + videoListLength}`);

      makeElement([
        ['id', `videoListText${i + videoListLength}`],
        ['innerHTML', `${i + videoListLength}번째 영상 텍스트`],
        ['style', 'position', 'absolute'],
        ['style', 'display', 'inline-block'],
        ['style', 'top', '50%'],
        ['style', 'left', '0em'],
        ['style', 'right', '0em'],
        ['style', 'bottom', '0em'],
        ['style', 'textDecoration', 'none'],
      ], `videoList${i + videoListLength}`, 'p');
    }
  element.value += 6;
  }
  
}, 100);

function allVideoResize(arrClassName, count) {
  const arrVideo = document.getElementsByClassName(arrClassName);
  for (let i = 0; i< arrVideo.length; ++i){
    arrVideo[i].style.width = `${100 / count}%`;
  }
}