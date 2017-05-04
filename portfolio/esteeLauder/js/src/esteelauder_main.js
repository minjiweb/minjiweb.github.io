(function($){
    var bodyWidth = $('#esteelauderwrap').width();
    var pwidth = bodyWidth - 64;
  
  function WinView(){
    //console.log(pwidth);
    $('.gnb').css({width:pwidth});
    
    
    $('.menu_icon>a').on('click', function(e){
      e.preventDefault();
      $('.gnb').stop().slideToggle();
    });
    
    
    function GnbView(){
    //console.log(pwidth);
    $('.gnb_2_hover').css({width:pwidth});
    
    
    $('.gnb_2>a').on('mouseenter', function(e){
      e.preventDefault();
      $('.gnb_2_hover').stop().slideToggle();
      $('.gnb').css({backgroundColor:'transparent'});
    });
      
    }
    GnbView();
  }

  WinView();
  $(window).on('resize', WinView);
  
  
  
 // modal -------------------------------------------------------------------

  var mbBtn = $('.login');
  var mBox = $('.modal');
  // 모달 창을 띄우려는 버튼 클릭 ...
  mbBtn.on('click', function(e){
    // a의 기본 이벤트 제거
    e.preventDefault();
    // 클릭한 li의 순서 확인
    // .eq() : 몇번째 선택  ,    .index() : 몇번째인지 확인
    var btnLi = $(this).index();
//    console.log(btnLi);  // 순서확인
    // .modal 나타나기(배경 어둡게)
    mBox.fadeIn();
    // .modal>div 순서에 맞는것을 나타나게하기
    mBox.find('div').eq(btnLi).fadeIn();
  
  // 닫기 버튼 생성
  mBox.find('div').prepend('<button type="button" class="mClose">닫기</button>');
  $('.mClose').css({width:'3.5em', height:'3.5em', backgroundColor:'#040a2c',
                   position:'absolute', top:'0.2em', right:'0.2em', zIndex:500,
                   color:'#fff', fontWeight:'bold'});
  
  var mClose = $('.mClose');
  mClose.on('click', function(e){
    e.preventDefault();
    mBox.find('div').find('.mClose').remove();
    mBox.hide();
   
  });
  });
  
  
})(this.jQuery);