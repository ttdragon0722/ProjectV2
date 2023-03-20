$(document).ready(function () {
    const tl = gsap.timeline();

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
    const mobileMenuBg = $('.mobile_menu_bg');
    const searchModel = $('.search_model');
    $('.menu_btn').click((e) => {
        e.preventDefault();
        if (mobileMenuBg.is(':hidden')) {
            if (!searchModel.is(':hidden')) {
                gsap.to(".search_model",
                    {
                        xPercent: 120,
                        duration: 0.2,
                        onComplete: () => {
                            searchModel.hide();
                            gsap.set(".search_model", {
                                xPercent: 120
                            });
                        }
                    }
                )
            }
            fadeIn('.mobile_menu_item');
            fadeIn('.mobile_menu_bg');
            slideIn('.mobile_menu_group');
            mobileMenuBg.show();
            $('body').css('overflow-y', 'hidden');
        } else {
            slideOut('.mobile_menu_group');
            fadeOut('.mobile_menu_bg');
            $('body').css('overflow-y', 'scroll');
        }
    });

    $('.mobile_menu_bg').click(function (e) {
        if (e.target === this) {
            if (!searchModel.is(':hidden')) {
                gsap.to(".search_model",
                    {
                        xPercent: 120,
                        duration: 0.2,
                        onComplete: () => {
                            searchModel.hide();
                            gsap.set(".search_model", {
                                xPercent: 120
                            });
                        }
                    }
                )
            }

            slideOut('.mobile_menu_group');
            fadeOut('.mobile_menu_bg');
            $('body').css('overflow-y', 'scroll');
        };
    })

    // ========== pc navbar ===============
    const dropdown_menu = $(this).children(".navbar_dropdown");
    $(".navbar_icon").click(function (e) {
        // e.preventDefault();
        if (dropdown_menu.is(":hidden")) {
            fadeIn(dropdown_menu);
            dropdown_menu.show();
        } else {
            fadeOut(dropdown_menu);
        };
    });

    // search model open off
    $(".search_btn").click(function (e) {
        if (searchModel.is(':hidden')) {
            if (!mobileMenuBg.is(':hidden')) {
                slideOut('.mobile_menu_group');
                fadeOut('.mobile_menu_bg');
                $('body').css('overflow-y', 'scroll');
            }
            gsap.set(".search_model", {
                xPercent: 120
            });
            searchModel.show();
            gsap.to(".search_model",
                {
                    xPercent: 0,
                    duration: 0.3,
                    ease: "power"
                }
            )
        } else {
            gsap.to(".search_model",
                {
                    xPercent: 120,
                    duration: 0.2,
                    onComplete: () => {
                        searchModel.hide();
                        gsap.set(".search_model", {
                            xPercent: 120
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
                    searchModel.hide();
                    gsap.set(".search_model", {
                        xPercent: 100
                    });
                }
            }
        )
    });

    // mobile menu dropdown setup + button
    $.ajax({
        type: "GET",
        url: "./jsons/link.json",
        data: {},
        dataType: "json",
        success: function (response) {
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

});

// animation function 
function slideIn(ele) {
    tl.fromTo(ele,
        {
            x: '-100%'
        },
        {
            x: 0,
            duration: 0.2
        }

    );
};
function slideOut(ele) {
    tl.to(ele,
        {
            x: '-100%',
        }

    );
};
function fadeIn(ele) {
    tl.fromTo(ele,
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
    tl.to(ele,
        {
            opacity: 0,
            duration: 0.2,
            onComplete: function () {
                $(ele).css('display', "none");
            }
        }
    );
};
