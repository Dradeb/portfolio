
import { SplitText } from './splitText.js';





let ability1 = [
  ['JavaScript , Html , Css', 100],
  ['ASP Net', 80],
  ['Next js', 60 ],
  ['Mssql, Oracle, Mysql, MongoDB', 80],
  ['Git, Svn', 80]
];
let ability2 = [
  ['C# ,. Net Core , ASP .Net', 90],
  ['Linq , Entity Framework', 80],
  ['WPF , WCF', 100],
  ['Razor, Blazor', 70],
  ['Jenkins, Fortify, SonarQube', 70]
];

let ability3 = [
  ['Java ', 60],
  ['Dart , Flutter', 60]
];

let ability4 = [
  ['Unity 3D', 90],
  ['Unreal', 30],
  ['Blender', 40],
  ['AR Foundation, ARKIT, ARCORE', 40],
];



let characters = 
[
  ["The WebWizard","url(../img/ch1.png)","Aka the web developer","He weaves digital enchantments with lines of code to conjure seamless online experiences and magical user interfaces."],
  ["CSharp-Sorcerer","url(../img/ch2.png)","Aka the dotnet engineer","He casts powerful spells in the mystic language of C# to craft intricate and enchants applications"],
  ["MobileMaven-000","url(../img/ch3.png)","Aka the mobile developer","A masterful artisan who weaves apps with finesse, transforming ideas into seamless, user-centric experiences"],
  ["GameGuru","url(../img/ch4.png)","Aka the game developer","He architects virtual worlds and sculpts immersive experiences that captivate hearts and minds."]
]


$(document).ready(function(){


    $("#mskills").click(function(){
      
      $('html, body').animate({
        scrollTop: $("#section4").offset().top
    }, 500);

    });


    var index = 0;
    $(".leftab").click(function(){

      var active = $(".navigationElement.active").attr("index");
      active = parseInt(active);

      active--;
      if(active < 0)
        active = 3;
      $(".navigationElement[index="+active+"]").trigger("click");

    });

    $(".rightab").click(function(){

      var active = $(".navigationElement.active").attr("index");
      active = parseInt(active);

      active++;
      if(active > 3)
        active = 0;
      $(".navigationElement[index="+active+"]").trigger("click");

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



          

    //Gsap Animations -- section-1 
    // var tl = gsap.timeline( {} );
    gsap.fromTo(".me-ic-1", {y: -20}, {repeat:-1, repeatDelay: 1,yoyo:true,duration: 5,ease: Power4.easeNone,rotation:5, y: 20});
    gsap.fromTo(".me-ic-2", {y: -23}, {repeat:-1, repeatDelay: 1,yoyo:true,duration: 4,ease: Power4.easeNone,rotation:6, y: 14});
    gsap.fromTo(".me-ic-3", {y: -30}, {repeat:-1, repeatDelay: 0,yoyo:true,duration: 6,ease: Power4.easeNone,rotation:-6, y: 25});


   
      
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

gsap.timeline({
  scrollTrigger: {
    trigger: ".quote",
    onEnter: () => {
      $(".navigationElement.active").trigger( "click" );

    },
   
  }
})




$(".navigationElement").click(function(){

    $(".navigationElement").removeClass("active");
    $(this).addClass("active");
    var ab = $(this).attr("ability")
    loadCharacter(ab);
});




});



function loadCharacter(characterIndex)
{

  var ability
  switch (characterIndex) {
    case "1":
      ability = ability1
      break;
    case "2":
      ability = ability2
      break;
    case "3":
      ability = ability3
      break;
    case "4":
      ability = ability4
      break;
  
    default:
      break;
  }
  



  var characterName = $("#cname");
  var characterAka = $("#caka");
  var characterdesc = $("#cdesc");
  var characterAbs = $("#cabilities")
  var index  = 0 ;
  $("#cabilities").html("");


  ability.forEach(element => {

      index++;
      var ch = characters[characterIndex-1];
    
       // Create with jQuery

      
       characterName.html("");
       characterName.append("<h1 class='character-name' data-sal='slide-right' data-sal-duration='500' data-sal-delay='100' id='cname'>"+ch[0]+"</h1>")


       characterAka.html("");
       characterAka.append("<h3 class='character-aka' data-sal='slide-right' data-sal-duration='500' data-sal-delay='300' id='caka'>"+ch[2]+"</h3>")

      var desc = ch[3];

       characterdesc.html("");
       characterdesc.append("<p class='character-text' data-sal='slide-up' data-sal-duration='500' data-sal-delay='500' id='cdesc'>"+
        desc
      +"</p> ")



       var ability = $("<div class='ability' ></div>") ;
       

       var name = $("<h6  data-sal='slide-right' data-sal-duration='500' data-sal-delay='"+index+"00'>"+element[0]+"</h6>") ;

      
       var damage =$("<div class='damage'></div>") ;
      

       $(".full-character").removeClass("active"); 

       var val = $("<div class='value' max='"+element[1]+"'></div>");
       




      // var val = "<div class='value' style=' width:"+element[1]+"%;' ></div>";
      $("#cabilities").append(ability)
      ability.append(name);
      ability.append(damage);
      damage.append(val);
      loadbars(characterIndex-1);
      // $(".full-character").addClass("active");
  
  });

 
  function loadbars(index)
  {
    const vals = gsap.utils.toArray('.value');
    vals.forEach(v => {
      gsap.fromTo(v, { 
        width:"0%",
        },
        {
          width : v.getAttribute("max")+"%",
          onComplete: showCharacter(index)
        }
      )
    });
  
  }

  function showCharacter(index){
    $(".full-character").css("background-image",characters[index][1].replace(/["']/g, ""));       
    $(".full-character").addClass("active");
  }

  sal();


  

}
