  (function($){   
 var timed = 500;
 var img_box = $('.img_box');
 var bannerLast = img_box.children('li:last');
 // 배너박스 마지막 리스트는 처음으로 이동
 // 배너광고의 첫번째것이 화면에 보이게
 img_box.prepend(bannerLast);
 // bannerLast.prependTo(bannerBox); // 위내용과 동일

 // -----------------------------------------------------------------
/*
* 1. 왼쪽 버튼을 클릭하면,
* 2. 광고배너박스의 왼쪽그림이 오른쪽으로 이동(박스 통으로 이동)
* 3. 마지막 배너는 다시 처음으로 이동,
* 4. 박스는 다시 처음처럼 margin-left:-100% 처리
*/

// 왼쪽 버튼
var l_btn = $('.l_btn');
// 왼쪽 버튼 클릭하면
l_btn.on('click', function(e){
    // 버튼에서 일어나는 이벤트 삭제
    e.preventDefault();

    // 박스내의 마지막 개체 재설정
    var bannerLast = img_box.children('li:last');
    // 광고배너박스 오른쪽으로 이동 후(function(){})
    img_box.stop().animate({marginLeft:0},timed, function(){
        // 마지막 개체를 처음으로 이동(애니X)
        img_box.prepend(bannerLast);
        // 동시에 박스를 처음 설정으로 변경
        img_box.css({marginLeft:'-100%'});
    });
});
// --------------------------------------------------------------
// 오른버튼
var r_btn = $('.r_btn');
// 오른쪽 버튼 클릭하면
r_btn.on('click', function(e){
    // 버튼에서 일어나는 이벤트 삭제
    e.preventDefault();

    // 박스내의 첫 개체 재설정
    var bannerfirst = img_box.children('li:first');
    // 광고배너박스 오른쪽으로 이동 후(function(){})
    img_box.stop().animate({marginLeft:'-200%'},timed, function(){
        // 마지막 개체를 처음으로 이동(애니X)
        img_box.append(bannerfirst);
        // 동시에 박스를 처음 설정으로 변경
        img_box.css({marginLeft:'-100%'});
    });
});
     
     
   })(this.jQuery);
 
