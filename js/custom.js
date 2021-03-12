$(function(){
  var backToTop = $('.back-to-top');

 // window scroll--
  $(window) .scroll(function(){
    var scrolling = $(this).scrollTop(); 

    if(scrolling > 600){
      backToTop.fadeIn();
    }
    else{
      backToTop.fadeOut();
    }

    if(scrolling > 200){
      $('.menu-bg').addClass('fixed-nav');
    }
    else{
      $('.menu-bg').removeClass('fixed-nav');
    }

  });


  backToTop.click(function(){
      $('html,body').animate({
        scrollTop:0,
      },1500);
  
      


  });


  new WOW().init();


  $(".banner-slick").slick({
    arrows: false,
    autoplay: true,
    dots: true,
    autoplaySpeed: 1500,
    
  });

 


 
});


var typed = new Typed('#type', {
  strings: ["Refresh your mind with NIGHT BIRD.", "Enjoy with your friends NIGHT BIRD."],
  typeSpeed: 100,
  smartBackspace: true,
  backSpeed: 100,
});





  //    events section js

  $('.testimonial-banner').parallax({imageSrc: 'images/testtimonial-banner.jpg'});
   

  //gallery section js


  //    testimonial section js

$(".testimonial-banner").slick({

  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 1500,
  dots: false,
  prevArrow: "<i class='fa fa-chevron-left slick-prev'></i>",
  nextArrow: "<i class='fa fa-chevron-right slick-next'></i>",

});






 var h = '<audio controls src="./audio-test-01.mp3"></audio>'
   $('#app').html(h)

 maudio({
    obj:'audio',
    fastStep:10
 })

$('audio').on('abort',function(){
  console.log('abort')
})

$('audio').on('canplay',function(){
  console.log('canplay')
})

$('audio').on('canplaythrough',function(){
  console.log('canplaythrough')
})

$('audio').on('durationchange',function(){
  console.log('durationchange')
})

$('audio').on('emptied',function(){
  console.log('emptied')
})

$('audio').on('ended',function(){
  console.log('ended')
})

$('audio').on('error',function(){
  console.log('error')
})

$('audio').on('loadeddata',function(){
  console.log('loadeddata')
})

$('audio').on('loadedmetadata',function(){
  console.log('loadedmetadata')
})

$('audio').on('loadstart',function(){
  console.log('loadstart')
})

$('audio').on('pause',function(){
  console.log('pause')
})

$('audio').on('play',function(){
  console.log('play')
})

$('audio').on('playing',function(){
  console.log('playing')
})

$('audio').on('progress',function(){
  console.log('progress')
})

$('audio').on('ratechange',function(){
  console.log('ratechange')
})

$('audio').on('seeked',function(){
  console.log('seeked')
})

$('audio').on('seeking',function(){
  console.log('seeking')
})

$('audio').on('stalled',function(){
  console.log('stalled')
})

$('audio').on('suspend',function(){
  console.log('suspend')
})

$('audio').on('timeupdate',function(){
  console.log('timeupdate')
})

$('audio').on('volumechange',function(){
  console.log('volumechange')
})

$('audio').on('waiting',function(){
  console.log('waiting')
})


// $('audio')[0].play()





//   $(".gallery-iteam").slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     arrows: true,
//     autoplay: true,
//     autoplaySpeed: 1500,
//     dots: false,
//     prevArrow: "<i class='fa fa-chevron-left slick-prev'></i>",
//     nextArrow: "<i class='fa fa-chevron-right slick-next'></i>",
    
// });



//   $(".djs-content").slick({
//     infinite: true,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     arrows: true,
//     autoplay: true,
//     autoplaySpeed: 1500,
//     dots: false,
//     prevArrow: "<i class='fab fa-chevron-left slick-prev'></i>",
//     nextArrow: "<i class='fab fa-chevron-right slick-next'></i>",
    
// });


