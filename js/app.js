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
        emulateScroll: false,
        shouldScroll :false,
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


    let sect2 = gsap.timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
          trigger: "#section2",
          pin: true,   // pin the trigger element while active
          start: "top top", // when the top of the trigger hits the top of the viewport
          end: "+=2000", // end after scrolling 500px beyond the start
          scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
         
        }
      });
      
        gsap.to("body",  {backgroundColor: "#00111c",
        scrollTrigger: {
            trigger: "#section2",
            end: "+=1000",
            start: "top 80%",
            scrub: true,
            pinSpacing: false,
            pin: false
          }
        });
        gsap.to("#myVideo",  {opacity: .5,
        scrollTrigger: {
            trigger: "#section2",
            end: "+=1000",
            start: "top 80%",
            scrub: true,
            pinSpacing: false,
            pin: false
          }
        });
        


      sect2.addLabel("start")
        .to(".timeline-content",{xPercent: -100 })
        .addLabel("end");
        

   
    let sect3 = gsap.timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
            trigger: "#section3",
            pin: true,   // pin the trigger element while active
            start: "top top", // when the top of the trigger hits the top of the viewport
            end: "+=500", // end after scrolling 500px beyond the start
            scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
            
        }
        });
        sect3.addLabel("start")
        .to("#myVideo",  {opacity: 0, duration: 1, repeat: 0, yoyo: false});


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

      // const swiper = new Swiper('.swiper', {
      //   // Optional parameters
      //   slidesPerView: max,
      //   direction: 'horizontal',
      //   loop: true,
      //   spaceBetween: 2,
      //   // freeMode: true,
      
      //   // If we need pagination
      //   // pagination: {
      //   //   el: '.swiper-pagination',
      //   // },
      
      //   // Navigation arrows
      //   navigation: {
      //     nextEl: '.swiper-button-next',
      //     prevEl: '.swiper-button-prev',
      //   },
      
      //   // And if we need scrollbar
      //   scrollbar: {
      //     el: '.swiper-scrollbar',
      //   },
      // });



      // PORTFOLIO


      let pf = gsap.timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
            trigger: "#section3",
            pin: false,   // pin the trigger element while active
            start: "top 30%", // when the top of the trigger hits the top of the viewport
            end: "+=100", // end after scrolling 500px beyond the start
            scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
            
        }
        });
        pf.addLabel("start")
        .to(".myPortfolio",  {paddingTop: 0, duration: 1, repeat: 0, yoyo: false});


});