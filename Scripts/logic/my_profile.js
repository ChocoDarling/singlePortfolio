
window.addEventListener ('scroll', () => {
    let scrollLocation = document.documentElement.scrollTop; // 현재 스크롤바 위치
    let windowHeight = window.innerHeight; // 스크린 창
    let fullHeight = document.body.scrollHeight; //  margin 값은 포함 x
    console.log(scrollLocation)
    console.log(windowHeight)
    console.log(fullHeight)
    let nowTop = document.getElementById('portfolioScreen').offsetTop;
    console.log(nowTop)
    if (scrollLocation + innerHeight > 
        document.getElementById('portfolioScreen').offsetTop){
            document.documentElement.scrollTop = document.getElementById('portfolioScreen').offsetTop;
        }
    if(scrollLocation + windowHeight >= fullHeight){
        console.log('끝')
        console.log(scrollLocation)
        console.log(windowHeight)
        console.log(fullHeight)
    }
  })