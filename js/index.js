$(document).ready(function(){
    tebUI();
    clickTab();
    navclick();
    loopslide();
    clickAl();
    scroll();
    // $('.slider').bxSlider();
    /*scrollEY();    
    Swiper();
    SwiperTwo();

    function Swiper(){
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 3,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
            },
    
        });
    }
    
    function SwiperTwo(){
        var swiper = new Swiper('.swiper-container01', {
            width: 700,
            slidesPerView: 3,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
            },
            
        });
    }
    */
});

function tebUI(){
    $('.tabMenu li').click(function(){
        var activeTab = $(this).attr("data-tabNumb");

        $(".tabMenu li").removeClass("active");
        $(this).addClass("active");

        $(".tabpage").removeClass("active");
        $("#"+activeTab).addClass("active");
    });

}

function clickTab(){
    $('.userDoller li').click(function(){
        $('.userDoller li').removeClass("active");
        $(this).addClass("active");
    });
}

function navclick(){
    $('header div nav ul li a').click(function(){
        $('header div nav ul li a').removeClass("active");
        $(this).addClass("active");
    });
}

function loopslide(){
    $('.subslide').css('bottom','0');
    $('.subslide').animate({
        'bottom':'-400px'
    },8000,'linear',function(){
        loopslide();
    });
}

function clickAl(){
    $(".Wrap .donate div .tabWrap .tabpage input[type=submit]").click(function(){
        alert('Thank you for joining us.');
    });
}

function scroll(){
    var $menu_btn = $('nav.pc_nav ul li a'),
        $contents = $('#mainWrap > section');

    $(window).scroll(function(){
        $contents.each(function(){
            if($(this).offset().top < $(window).scrollTop()){
                var idx = $(this).index();
                $menu_btn.removeClass('active');
                $menu_btn.eq(idx).addClass('active');
            }
        });
    });
}







// function scrollEY(){
//     $(document).scroll(function(){
//         console.log("scrolltop="+ $(document).scrollTop());
       
//         var a = $(document).scrollTop() + $(window).height()/2;
//         if(a >= $(".scrollUp").offset().top){
//             $('.scrollUp').addClass('animate');
//         }else{
//             $('.scrollUp').removeClass('animate');
//         }
    
//     });
// }


