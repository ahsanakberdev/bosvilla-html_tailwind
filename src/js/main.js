
$( function() {
  $( "#datepicker" ).datepicker();
});

$('.experience-slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
});

$('.discover-slider').slick({
    arrows : true,
    dots : true,
    slidesToShow: 3,
    slidesToScroll : 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
});

$('.about-slider').slick({
  centerMode: true,
  slidesToShow: 2,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 1
      }
    }
  ]
});


function openMenu(){
    document.getElementById("mobileNav").classList.toggle("active");
}
    