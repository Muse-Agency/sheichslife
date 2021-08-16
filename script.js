// Intro

const introBackgroundSlider = new Swiper(".js-intro-background-slider", {
    spaceBetween: 30,
    effect: "fade",
    autoplay: {
        delay: 5000
    }
});

const introBottomSlider = new Swiper(".js-intro-bottom-slider", {
    loop: true,
    pagination: {
        el: '.js-intro-bottom-slider .swiper-pagination',
        type: 'bullets',
    },
    autoplay: {
        delay: 5000
    }
})

// Program

const programSlider = new Swiper(".js-program-slider", {
    spaceBetween: 104,
    slidesPerView: 3,
    pagination: {
        el: ".program__slider-nums",
        type: "fraction",
    },
    navigation: {
        nextEl: ".program__slider-next",
        prevEl: ".program__slider-prev",
    },
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

const changeTab = () =>{
    const tabNavs = document.querySelectorAll('.testimonials__btn-tab');
    const tabPanes = document.querySelectorAll('.testimonials__tab');
    console.log(tabPanes);

    tabNavs.forEach(function(item){
        item.addEventListener('click', function(){
            let currentBtn = item;
            let tabId = currentBtn.getAttribute('data-tab');
            let currentTab = document.querySelector(tabId);

            if(! currentBtn.classList.contains('active')){
                tabNavs.forEach(function(item){
                    item.classList.remove('active');
    
                })
    
                tabPanes.forEach(function(item){
                    item.classList.remove('active');
                })
    
                currentBtn.classList.add('active');
                currentTab.classList.add('active');
            }
        })
    })

    // for (let i = 0; i < tabNavs.length; i++){

    //     tabNavs[i].addEventListener('click', function(e){
    //         e.preventDefault();
    //         const activeTabAttr = e.target.getAttribute('data-tab');
            
    //         for (const j = 0; j < tabNavs.length; j++){
    //             const contentAttr = tabPanes[j].getAttribute('data-tab-content');

    //             if (activeTabAttr === contentAttr){
    //                 tabNavs[j].classList.add("active");
    //                 tabPanes[j].classList.add("active");
    //             } else{
    //                 tabNavs[j].classList.remove("active");
    //                 tabPanes[j].classList.remove("active");
    //             }
    //         }
    //     })
    // }
}
changeTab();