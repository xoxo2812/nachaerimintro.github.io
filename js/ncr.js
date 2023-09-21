const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});

var $list = $('.mnu>li>a');
var $listImg = $('.view>li');
var $viewOpen = $('.viewOpen');
var $viewClose = $('.viewClose');

var nowIdx = 0;

$list.on('click',function(event){
  event.preventDefault();
  nowIdx = $list.index(this);

  $list.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');

  $listImg.fadeOut();
  $listImg.eq(nowIdx).fadeIn();
});


$viewOpen.on('click',function(event){

  event.preventDefault();
  var src = $(this).attr('href');

  $viewImg.find('a').css({
    backgroundImage : 'url('+src+')'
  });

  $viewImg.parent().fadeIn();
});

$viewClose.on('click',function(event){
  event.preventDefault();
  $viewImg.scrollTop(0)
  $view.fadeOut();
});

$view.on('click',function(){
  $viewImg.scrollTop(0)
  $view.fadeOut();
});