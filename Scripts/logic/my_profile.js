let preScrollTop = 0;

function autoScroll (scrollTop, windowHeight, goalTop) {
  if (scrollTop > goalTop - windowHeight && scrollTop < goalTop) {
    if (preScrollTop < scrollTop) {
      if (scrollTop + 20 > goalTop) {
        return goalTop;
      } else {
        return scrollTop + 20;
      }
    } else if (preScrollTop > scrollTop) {
      if (scrollTop - 20 < goalTop - windowHeight) {
        return goalTop - windowHeight;
      } else {
        return scrollTop - 20;
      }
    }
  }
  return 0;
}

window.addEventListener ('scroll', () => {
  let nowScroll = autoScroll (
    document.documentElement.scrollTop, 
    innerHeight, 
    document.getElementById('portfolioScreen').offsetTop
  );
  if (nowScroll) document.documentElement.scrollTop = nowScroll;
  else {
    nowScroll = autoScroll (
      document.documentElement.scrollTop, 
      innerHeight, 
      document.getElementById('addressAndPhonenumber').offsetTop
    );
    if (nowScroll) document.documentElement.scrollTop = nowScroll;
    else preScrollTop = document.documentElement.scrollTop;
  }
});