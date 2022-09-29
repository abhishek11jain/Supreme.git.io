// First Slider
$(document).ready(function() {
    var owl = $("#owl-demo");
    owl.owlCarousel({
    autoPlay: 3000,
    items : 4, //10 items above 1000px browser width
    itemsDesktop : [1000,4], //5 items between 1000px and 901px
    itemsDesktopSmall : [900,4], // 3 items betweem 900px and 601px
    itemsTablet: [600,1], //2 items between 600 and 0;
    itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
    pagination:false
  });
  $(".next").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  })
});


// Second Slider
$(document).ready(function() {
    var owl = $("#owl-demo2");
    owl.owlCarousel({
    autoPlay: 2500,
    items : 5, //10 items above 1000px browser width
    itemsDesktop : [1000,4], //5 items between 1000px and 901px
    itemsDesktopSmall : [900,4], // 3 items betweem 900px and 601px
    itemsTablet: [600,1], //2 items between 600 and 0;
    itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
    pagination:false
  });
  $(".next").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  })
});


// Third Slider
$(document).ready(function() {
var owl = $("#owl-demo1");
owl.owlCarousel({
autoPlay: 3000,
items : 4, //10 items above 1000px browser width
itemsDesktop : [1000,4], //5 items between 1000px and 901px
itemsDesktopSmall : [900,4], // 3 items betweem 900px and 601px
itemsTablet: [600,1], //2 items between 600 and 0;
itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
pagination:false
});
$(".next").click(function(){
owl.trigger('owl.next');
})
$(".prev").click(function(){
owl.trigger('owl.prev');
})
});