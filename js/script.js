const slideBanner=$('.bannerArea .area');
const slideBannerList=$('.bannerArea .area li');
const slideWidth=slideBannerList.width();
let setIntervalId;

bannerSlide()
function bannerSlide(){
    setIntervalId=setInterval(() =>{
        slideBanner.stop().animate({left:-(slideWidth+15)},500,function(){
            $('.bannerArea .area li:first').insertAfter('.bannerArea .area li:last');
            slideBanner.css({left: 0})
        })
    },2000)
}

$(function(){
    $('.bxslider').bxSlider({
      mode: 'fade',
      captions:false,
      auto:true,
      
      pager: true,
      stopAutoOnClick: true,
      
    });
  });
  