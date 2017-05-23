$(document).foundation()
$('.sim-thumb').on('mouseover', function() {
  $('#main-product-image').attr('src', $(this).data('image'));
})
/*
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
})*/
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
      ],
    responsive:{
        0:{
            items:2

          /*  mouseDrag : false,*/


        },
        600:{
            items:3
          /*  mouseDrag :true,
            touchDrag :true*/
        },
        1100:{
            items:5
          /*  mouseDrag :true,
            touchDrag :true*/
        }
    }
})
