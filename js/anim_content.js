TL = gsap.timeline();

// document
// https://greensock.com/docs/v3/GSAP/Timeline
// https://greensock.com/docs/v3/Plugins/ScrollTrigger

// $(document).ready(function () {
// });


$(window).on('load', function () {
    TL.to(
        '.main_title',
        {
            opacity: 1,
            duration: 1,
            y:0
        }
    );

});