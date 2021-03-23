


$(function(){

    //slider1
    $('.slider1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1000,
        arrows:true,
       speed:2000,
       dots:true,
        prevArrow:'.left',
        nextArrow:'.right',
      });
    //slider2
    $('.slider2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows:false,
       speed:2000,

      });



          //slider3
          $('.slider3-overlay').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1000,
            arrows:false,
           speed:2000,
    
          });


                  //slider4
                  $('.slider4').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 1000,
                    arrows:false,
                   speed:2000,
            
                  });
        



});