makeElement([
  ['id', 'fullScreen'],
  ['display', 'flex']
]);

makeElement([
  ['id', 'header'],
  ['style', 'zIndex', '100'],
  ['style', 'display', 'inline-block'],
  ['style', 'margin', 'auto'],
  ['style', 'position', 'fixed'],
  ['style', 'top', '0'],
  ['style', 'left', '0'],
  ['style', 'height', '3em'],
  ['style', 'width', '100%'],
], 'fullScreen');

makeElement([
  ['id', 'headerLeft'],
  ['style', 'margin', 'auto'],
  ['style', 'float', 'left'],
  ['style', 'height', '3em'],
  ['style', 'width', '30%'],
], 'header');

makeElement([
  ['id', 'menuButton'],
  ['href', '#'],
  ['style', 'float', 'left'],
  ['style', 'margin', '0.5em'],
  ['style', 'height', '2em'],
  ['style', 'width', '2em'],
  ['style', 'borderRadius', '2em'],
  ['style', 'backgroundImage', 'url(../images/Hamburger_icon.svg.png)'],
  ['style', 'backgroundSize', 'cover'],
], 'headerLeft', 'a');

makeElement([
    ['id', 'menuYouTubeLogo'],
    ['href', '#'],
    ['style', 'float', 'left'],
    ['style', 'margin', '0.5em'],
    ['style', 'height', '2em'],
  ], 'headerLeft', 'a');
  
makeElement([
  ['id', 'headerCenter'],
  ['style', 'margin', 'auto'],
  ['style', 'float', 'left'],
  ['style', 'height', '3em'],
  ['style', 'width', '40%'],
], 'header');

makeElement([
  ['id', 'headerRight'],
  ['style', 'margin', 'auto'],
  ['style', 'float', 'left'],
  ['style', 'height', '3em'],
  ['style', 'width', '30%'],
], 'header');

makeElement([
  ['id', 'userButton'],
  ['href', '#'],
  ['style', 'float', 'right'],
  ['style', 'margin', '0.5em'],
  ['style', 'height', '2em'],
  ['style', 'width', '2em'],
  ['style', 'borderRadius', '2em'],
  ['style', 'backgroundColor', 'red'],
], 'headerRight', 'a');

makeElement([
  ['id', 'plusButton'],
  ['href', '#'],
  ['onclick', () => { nowIcon('plusButton'); }],
  ['style', 'float', 'right'],
  ['style', 'margin', '0.5em'],
  ['style', 'height', '2em'],
  ['style', 'width', '2em'],
  ['style', 'borderRadius', '2em'],
  ['style', 'backgroundImage', 'url(../images/youtube_top_plus.png)'],
  ['style', 'backgroundSize', 'cover'],
  ['style', 'backgroundColor', 'rgba(200, 200, 200, 0.0)'],
], 'headerRight', 'a');


makeElement([
  ['id', 'menuDiv'],
  ['style', 'display', 'inline-block'],
  ['style', 'position', 'fixed'],
  ['style', 'top', '0em'],
  ['style', 'left', '0em'],
  ['style', 'width', '15em'],
  ['style', 'height', '100%'],
  ['style', 'overflow', 'hidden'],
], 'fullScreen');

makeElement([
  ['id', 'menu'],
  ['onmouseenter', () => { menuEnter(); }],
  ['onmouseleave', () => { menuLeave(); }],
  ['onmousewheel', (e) => { menuScroll(e); }],
  ['style', 'position', 'relative'],
  ['style', 'top', '3em'],
  ['style', 'left', '0em'],
  ['style', 'width', '15em'],
], 'menuDiv');

const arrMenuTop = [
  ['menuHome', 'youtube_home', '홈'],
  ['menuPopularity', 'youtube_popularity', '인기'],
  ['menuSubscription', 'youtube_subscription', '구독'],
];

arrMenuTop.forEach(i => {
  makeMenuElements(i[0], i[1], i[2]);
});

makeElement([], 'menu', 'hr');

const arrMenuMiddle = [
  ['menuStorage', 'youtube_storage', '보관함'],
  ['menuRecord', 'youtube_record', '시청 기록'],
  ['menuUserVideo', 'youtube_user_video', '내 동영상'],
  ['menuAfterVideo', 'youtube_after_video', '나중에 볼 동영상'],
  ['menuLikeVideo', 'youtube_like_video', '좋아요 표시한 동영상'],
  ['menuInventory1', 'youtube_inventory', '운전용', true],
  ['menuInventory2', 'youtube_inventory', '저장한 목록 1', true],
  ['menuInventory3', 'youtube_inventory', '저장한 목록 2', true],
  ['menuPlusInventory', 'youtube_plus', '더보기', false, () => {
    menuPlus('menu', 'menuMiddlePlus', 'menuPlusInventory');
  }],
];

arrMenuMiddle.forEach(i => {
  makeMenuElements(i[0], i[1], i[2]);
  
  if (i[3]) {
    document.getElementById(i[0]).style.display = 'none';
    document.getElementById(i[0]).classList.add('menuMiddlePlus');
  }

  if (i[4]) {
    document.getElementById(i[0]).classList.remove('nowCheck');
    document.getElementById(i[0]).onclick = i[4];
  }
});

makeElement([], 'menu', 'hr');

makeElement([
  ['id', 'menuSubscriptionList'],
  ['innerHTML', '구독'],
  ['style', 'float', 'left'],
  ['style', 'margin', 'auto 1em'],
  ['style', 'width', '15em'],
  ['style', 'height', '1.5em'],
  ['style', 'padding', '0.75em 0em'],
  ['style', 'textDecoration', 'none'],
  ['style', 'backgroundColor', 'rgba(200, 200, 200, 0.0)'],
], 'menu');

const arrMenuSubscription = [];

arrMenuSubscription.forEach(i => {
  makeMenuElements(i[0], i[1], i[2]);

  if (i[3]) {
    document.getElementById(i[0]).style.display = 'none';
    document.getElementById(i[0]).classList.add('menuSubscriptionPlus');
  }

  if (i[4]) {
    document.getElementById(i[0]).onclick = i[4];
    document.getElementById(i[0]).classList.remove('nowCheck');
  }
});

makeElement([], 'menu', 'hr');

makeElement([
  ['id', 'menuYoutubePlusList'],
  ['innerHTML', 'YOUTUBE 더보기'],
  ['style', 'float', 'left'],
  ['style', 'margin', 'auto 1em'],
  ['style', 'width', '15em'],
  ['style', 'height', '1.5em'],
  ['style', 'padding', '0.75em 0em'],
  ['style', 'textDecoration', 'none'],
  ['style', 'backgroundColor', 'rgba(200, 200, 200, 0.0)'],
], 'menu');

const arrMenuYoutubePlus = [
  ['menuYoutubePremium', 'youtube_home', 'Youtube Premium'],
  ['menuMuvie', 'youtube_home', '영화'],
  ['menuGame', 'youtube_home', '게임'],
  ['menuRealTime', 'youtube_home', '실시간'],
  ['menuStudy', 'youtube_home', '학습'],
];

arrMenuYoutubePlus.forEach(i => {
  makeMenuElements(i[0], i[1], i[2]);
});

makeElement([
  ['id', 'menuEnd'],
  ['style', 'float', 'left'],
  ['style', 'width', '15em'],
], 'menu');

makeElement([
  ['id', 'menuScrollBar'],
  ['style', 'display', 'none'],
  ['style', 'position', 'fixed'],
  ['style', 'top', '3em'],
  ['style', 'left', '14.5em'],
  ['style', 'width', '0.5em'],
  ['style', 'height', '10em'],
  ['style', 'backgroundColor', 'rgba(200, 200, 200, 0.6)'],
], 'menuDiv');

makeElement([
  ['id', 'menuSpace'],
  ['style', 'zIndex', '10'],
  ['style', 'position', 'fixed'],
  ['style', 'top', '0em'],
  ['style', 'left', '0em'],
  ['style', 'width', '15em'],
  ['style', 'height', '3em'],
  ['style', 'backgroundColor', 'white'],
], 'menuDiv');

makeElement([
  ['id', 'container'],
  ['style', 'display', 'inline-block'],
  ['style', 'position', 'absolute'],
  ['style', 'top', '3em'],
  ['style', 'left', '15em'],
  ['style', 'right', '0em'],
  ['style', 'padding', '1em'],
  ['style', 'backgroundColor', 'rgba(200, 200, 200, 0.4)'],
], 'fullScreen');

for (let i = 0; i < 20; ++i) {
  makeElement([
    ['id', `videoListDiv${i}`],
    ['className', 'videoList'],
    ['href', '#'],
    ['style', 'position', 'relative'],
    ['style', 'display', 'inline-block'],
    ['style', 'float', 'left'],
    ['style', 'width', `${100 / 3}%`],
    ['style', 'height', '20em'],
    ['style', 'textDecoration', 'none'],
  ], 'container');

  makeElement([
    ['id', `videoList${i}`],
    ['className', 'videoList'],
    ['href', '#'],
    ['onmouseenter', () => { backgroundOpacity(`videoList${i}`); }],
    ['onmouseleave', () => { backgroundOpacity(`videoList${i}`, false); }],
    ['style', 'position', 'absolute'],
    ['style', 'display', 'inline-block'],
    ['style', 'top', '1em'],
    ['style', 'left', '1em'],
    ['style', 'right', '1em'],
    ['style', 'bottom', '1em'],
    ['style', 'textDecoration', 'none'],
    ['style', 'backgroundColor', 'rgba(200, 200, 200, 0.0)'],
  ], `videoListDiv${i}`, 'a');

  makeElement([
    ['className', 'videoListImage'],
    ['style', 'position', 'absolute'],
    ['style', 'display', 'inline-block'],
    ['style', 'top', '0em'],
    ['style', 'left', '0em'],
    ['style', 'right', '0em'],
    ['style', 'bottom', '50%'],
    ['style', 'backgroundImage', 'url(../images/video_image.png)'],
    ['style', 'backgroundSize', 'contain'],
    ['style', 'overflow', 'hidden'],
  ], `videoList${i}`);

  makeElement([
    ['id', `videoListText${i}`],
    ['innerHTML', `${i}번째 영상 텍스트`],
    ['style', 'position', 'absolute'],
    ['style', 'display', 'inline-block'],
    ['style', 'top', '50%'],
    ['style', 'left', '0em'],
    ['style', 'right', '0em'],
    ['style', 'bottom', '0em'],
    ['style', 'textDecoration', 'none'],
  ], `videoList${i}`, 'p');
}