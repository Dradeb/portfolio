$(document).ready(function(){

    gsap.registerPlugin(ScrollTrigger);
    sal({
        threshold: 0.1,
        once: false
    });
    
    //Handle Menu
    $(".menu-item").click(function(){
        $(".menu-item.active").removeClass("active");
        $(this).addClass("active");
        
    })

    // TIMELINE SLIDER
    const viewport =document.querySelector('.timeline');
    const content = document.querySelector('.timeline-content');
    // const image = document.querySelector('.example3-image');

    const sb = new ScrollBooster({
        viewport,
        content,
        scrollMode: 'transform',
        direction:'horizontal',
        emulateScroll: true,
    });

    // image.addEventListener('load', () => {
    // // set viewport position to the center of an image
    // const offsetX = image.scrollWidth - viewport.offsetWidth;
    // const offsetY = image.scrollHeight - viewport.offsetHeight;
    // sb.setPosition({
    //     x: offsetX / 2,
    //     y: offsetY / 2
    // });
    // });
          

    //Gsap Animations -- section-1 
    // var tl = gsap.timeline( {} );
    gsap.fromTo(".me-ic-1", {y: -20}, {repeat:-1, repeatDelay: 1,yoyo:true,duration: 5,ease: Power4.easeNone,rotation:5, y: 20});
    gsap.fromTo(".me-ic-2", {y: -23}, {repeat:-1, repeatDelay: 1,yoyo:true,duration: 4,ease: Power4.easeNone,rotation:6, y: 14});
    gsap.fromTo(".me-ic-3", {y: -30}, {repeat:-1, repeatDelay: 0,yoyo:true,duration: 6,ease: Power4.easeNone,rotation:-6, y: 25});


   
    $("#gotosection-2").click(function () {
        gsap.to("body",  {backgroundColor: "#00111c", duration: 1, repeat: 0, yoyo: false});
        gsap.to("#myVideo",  {opacity: .5, duration: 1, repeat: 0, yoyo: false});
    });
    $("#gotosection-1").click(function () {
        gsap.to("#myVideo",  {opacity: 0, duration: 1, repeat: 0, yoyo: false});
        gsap.to("body",  {backgroundColor: "#ffff", duration: 1, repeat: 0, yoyo: false});
    });
    $("#gotosection-3").click(function () {
        gsap.to("#myVideo",  {opacity: 0, duration: 1, repeat: 0, yoyo: false});
        gsap.to("body",  {backgroundColor: "#ffff", duration: 1, repeat: 0, yoyo: false});
    });

    var ready = true ;
    $(".show").click(function(){

        if(!ready)
            return;

        $(".show.active").removeClass('active');
        $(this).addClass('active');

        ready = false ;
        $(".bord").css("transform-origin","left center");

        var tl = gsap.timeline({duration: 0,delay:0, ease: Power4.out, onComplete: function(){ $(".bord").css("transform-origin","right center")}});
        tl.to("#bord-1", {scaleX:1,duration:.4,delay:0}).to("#bord-2", {scaleX:1,duration:.3,delay:0}).to("#bord-3", {scaleX:1,duration:.2,delay:0});
        
        var tl2 = gsap.timeline({duration: 0,delay:1, ease: Power4.out,onComplete: function(){ ready = true}});
        tl2.to("#bord-1", {scaleX:0,duration:.4,delay:0}).to("#bord-2", {scaleX:0,duration:.3,delay:0}).to("#bord-3", {scaleX:0,duration:.2,delay:0});
    });

    $('.horizontal-cards').slick({
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerMode: true,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });
});