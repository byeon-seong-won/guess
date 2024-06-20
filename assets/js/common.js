// 카테고리 공통



// 메뉴클릭
// $('.sc-cate .cate-item a').click(function(e) {
//   e.preventDefault();
//   var menu = $(this).data('tab');
//   var index = $(this).parent('li').index();
//   $(menu).addClass('on').siblings().removeClass('on');
//   $('.sc-cate .cate-item').eq(index).addClass('on').siblings().removeClass('on');
// })



// 메뉴 반복
// var tabLength = $('.sc-cate .cate-item').length; //4
// var tabs = document.querySelectorAll('.sc-cate .cate-item a');
// var currentIndex = 0;

// function clickTab(index) { // 내가원하는 인덱스전달시 클릭해줘라
//   tabs[index].click(function(e) {
//     e.preventDefault();
//   })
// }

// function nextTab() {  //1.5초 뒤마다 호출되는 코드
//   currentIndex++;
//   if (currentIndex >= tabLength) {
//       currentIndex = 0; 
//   }
//   clickTab(currentIndex);
// }
// clickTab(currentIndex); //초기실행 처음

// timer = setInterval(nextTab, 1500); //초기실행 1.5초 뒤마다 호출되는 코드

// $('.cate-inner').hover(function() {
//   clearInterval(timer)
// }, function() {
//   timer = setInterval(nextTab, 1500);
// })







// 카테고리 컨텐츠 공통 
