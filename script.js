// Menu
const menuBtnToggle = document.querySelectorAll(".js-menu-toggle")
const menu = document.querySelector(".menu")
const page = document.querySelector('.page')

menuBtnToggle.forEach(btn => {
    btn.addEventListener("click", () => {
        menu.classList.toggle("menu-on")
        page.classList.toggle("page-off")
    })
})
// Intro

const introBackgroundSlider = new Swiper(".js-intro-background-slider", {
    spaceBetween: 30,
    effect: "fade",
    autoplay: {
        delay: 5000
    }
});

const introBottomSlider = new Swiper(".js-intro-bottom-slider", {
    
    pagination: {
        el: '.js-intro-bottom-slider .swiper-pagination',
        type: 'bullets',
    },
    autoplay: {
        delay: 5000
    },
    breakpoints:{
        0:{
            enabled: false,
            direction: "vertical",
            loop: false,
        },
        1024:{
            enabled: true,
            direction: "horizontal",
            loop: true,
        }
    }
})

// Program

const programSlider = new Swiper(".js-program-slider", {
    
    slidesPerView: 3,
    pagination: {
        el: ".program__slider-nums",
        type: "fraction",
    },
    navigation: {
        nextEl: ".program__slider-next",
        prevEl: ".program__slider-prev",
    },
    breakpoints:{
        320:{
            spaceBetween: 0,
            enabled: false,
        },
        1220:{
            spaceBetween: 104,
            enabled: true,
        }
    }
})

// Video

const videoSlider = new Swiper(".js-video-slider", {
    spaceBetween: 30,
    slidesPerView: 1,
    pagination: {
        el: ".video__slider-pagination",
        type: "bullets",
        clickable: true
    }
})
// Tabs

const changeTab = () => {
    const tabNavs = document.querySelectorAll('.testimonials__btn-tab');
    const tabPanes = document.querySelectorAll('.testimonials__tab');
    console.log(tabPanes);

    tabNavs.forEach(function (item) {
        item.addEventListener('click', function () {
            let currentBtn = item;
            let tabId = currentBtn.getAttribute('data-tab');
            let currentTab = document.querySelector(tabId);

            if (!currentBtn.classList.contains('active')) {
                tabNavs.forEach(function (item) {
                    item.classList.remove('active');

                })

                tabPanes.forEach(function (item) {
                    item.classList.remove('active');
                })

                currentBtn.classList.add('active');
                currentTab.classList.add('active');
            }
        })
    })
}
changeTab();