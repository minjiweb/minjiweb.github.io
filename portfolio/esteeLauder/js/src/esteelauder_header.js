(function($){
  var headBox=$('#headBox');
  $('.headBoxColor').css({backgroundColor:'rgba(4,10,43,0.9)'});
  headBox.css({backgroundColor:'rgba(0,0,0,0)'});
  
//  console.log($('#bestseller').offset().top);
  
   $(window).on('scroll',function(e){
     e.preventDefault();
     if($(this).scrollTop()>=550){
       headBox.css({backgroundColor:'rgba(4,10,43,0.9)'});
//       headBox.addClass('headBoxColor',300);    
        }else{
        headBox.css({backgroundColor:'rgba(0,0,0,0)'});
//        headBox.removeClass('headBoxColor',300);
        }
    
    
  });

  
})(this.jQuery);