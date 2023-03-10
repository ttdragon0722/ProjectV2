$(document).ready(function () {
    // mobile menu animation gsap scrollTrigger
    const showAnim = gsap.from('.mobile_menu', {
        yPercent: -100,
        paused: true,
        duration: 0.2
    }).progress(1);
    ScrollTrigger.create({
        start: "top top",
        end: 99999,
        onUpdate: (self) => {
            self.direction === -1 ? showAnim.play() : showAnim.reverse()
        }
    })

    // modal open & close 
    // $('#lang_btn').click(function (e) {
    //     e.preventDefault();
    //     if ($('#lang_modal').css('display') === 'none') {
    //         fadeIn('#lang_modal');
    //         $('#lang_modal').css('display', "block");
    //         $('body').css('overflow-y', 'hidden');

    //     } else {
    //         fadeOut('#lang_modal');
    //         $('body').css('overflow-y', 'scroll');
    //     }
    // });

    // $('#footer_lang_btn').click(function (e) {
    //     e.preventDefault();
    //     if ($('#lang_modal').css('display') === 'none') {
    //         fadeIn('#lang_modal');
    //         $('#lang_modal').css('display', "block");
    //         $('body').css('overflow-y', 'hidden');

    //     } else {
    //         fadeOut('#lang_modal');
    //         $('body').css('overflow-y', 'scroll');
    //     }
    // });

    // $('#lang_modal').click(function (event) {
    //     if (event.target === this) {
    //         fadeOut('#lang_modal');
    //         $('body').css('overflow-y', 'scroll');
    //     }
    // })


    //  ========== mobile menu ================
    // mobile menu open & close
    $('.menu_btn').click(function (e) {
        e.preventDefault();
        if ($('.mobile_menu_bg').css('display') === 'none') {
            fadeIn('.mobile_menu_bg');
            slideIn('.mobile_menu_group');
            fadeIn('.mobile_menu_item')
            $('.mobile_menu_bg').css('display', 'block');
            $('body').css('overflow-y', 'hidden');
        } else {
            fadeOut('.mobile_menu_bg');
            $('body').css('overflow-y', 'scroll');
        };
    });
    $('.mobile_menu_bg').click(function (event) {
        if (event.target === this) {
            slideOut('.mobile_menu_group');
            fadeOut('.mobile_menu_bg');
            $('body').css('overflow-y', 'scroll');
        };
    })
    // mobile menu dropdown setup + button
    $.ajax({
        type: "GET",
        url: "/jsons/link.json",
        data: {},
        dataType: "json",
        success: function (response) {

            // main page menu load
            for (let i = 0; i < response["links"].length; i++) {
                if (response["links"][i]["dropdown"].length) {
                    $(".main_wrap_group").append(
                        `<div class="main_wrap">
                        <div class="main_wrap_btn">${response["links"][i]["title"]}<i class="fa-solid fa-caret-down"></i></div>
                        <div class="wrap_dropdown"></div></div>`
                    );

                    for (let dropI = 0;dropI < response["links"][i]["dropdown"].length;dropI++) {
                        $(".wrap_dropdown").last().append(
                            `<a href="${response["links"][i]["dropdown"][dropI]["link"]}"><div>${response["links"][i]["dropdown"][dropI]["title"]}</div></a>`
                        );
                    }


                } else {
                    $(".main_wrap_group").append(
                        `<div class="main_wrap"><a href="${response["links"][i]["link"]}"><div class="main_wrap_btn">${response["links"][i]["title"]}</div></a></div>`);
                }
            };


            // mobile menu load
            for (let i = 0; i < response["links"].length; i++) {
                if (response["links"][i]["dropdown"].length) {
                    $(".mobile_menu_group").append(
                        `<div class="mobile_menu_item"><div class="mobile_dropdown">${response["links"][i]["title"]}<i class="fa-solid fa-chevron-down"></i></div><div class="mobile_dropdown_items"></div></div>`
                    );

                    for (let dropI = 0;dropI < response["links"][i]["dropdown"].length;dropI++) {
                        $(".mobile_dropdown_items").last().append(
                            `<a href="${response["links"][i]["dropdown"][dropI]["link"]}"><div class="mobile_menu_item">${response["links"][i]["dropdown"][dropI]["title"]}</div></a>`
                        );
                    }


                } else {
                    $(".mobile_menu_group").append(
                        `<div class="mobile_menu_item"><a class="mobile_menu_link" href="${response["links"][i]["link"]}"><div>${response["links"][i]["title"]}</div></a></div>`);
                }
            };
            $('.mobile_dropdown').click(function (e) {
                e.preventDefault();
                console.log("click");
                if ($(this).siblings('.mobile_dropdown_items').css('display') === 'none') {
                    $(this).siblings('.mobile_dropdown_items').show();
                } else {
                    $(this).siblings('.mobile_dropdown_items').hide();
                };
            });
        }
    });
    
    // ========== pc navbar ===============
    $(".navbar_icon").click(function (e) { 
        // e.preventDefault();
        let dropdown_menu = $(this).children(".navbar_dropdown");
        if (dropdown_menu.css("display") === "none") {
            fadeIn($(this).children(".navbar_dropdown"));
            dropdown_menu.css("display","block");
        } else {
            fadeOut($(this).children(".navbar_dropdown"));
        }
    });

});

// animation function 
function slideIn(ele) {
    gsap.fromTo(ele,
        {
            x: '-100%'
        },
        {
            x: 0,
            duration: 0.5
        }

    );
};
function slideOut(ele) {
    gsap.to(ele,
        {
            x: '-100%',
        }

    );
};
function fadeIn(ele) {
    gsap.fromTo(ele,
        {
            opacity: 0
        },
        {
            opacity: 1,
            duration: 0.2
        }
    );
};
function fadeOut(ele) {
    gsap.to(ele,
        {
            opacity: 0,
            duration: 0.2,
            onComplete: function () {
                $(ele).css('display', "none");
            }
        }
    );
};