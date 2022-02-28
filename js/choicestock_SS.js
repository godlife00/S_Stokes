$(document).ready(function () {
    $('.globalStock .main_mid.youtube_mijumi .video_thumbnail').show(); // 페이지 로드 완료후 이미지 노출
    // 페이지 새로고침되도 스크롤 위치 유지
    document.addEventListener("DOMContentLoaded", function(event) { 
        var scrollpos = localStorage.getItem('scrollpos');
        if (scrollpos) window.scrollTo(0, scrollpos);
    });
    window.onbeforeunload = function(e) {
        localStorage.setItem('scrollpos', window.scrollY);
    };

    /************************/
    /****  Modal popup  *****/
    /************************/

    //로그인 팝업
    var setWindow = $('.setting_pop');

    /* 개발처리 */
    var setpay_edt01 = $('.pay_edt_01');
    var setpay_edt02 = $('.pay_edt_02');
    var setpay_edt02_1 = $('.pay_edt_02_1');
    var setpay_edt02_2 = $('.pay_edt_02_2');
    var setcatch_edt01 = $('.catch_edt_01');
    var setcatch_edt02 = $('.catch_edt_02');
    var setcatch_edt03 = $('.catch_edt_03');
    var setcatch_edt03_2 = $('.catch_edt_03_2');
    var setcatch_edt03_3 = $('.catch_edt_03_3');        

    /* 개발처리 */
    $('.show_pop01').click(function () {
        setpay_edt01.addClass('open');
        $('html, body').css("overflow", "hidden");
    });
    $('.show_pop02').click(function () {
        setpay_edt02.addClass('open');
        $('html, body').css("overflow", "hidden");
    });
    $('.show_pop02_1').click(function () {
        setpay_edt02_1.addClass('open');
        $('html, body').css("overflow", "hidden");
    });
    $('.show_pop02_2').click(function () {
        setpay_edt02_2.addClass('open');
        $('html, body').css("overflow", "hidden");
    });
    $('.show_pop03').click(function () {
        setWindow.removeClass('open');
        setcatch_edt01.addClass('open');
        $('html, body').css("overflow", "hidden");
    });
    $('.show_pop04').click(function () {
        setWindow.removeClass('open');
        setcatch_edt02.addClass('open');
        $('html, body').css("overflow", "hidden");
    });
    $('.show_pop05').click(function () {
        setWindow.removeClass('open');
        setcatch_edt03.addClass('open');
        $('html, body').css("overflow", "hidden");
    });
    $('.show_pop05_2').click(function () {
        setWindow.removeClass('open');
        setcatch_edt03_2.addClass('open');
        $('html, body').css("overflow", "hidden");
    });
    $('.show_pop05_3').click(function () {
        setWindow.removeClass('open');
        setcatch_edt03_3.addClass('open');
        $('html, body').css("overflow", "hidden");
    });    
    
	$('#setting .close').click(function () {
        setWindow.removeClass('open');
        $('html, body').css("overflow", "scroll");
    });
    $('#pay_cncl .close').click(function () {
        setWindow.removeClass('open');
        $('html, body').css("overflow", "scroll");
    });
    $('#pay_cncl_tr .close').click(function () {
        setWindow.removeClass('open');
        $('html, body').css("overflow", "scroll");
    });
    $('#catch_cncl .close').click(function () {
        setWindow.removeClass('open');
        $('html, body').css("overflow", "scroll");
    });
    // Hide Window
    setWindow.find('>.bg').mousedown(function (event) {
        setWindow.removeClass('open');
        $('html, body').css("overflow", "scroll");
        return false;
    });

    /* 개발처리 */
    //관심종목 찾아보기
    $('.globalStock .catch_edt #catch_cncl .catch_from .label').on("click", function () {
        if ($(this).hasClass("active")) {                        
            $(this).removeClass('active');                  
        } else {                                    
            $(this).addClass('active');              
        }        
    });


    (function (window) {

        'use strict';

        // class helper functions from bonzo https://github.com/ded/bonzo

        function classReg(className) {
            return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
        }

        // classList support for class management
        // altho to be fair, the api sucks because it won't accept multiple classes at once
        var hasClass, addClass, removeClass;

        if ('classList' in document.documentElement) {
            hasClass = function (elem, c) {
                return elem.classList.contains(c);
            };
            addClass = function (elem, c) {
                elem.classList.add(c);
            };
            removeClass = function (elem, c) {
                elem.classList.remove(c);
            };
        }
        else {
            hasClass = function (elem, c) {
                return classReg(c).test(elem.className);
            };
            addClass = function (elem, c) {
                if (!hasClass(elem, c)) {
                    elem.className = elem.className + ' ' + c;
                }
            };
            removeClass = function (elem, c) {
                elem.className = elem.className.replace(classReg(c), ' ');
            };
        }

        function toggleClass(elem, c) {
            var fn = hasClass(elem, c) ? removeClass : addClass;
            fn(elem, c);
        }

        var classie = {
            // full names
            hasClass: hasClass,
            addClass: addClass,
            removeClass: removeClass,
            toggleClass: toggleClass,
            // short names
            has: hasClass,
            add: addClass,
            remove: removeClass,
            toggle: toggleClass
        };

        // transport
        if (typeof define === 'function' && define.amd) {
            // AMD
            define(classie);
        } else {
            // browser global
            window.classie = classie;
        }

    })(window);

	var ModalEffects = (function () {
        function init() {
            var overlay = document.querySelector('.md-overlay');
            [].slice.call(document.querySelectorAll('.md-trigger')).forEach(function (el, i) {
                var modal = document.querySelector('#' + el.getAttribute('data-modal'));
                el.addEventListener('click', function (ev) {
                    classie.add(modal, 'md-show');                    
                });
            });
        }
        init();
    })();
    
    //로그인 팝업
    var setWindow = $('.setting_pop');

	$('#setting .close').click(function () {
        setWindow.removeClass('open');
        $('html, body').css("overflow", "scroll");
    });
    
    // Hide Window
    setWindow.find('>.bg').mousedown(function (event) {
        setWindow.removeClass('open');
        $('html, body').css("overflow", "scroll");
        return false;
    });

    $('.attract_sub .btn_schSet').on("click", function () {        
        $('html, body').css("overflow", "hidden");        
    });
    $('.pop_header .close, .md-overlay').on("click", function () {        
        $('.globalStock .md-modal').removeClass('md-show');
        $('html, body').css("overflow", "scroll");
    });
        
    
    //검색
    if ($('.sub_search').length) {
        $('.searchInput').focus().click();
    }  
    $('.globalStock .search_top.searching .searchArea .searchInput').on("keydown", function () {
        $('.globalStock .search_top.searching .searchArea').addClass('keydown');                
        $('.globalStock .search_top.searching .sch_autocomplete').addClass('focus_on').show();
    });
    $('.globalStock .search_top.searching .searchArea .searchInput').on("focusout", function () {
        $('.globalStock .search_top.searching .searchArea').removeClass('keydown');                
        $('.globalStock .search_top.searching .sch_autocomplete').removeClass('focus_on').hide();
    });

    $('.globalStock .main_searching .searchArea .searchInput').on("keydown", function () {        
        $('.globalStock .main_searching .searchArea').addClass('keydown');                
        $('.globalStock .main_searching .sch_autocomplete').addClass('focus_on').show();
    });
    $('.globalStock .main_searching .searchArea .searchInput').on("focusout", function () {        
        $('.globalStock .main_searching .searchArea').removeClass('keydown');                
        $('.globalStock .main_searching .sch_autocomplete').removeClass('focus_on').hide();
    });

    //탭메뉴
    $(".tabsArea .tab_content").hide();
    $(".tabsArea .tab_content:first").show();

    $("ul.tabs li").click(function () {
        $("ul.tabs li").removeClass("active");
        $(this).addClass("active");
        $(".tabsArea .tab_content").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();
    });
    $(function () {        
        var loc = window.location.href; // returns the full URL            
        if (/popular/.test(loc)) {
            console.log("test");            
            $("ul.tabs li").removeClass("active");
            $(".globalStock .tab_area .tabs.inside_tabs li:nth-child(2)").addClass("active");
            $(".tabsArea .tab_content:nth-child(1)").hide();
            $(".tabsArea .tab_content:nth-child(2)").fadeIn();
        } 
    });
    

    //swiper
    //메인 상단
    var swiper = new Swiper('.attentionSwiper', {
        // autoHeight: true, //enable auto height
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
        },
    });
    //메인 주식에 미치다
    var swiper = new Swiper('.mijumiSwiper', {
        slidesPerView: 2,
        slidesPerGroup: 2,
        loopAdditionalSlides: 1,
        spaceBetween: 10,        
    });
    var swiper = new Swiper('.event_anaySwiper', {
        slidesPerView: 1.4,
        slidesPerGroup: 1,
        loopAdditionalSlides: 1,
        spaceBetween: 10,
        centeredSlides: true,
        loop: true,
        loopFillGroupWithBlank: true,
    });
    //메인 승부주
    var swiper = new Swiper('.maingameSwiper', {
        slidesPerView: "auto",
        spaceBetween: 8,
    });
    var swiper = new Swiper('.catchSwiper, .catchSwiper2', {
        slidesPerView: 2.2,
        spaceBetween: 0,
        freeMode: true,
    });
    //메인 상단 모닝브리핑
    var swiper = new Swiper('.mainbriefingSwiper', {
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        direction: 'vertical',
        loop: true,
    });
    //메인 하단 레시피
    var swiper = new Swiper('.mainrecipeSwiper', {
        slidesPerView: "auto",
        spaceBetween: 10,                
    });
    //서브 종목 추천
    var swiper = new Swiper('.recomSwiper', {
        autoHeight: true, //enable auto height
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
        },
    });
    //서브 검색 - 종목진단 - 투자매력
    var swiper = new Swiper('.swiper_competChar', {
        slidesPerView: 2,
        slidesPerGroup: 1,
        loopAdditionalSlides: 1,
        spaceBetween: 0,
        centeredSlides: true,
        loop: false,
        loopFillGroupWithBlank: false,
    });
    //서브 발굴 - 미국주식 탐구생활 
    var swiper = new Swiper('.swiper-research', {
        autoHeight: true, //enable auto height
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
        },
    });
    //서비스소개
    var swiper = new Swiper('.swiper_service', {
        autoHeight: true, //enable auto height
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
        },
    });
    //서브 발굴 - 승부주 
    var swiper = new Swiper('.gameSwiper', {
        setWrapperSize: true,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    // 최근 배당락일
    var swiper = new Swiper('.lately_swiper', {
        // autoplay: {
        //     delay: 3500,
        //     disableOnInteraction: false,
        // },
        // direction: 'vertical',
        // loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    // 박스 펼치기 
    $(".globalStock .summary").after().on("click", function () {
        // div 사이즈는 big, small        
        if ($(this).hasClass("big")) {
            $(this).children('div').animate({
                height: '62px'
            }, 300);
            $(this).removeClass('big').addClass('small');
        } else {
            $(this).children('div').animate({
                height: '100%'
            }, 300);
            $(this).removeClass('small').addClass('big');            
        }
    });

    $('.globalStock .tabs_menu span:nth-child(1)').on('click', function () {
        $(this).parent('div').children('span').removeClass("active");
        $("ul.tabs li").removeClass("active");
        $(this).addClass("active");
        $(".tableetabs_wrap .tabletabs_content").hide();
        $('.tabletabs_content.tabs_01').fadeIn();
    });

    $('.globalStock .tabs_menu span:nth-child(2)').on('click', function () {
        $(this).parent('div').children('span').removeClass("active");
        $("ul.tabs li").removeClass("active");
        $(this).addClass("active");
        $(".tableetabs_wrap .tabletabs_content").hide();
        $('.tabletabs_content.tabs_02').fadeIn();
    });
    $('.globalStock .tabs_menu span:nth-child(3)').on('click', function () {
        $(this).parent('div').children('span').removeClass("active");
        $("ul.tabs li").removeClass("active");
        $(this).addClass("active");
        $(".tableetabs_wrap .tabletabs_content").hide();
        $('.tabletabs_content.tabs_03').fadeIn();
    });

    // 상단 검색 GNB 고정
    if ($('.schfix_inc').length) {        
        $(window).scroll(function () {
            if ($(this).scrollTop() > 70) {        
                $('.globalStock .schfix_inc').addClass('fix_sch');
            }
            else {
                $('.globalStock .schfix_inc').removeClass('fix_sch');
            }            
        });
    }

    //검색 상단 고정 종목명,
    if ($('.search_top .data_area').length) { //검색결과 페이지에서만 작동하게,
        var search_height = $('.globalStock .sub_search .search_top').height();
        $(window).scroll(function () {
            if ($(this).scrollTop() > 130) {
                $('.globalStock .sub_search .search_top .data_area').addClass('fix_data');
                $('.globalStock .sub_search .search_top').css('height', search_height);
            } else {
                $('.globalStock .sub_search .search_top .data_area').removeClass('fix_data');
                $('.globalStock .sub_search .search_top').css('height', 'auto');
            };

        });
    }

    // 주문하기 버튼            
    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('header').outerHeight();

    $(window).scroll(function (event) {
        didScroll = true;
    });
    setInterval(function () { if (didScroll) { hasScrolled(); didScroll = false; } }, 0);
    function hasScrolled() {
        clearTimeout($.data(this, 'scrollTimer'));
        var st = $(this).scrollTop();
        if (Math.abs(lastScrollTop - st) <= delta) return; if (st > lastScrollTop && st > navbarHeight) {
            //스크롤  내릴때 
            $('.globalStock .purchase_area').css({
                'padding' : '0 10px',                                
                'bottom' : '30px'
            }, 300);                
            $('.globalStock.wowtv .purchase_area').css({                
                'bottom' : '80px'
            }, 300);                
            $('.globalStock .purchase_area .btn_purchase span, .globalStock .purchase_area .btn_purchase i').hide(150);

            if ($('.gnb_hide').length) {
                // 본문에서 GNB 메뉴 숨김
                $('.globalStock .gnb').slideUp(150);            
                $('#footer .notice .foot_info').css('padding-bottom','0');                                
            }
        } else {
            //스크롤 올릴때                         
            $('.globalStock .purchase_area').css({
                'padding' : '0 17px',                                
                'bottom' : '80px'
            }, 300);                
            $('.globalStock .purchase_area .btn_purchase span, .globalStock .purchase_area .btn_purchase i').show(150);

            $('.globalStock .gnb').show();               
        } lastScrollTop = st;        
    }
    $('.btn_purchase').on('click', function() {
        $('.purchase_wrapper').addClass('open');          
        $('.purchase_wrapper .box').animate({
            'opacity' : 1,
            'height' : 170
        });
        return false;
     });
     $('.btn-close').on('click', function() {
        $('.purchase_wrapper').removeClass('open');          
        $('.purchase_wrapper .box').animate({
            'opacity' : 0,
            'height' : 0
        });
        // return false;
     });

    //경쟁사 투자매력도
    $('.globalStock .sub_search .sub_mid.diagnosis .investCharm_area .compet_chart .chart_area').on("click", function () {        
        $('.globalStock .sub_search .sub_mid.tabs_area .compet_chart .chart_star').hide().css('height', '0');
        $('.globalStock .sub_search .sub_mid.tabs_area .compet_chart .chart_star .more ').hide();
        $(this).parent().children(".chart_star").show();
        $(this).parent().children(".chart_star").css('height', '179').animate({
            'height': 179,
        }, 'fast', function () {            
            $(this).parent().children().children(".more").show();
        });
    });
    //경쟁사 투자매력도 - 정렬 버튼 active
    $('.globalStock .md-modal .sort li').on("click", function () {
        $('.globalStock .md-modal .sort li').removeClass('active');
        $(this).addClass('active');
    });

    /* 목록 드래그 드롭 */
    $(function () {
        $("#sortable").sortable({
            handle: 'span',
        });
        $("#sortable").disableSelection();
    });

    // 경쟁사 투자매려도 별점 레이어 보이기, 숨기기
    $('html').click(function (e) {
        var etarget = $(e.target);
        if (!etarget.is('.highcharts-root, path')) {
            $('.globalStock .sub_search .sub_mid.diagnosis .investCharm_area .compet_chart .chart_star').hide();
        } else {
            
        }
    });
    $('.globalStock .sub_search .sub_mid.diagnosis .investCharm_area .compet_chart .chart_star').hide();
    $('.globalStock .sub_search .sub_mid.diagnosis .investCharm_area .compet_chart .chart_area .chartData').on("click", function () {        
        $('.globalStock .sub_search .sub_mid.diagnosis .investCharm_area .compet_chart .chart_star').hide();
        $(this).children('.chart_star').show();        
    });
    
    
});


