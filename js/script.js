 $(document).ready(function(){
//slaider1
$(".owl-carousel").owlCarousel({
   items:5,
   nav:true,
   loop:true,
   center:true,
   responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        576:{
            items:3,
          
        },
        768:{
            items:5,
            nav:false,
            
        },
        992:{
            items:5,
            nav:false,
            loop:false
        },
         1200:{
            items:5,
            nav:false,
            loop:false
        }


    }
        
});

//slick
$('.demo').slick({
    items:5,
   nav:true,
   loop:true,
   center:true,
});


 });