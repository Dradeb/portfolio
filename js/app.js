
import { SplitText } from './splitText.js';
$(document).ready(function(){


    $('.projects-bricks').masonry({
      itemSelector: '.grid-item',
      columnWidth: 400,
      isFitWidth: true
    });

    gsap.registerPlugin(ScrollTrigger,MotionPathPlugin);
    sal({
        threshold: 0.1,
        once: false
    });
    
    //Handle Menu
    $(".menu-item").click(function(){
        $(".menu-item.active").removeClass("active");
        $(this).addClass("active");
        
    })



    gsap.utils.toArray('.phase').forEach((element, index) => {
      // Create a timeline for each element
      const tl = gsap.timeline({
        scrollTrigger: {
          markers:false,
          trigger: element,
          start: 'top center',
          end:'+=500', // Adjust as needed
          scrub: 0, // Set to false in production
          // Add your custom event or animation here
          onEnter: () => {
            $(element).find(".start-mark-on").css( "opacity", 1 );
          
            $(element).find(".event.more").addClass("visible");
          },
          onEnterBack: () => {
            $(element).find(".start-mark-on").css( "opacity", 1 );
            $(element).find(".event.more").addClass("visible");
            // Your custom event or animation code goes here
          },
          onLeave:() =>{
            
            $(element).find(".start-mark-on").css( "opacity", 0 );
            
            $(element).find(".event.more").removeClass("visible");
          },
          onLeaveBack:() =>{
            
            $(element).find(".start-mark-on").css( "opacity", 0 );
            $(element).find(".event.more").removeClass("visible");
          }
        },
      });

      tl.to(element,{opacity: 1 })
  
      // Add your animations to the timeline if needed
      // tl.from(element, { opacity: 0, y: 50 });
    });





    // TIMELINE SLIDER
    // const viewport =document.querySelector('.timeline');
    // const content = document.querySelector('.timeline-content');
    // // const image = document.querySelector('.example3-image');

    // const sb = new ScrollBooster({
    //     viewport,
    //     content,
    //     scrollMode: 'transform',
    //     direction:'horizontal',
    //     emulateScroll: false,
    //     shouldScroll :false,
    // });

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
          trigger: ".my-quote",
          pin: false,   // pin the trigger element while active
          start: "top top", // when the top of the trigger hits the top of the viewport
          end: "+=100", // end after scrolling 500px beyond the start
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
            start: "top 20%",
            scrub: true,
            pinSpacing: false,
            pin: false
          }
        });
        
      // sect2.addLabel("start")
      //   .to(".timeline-content",{xPercent: -100 })
      //   .addLabel("end");
        

   
    let sect3 = gsap.timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
            trigger: "#section3",
            pin: false,   // pin the trigger element while active
            start: "top top", // when the top of the trigger hits the top of the viewport
            end: "+=200", // end after scrolling 500px beyond the start
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



        
        
          
          var $grid = $('.projects-bricks').isotope({
            itemSelector: ".grid-item"
          });

          $('.filter').on( 'click', function() {
            $(".filter").removeClass("active");

            $(this).addClass("active");
            var val = $(this).attr("data-type");
            if (val !== "*") {
              val = '[data-type="' + val + '"]';
            }
            $grid.isotope({ filter: val });

          });



          let bg = gsap.timeline({
            // yes, we can add it to an entire timeline!
            scrollTrigger: {
                trigger: "#section1",
                pin: false,   // pin the trigger element while active
                start: "top top", // when the top of the trigger hits the top of the viewport
                end: "+=400", // end after scrolling 500px beyond the start
                scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                
            }
            });

          bg.to(".quote",  {opacity: 1})
          
var text = document.querySelector(".quote-text h1")
var split = new SplitText(text);


gsap.timeline({
  scrollTrigger: {
    trigger: ".quote",
    start: "top 20%",
    end: "+=4%",
    pin: false,
    scrub: 2.75,
   
  }
})
.set(split.chars, {
  color: "#ffff",
  stagger: 0.1,
}, 0.1);



});