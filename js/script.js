
$(function(){
   
    $('.banner_clider').slick({
        arrows: false,
        dots: true,
        autoplay: true
    });


    $('.news_box_wrapper').slick({
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        arrows:false, 
        autoplay:true
      });
})