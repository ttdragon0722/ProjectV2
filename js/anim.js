TL = gsap.timeline();

// document
// https://greensock.com/docs/v3/GSAP/Timeline
// https://greensock.com/docs/v3/Plugins/ScrollTrigger

$(document).ready(function () {
});


$(window).on('load', function () {
    TL.set(
        '.main_subtitle',
        {
            y:'-30%'
        }
    ).set(
        '.main_wrap_group',
        {
            y:'-30%'
        }
    ).set(
        '.keep_read_btn',
        {
            y:'-30%'
        }
    )

    TL.to(
        '.main_title',
        {
            opacity: 1,
            duration: 1,
            y:0
        }
    ).to(
        '.main_subtitle',
        {
            opacity: 1,
            duration: 1,
            y:0
        },
        '>'
    ).to(
        '.main_wrap_group',
        {
            opacity: 1,
            duration: 1,
            y:0
        },
        '<'
    ).to(
        '.keep_read_btn',
        {
            opacity: 1,
            duration: 1,
            y:0
        },
        '<'
    );


    gsap.to(
        '.announce',
        {
            scrollTrigger:{
                trigger:'.announce',
                start:'top center'
            },
            opacity:1,
            duration:0.5
        }
    );
    gsap.to(
        '.service_item',
        {
            scrollTrigger:{
                trigger:'.service_item',
                start:'top center'
            },
            opacity:1,
            duration:1,
            stagger:0.2
        }
    );

});