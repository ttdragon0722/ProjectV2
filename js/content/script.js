$(document).ready(function () {

    // mobile menu animation gsap scrollTrigger
    const showAnim = gsap.from('.mobile_menu', {
        yPercent: -100,
        paused: true,
        duration: 0.2
    }).progress(1);

    const searchAnim = gsap.from('.search_model', {
        yPercent: -120,
        paused: true,
        duration: 0.2
    }).progress(1);
    ScrollTrigger.create({
        start: "top top",
        end: "max",
        onUpdate: (self) => {
            self.direction === -1 ? showAnim.play() : showAnim.reverse();
            self.direction === -1 ? searchAnim.play() : searchAnim.reverse();
        }
    })
    //  ========== mobile menu ================
    // mobile menu open & close
    $('.menu_btn').click(function (e) {
        e.preventDefault();
        if ($('.mobile_menu_bg').css('display') === 'none') {
            let search_model = $(".search_model");
            if (!(search_model.css("display") === "none")) {
                gsap.to(".search_model",
                    {
                        xPercent: 100,
                        duration: 0.2,
                        onComplete: () => {
                            search_model.css("display", "none");
                            gsap.set(".search_model", {
                                xPercent: 100
                            });
                        }
                    }
                )
            }

            fadeIn('.mobile_menu_bg');
            slideIn('.mobile_menu_group');
            fadeIn('.mobile_menu_item')
            $('.mobile_menu_bg').css('display', 'block');
            $('body').css('overflow-y', 'hidden');
            // $('.mobile_menu').css('transform', 'translate(0%, 0%);');
        } else {
            slideOut('.mobile_menu_group');
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
        url: "../../jsons/link.json",
        data: {},
        dataType: "json",
        success: function (response) {

            // sidebar load
            

            // mobile menu load
            for (let i = 0; i < response["links"].length; i++) {
                if (response["links"][i]["dropdown"].length) {
                    $(".mobile_menu_group").append(
                        `<div class="mobile_menu_item"><div class="mobile_dropdown">${response["links"][i]["title"]}<i class="fa-solid fa-chevron-down"></i></div><div class="mobile_dropdown_items"></div></div>`
                    );

                    $(".sidebar_list").append(`<div class="sidebar_item">
                    <button class="sidebar_item_title">
                        ${response["links"][i]["title"]}
                        <i class="fa-solid fa-chevron-down"></i></button>
                    <div class="sidebar_item_dropdown"></div></div>`);

                    for (let dropI = 0; dropI < response["links"][i]["dropdown"].length; dropI++) {
                        $(".mobile_dropdown_items").last().append(
                            `<a href="${response["links"][i]["dropdown"][dropI]["link"]}"><div class="mobile_menu_item">${response["links"][i]["dropdown"][dropI]["title"]}</div></a>`
                        );

                        $(".sidebar_item_dropdown").last().append(`<a href="${response["links"][i]["dropdown"][dropI]["link"]}"><div>${response["links"][i]["dropdown"][dropI]["title"]}</div></a>`);
                    }


                } else {
                    $(".mobile_menu_group").append(
                        `<div class="mobile_menu_item"><a class="mobile_menu_link" href="${response["links"][i]["link"]}"><div>${response["links"][i]["title"]}</div></a></div>`);

                    $(".sidebar_list").append(`<div class="sidebar_item"><a href="${response["links"][i]["link"]}"><div class="sidebar_item_title">${response["links"][i]["title"]}</div></a></div>`);
                }
            };

            $('.sidebar_item_title').click(function (e) {
                e.preventDefault();
                if ($(this).siblings('.sidebar_item_dropdown').css('display') === 'none') {
                    $(this).siblings('.sidebar_item_dropdown').show();
                } else {
                    $(this).siblings('.sidebar_item_dropdown').hide();
                };
            });


            $('.mobile_dropdown').click(function (e) {
                e.preventDefault();
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
            dropdown_menu.css("display", "block");
        } else {
            fadeOut($(this).children(".navbar_dropdown"));
        }
    });

    // search model open off
    $(".search_btn").click(function (e) {
        let search_model = $(".search_model");
        if (search_model.css("display") === "none") {
            if (!($('.mobile_menu_bg').css('display') === 'none')) {
                slideOut('.mobile_menu_group');
                fadeOut('.mobile_menu_bg');
                $('body').css('overflow-y', 'scroll');
            }
            gsap.set(".search_model", {
                xPercent: 120
            });
            search_model.css("display", "block");
            gsap.to(".search_model",
                {
                    xPercent: 0,
                    duration: 0.3,
                    ease: "power"
                }
            )
        } else if (search_model.css("display") === "block") {
            gsap.to(".search_model",
                {
                    xPercent: 120,
                    duration: 0.2,
                    onComplete: () => {
                        search_model.css("display", "none");
                        gsap.set(".search_model", {
                            xPercent: 100
                        });
                    }
                }
            )
        }
    });

    $('.search_close').click(function (e) {
        e.preventDefault();
        gsap.to(".search_model",
            {
                xPercent: 120,
                duration: 0.2,
                onComplete: () => {
                    search_model.css("display", "none");
                    gsap.set(".search_model", {
                        xPercent: 100
                    });
                }
            }
        )
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
