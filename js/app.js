$(document).ready(function(){

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
        emulateScroll: true
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

});