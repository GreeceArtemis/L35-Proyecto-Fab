$(document).foundation()
$('.sim-thumb').on('mouseover', function() {
  $('#main-product-image').attr('src', $(this).data('image'));
})
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    lazyLoad:false,
    dots: false,
    navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
      ],
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1100:{
            items:5
        }
    }
})
