document.body.style.margin = '0px';

makeElement([
  ['id', 'fullScreen'],
]);

makeElement([
  ['id', 'topDiv'],
  ['style', 'zIndex', '2000'],
  ['style', 'position', 'relative'],
  ['style', 'margin', 'auto'],
  ['style', 'height', '200px'],
  ['style', 'borderBottom', '1px solid lightgray'],
  ['style', 'boxShadow', '0px 10px 10px 0px lightgray'],
], 'fullScreen');

makeElement([
  ['id', 'topStartPageDiv'],
  ['style', 'margin', 'auto'],
  ['style', 'width', '1200px'],
  ['style', 'height', '30px'],
  ['style', 'paddingTop', '10px'],
], 'topDiv');

makeElement([
  ['id', 'topHappyBean'],
  ['href', './tempPage.html'],
  ['innerHTML', '해피빈'],
  ['style', 'margin', 'auto 5px'],
  ['style', 'float', 'right'],
  ['style', 'color', 'lightgray'],
  ['style', 'textDecoration', 'none'],
], 'topStartPageDiv', 'a');

makeElement([
  ['id', 'topJuniorNaver'],
  ['href', './tempPage.html'],
  ['innerHTML', '쥬니어네이버'],
  ['style', 'margin', 'auto 5px'],
  ['style', 'float', 'right'],
  ['style', 'color', 'lightgray'],
  ['style', 'textDecoration', 'none'],
], 'topStartPageDiv', 'a');

makeElement([
  ['id', 'topStartPageDivDiv'],
  ['innerHTML', '|'],
  ['style', 'margin', 'auto 5px'],
  ['style', 'float', 'right'],
  ['style', 'color', 'gray'],
  ['style', 'fontSize', '15px'],
], 'topStartPageDiv', 'p');

makeElement([
  ['id', 'topStartPage'],
  ['href', './tempPage.html'],
  ['innerHTML', '네이버를 시작페이지로'],
  ['style', 'margin', 'auto 5px'],
  ['style', 'float', 'right'],
  ['style', 'color', 'black'],
  ['style', 'textDecoration', 'none'],
], 'topStartPageDiv', 'a');

makeElement([
  ['id', 'topStartPageLogo'],
  ['style', 'marginTop', '2px'],
  ['style', 'marginLeft', '2px'],
  ['style', 'float', 'right'],
  ['style', 'color', 'black'],
  ['style', 'width', '18px'],
  ['style', 'height', '18px'],
  ['style', 'borderRadius', '15px'],
  ['style', 'boxShadow', '0px 0px 10px lightgray'],
], 'topStartPage');

makeElement([
  ['id', 'topStartPageLogoText'],
  ['innerHTML', '>'],
  ['style', 'marginLeft', '5px'],
  ['style', 'fontSize', '11px'],
  ['style', 'fontWeight', '900'],
  ['style', 'color', 'black'],
], 'topStartPageLogo');

makeElement([
  ['id', 'topSearghDiv'],
  ['style', 'margin', 'auto'],
  ['style', 'width', '1180px'],
  ['style', 'height', '90px'],
  ['style', 'padding', '10px'],
], 'topDiv');

makeElement([
  ['id', 'homePageLink'],
  ['href', './tempPage.html'],
  ['style', 'margin', 'auto'],
], 'topSearghDiv', 'a');

makeElement([
  ['id', 'homePageLogo'],
  ['src', '../images/naver_hat.png'],
  ['alt', 'naver_hat.png'],
  ['style', 'float', 'left'],
  ['style', 'height', '80px'],
], 'homePageLink', 'img');

makeElement([
  ['id', 'homePageText'],
  ['innerHTML', 'NAVER'],
  ['style', 'margin', 'auto'],
  ['style', 'float', 'left'],
  ['style', 'height', '80px'],
  ['style', 'fontSize', '60px'],
  ['style', 'fontWeight', '900'],
  ['style', 'color', 'rgb(0, 200, 80)'],
], 'homePageLink', 'p');

makeElement([
  ['id', 'searchDiv'],
  ['style', 'margin', '20px'],
  ['style', 'float', 'left'],
], 'topSearghDiv');

makeElement([
  ['id', 'searchKeywordDiv'],
  ['style', 'margin', 'auto'],
  ['style', 'float', 'left'],
  ['style', 'width', '600px'],
  ['style', 'height', '50px'],
  ['style', 'border', '2px solid rgb(0, 200, 80)'],
], 'searchDiv');

makeElement([
  ['id', 'searchStartDiv'],
  ['style', 'margin', 'auto'],
  ['style', 'float', 'left'],
  ['style', 'width', '50px'],
  ['style', 'height', '50px'],
  ['style', 'backgroundColor', 'rgb(0, 200, 80)'],
  ['style', 'border', '2px solid rgb(0, 200, 80)'],
], 'searchDiv');

makeElement([
  ['id', 'topMenuDiv'],
  ['style', 'margin', 'auto'],
  ['style', 'height', '50px'],
  ['style', 'borderTop', '1px solid lightgray'],
], 'topDiv');

makeElement([
  ['id', 'topMenu'],
  ['style', 'margin', 'auto'],
  ['style', 'width', '1200px'],
  ['style', 'height', '50px'],
], 'topMenuDiv');

for (let i = 0; i < 16; ++i) {
  makeElement([
    ['id', `topMenuLinkDiv${i}`],
    ['className', 'topMenuLinkDiv'],
    ['style', 'margin', '10px auto'],
    ['style', 'textAlign', 'center'],
    ['style', 'float', 'left'],
    ['style', 'width', '60px'],
    ['style', 'height', '30px'],
  ], 'topMenu');

  makeElement([
    ['id', `topMenuLink${i}`],
    ['className', 'topMenuLink'],
    ['href', './tempPage.html'],
    ['style', 'textDecoration', 'none'],
    ['style', 'fontSize', '17px'],
    ['style', 'fontWeight', '900'],
    ['style', 'color', 'black'],
  ], `topMenuLinkDiv${i}`, 'a');
  if (i < 7) document.getElementById(`topMenuLink${i}`).style.color = 'rgb(0, 200, 80)'
}
document.getElementById('topMenuLink0').innerHTML = '메일';
document.getElementById('topMenuLink1').innerHTML = '카페';
document.getElementById('topMenuLink2').innerHTML = '블로그';
document.getElementById('topMenuLink3').innerHTML = '지식in';
document.getElementById('topMenuLink4').innerHTML = '쇼핑';
document.getElementById('topMenuLink5').innerHTML = 'Pay';
document.getElementById('topMenuLink6').innerHTML = 'TV';
document.getElementById('topMenuLink7').innerHTML = '사전';
document.getElementById('topMenuLink8').innerHTML = '뉴스';
document.getElementById('topMenuLink9').innerHTML = '증권';
document.getElementById('topMenuLink10').innerHTML = '부동산';
document.getElementById('topMenuLink11').innerHTML = '지도';
document.getElementById('topMenuLink12').innerHTML = '영화';
document.getElementById('topMenuLink13').innerHTML = 'VIBE';
document.getElementById('topMenuLink14').innerHTML = '책';
document.getElementById('topMenuLink15').innerHTML = '웹튠';

makeElement([
  ['id', 'topMenuPlusLink'],
  ['style', 'margin', '13px auto 7px'],
  ['style', 'textAlign', 'center'],
  ['style', 'float', 'left'],
  ['style', 'width', '60px'],
  ['style', 'height', '30px'],
], 'topMenu');

makeElement([
  ['id', 'topMenuPlus'],
  ['href', '#'],
  ['innerHTML', '더보기'],
  ['onclick', () => { menuPlus(); }],
  ['style', 'textDecoration', 'none'],
  ['style', 'fontSize', '14px'],
  ['style', 'fontWeight', '500'],
  ['style', 'color', 'black'],
], 'topMenuPlusLink', 'a');

makeElement([
  ['id', 'topMenuPlusDiv'],
  ['style', 'display', 'none'],
  ['style', 'margin', 'auto'],
  ['style', 'borderBottom', '1px solid lightgray'],
  ['style', 'backgroundColor', 'white'],
  ['style', 'boxShadow', '0px 10px 10px 0px lightgray'],
], 'topDiv');

makeElement([
  ['id', 'topMenuPlusTable'],
  ['style', 'margin', 'auto'],
  ['style', 'width', '1150px'],
  ['style', 'height', '150px'],
  ['style', 'padding', '15px 0px'],
], 'topMenuPlusDiv', 'table');

makeElement([
  ['id', 'topMenuPlusTr'],
], 'topMenuPlusTable', 'tr');

const arrMenuPlus = [
  ['<b>ㄱ-ㅁ</b>', ['날씨', '네이버 예약', '네이버플러스 멤버십', '뉴스', '데이터랩', '메모', '', '']],
  ['<b>ㅂ-ㅅ</b>', ['밴드', '부동산', '북마크', '소프트웨어', '스포츠', '시리즈', '시리즈on', '']],
  ['<b>ㅇ</b>', ['영화', '오디오클립', '오피스', '웨일', '웹소설', '웹툰', '인플루언서 검색', '']],
  ['<b>ㅈ-ㅊ</b>', ['자동차', '주소록', '증권', '지도', '지식백과', '책', '', '']],
  ['<b>ㅋ-ㅎ</b>', ['캘린더', '클라우드', '클로바더빙', '파파고', '포스트', '학술정보', '항공권', '호텔']],
  ['<b>A-Z</b>', ['Keep', 'modoo!', 'My구독', 'PC게임', 'TV연예', 'VIBE', 'V LIVE', '']],
  ['<b>사전</b>', ['사전', '국어사전', '영어/영영사전', '일본어사전', '중국어사전', '한자사전', '', '']],
];

for (let i = 0; i < 7; ++i) {
  makeElement([
    ['id', `topMenuPlusTd${i}`],
    ['className', 'topMenuPlusTd'],
    ['style', 'borderRight', '1px solid lightgray'],
  ], 'topMenuPlusTr', 'td');
  
  if (i % 7 === 0) document.getElementById(`topMenuPlusTd${i}`)
    .style.borderLeft = '1px solid lightgray';

  makeElement([
    ['id', `topMenuPlusP${i}`],
    ['style', 'margin', '0px'],
    ['style', 'padding', '0px 15px 5px'],
    ['style', 'textDecoration', 'none'],
    ['style', 'lineHeight', '25px'],
    ['style', 'fontSize', '14px'],
  ], `topMenuPlusTd${i}`, 'p');
  
  arrMenuPlus[i].forEach(e => {
    if (typeof e === 'string') {
      makeElement([
        ['id', `topMenuPlusSpan${i}`],
        ['href', '#'],
        ['innerHTML', `${e}<br>`],
        ['style', 'textDecoration', 'none'],
        ['style', 'fontWeight', '900'],
        ['style', 'fontSize', '14px'],
        ['style', 'color', 'black'],
      ], `topMenuPlusP${i}`, 'span');
    } else {
      e.forEach(ee => {
        makeElement([
            ['className', 'topMenuPlusA'],
            ['href', '#'],
            ['innerHTML', `${ee}<br>`],
            ['style', 'textDecoration', 'none'],
            ['style', 'fontSize', '14px'],
            ['style', 'color', 'black'],
          ], `topMenuPlusP${i}`, 'a');
      })
    }
  });
}



makeElement([
  ['id', 'middleDiv'],
  ['style', 'position', 'relative'],
  ['style', 'zIndex', '1000'],
  ['style', 'margin', 'auto'],
  ['style', 'width', '1150px'],
  ['style', 'height', '500px'],
  ['style', 'padding', '20px'],
], 'fullScreen');

makeElement([
  ['id', 'middleLeftDiv'],
  ['style', 'float', 'left'],
  ['style', 'width', '700px'],
  ['style', 'height', '500px'],
  ['style', 'border', '1px solid black'],
], 'middleDiv');

makeElement([
  ['id', 'middleRightDiv'],
  ['style', 'float', 'right'],
  ['style', 'width', '400px'],
  ['style', 'height', '500px'],
  ['style', 'border', '1px solid black'],
], 'middleDiv');

makeElement([
  ['id', 'bottomDiv'],
], 'fullScreen');
