$(document).ready(function () {

    //swiper    
    //메인 포트폴리오
    var swiper = new Swiper('.mainportfolioSwiper', {
        slidesPerView: "auto",
        spaceBetween: 8,
    });
    var swiper = new Swiper('.maingameSwiper', {
        slidesPerView: "auto",
        spaceBetween: 8,
    });


    // 상단 검색바
    $('.my_info').on('click', function () {
        $('.mypage_info').modal({
            fadeDuration: 100
        });
    });
    
    // 상단 검색바
    $('.autocompleteWrap, .bg_layer').hide();
    // $('.bgWrap .r_menu a.searchForm').on("focusout", function () {            
    //     $('.AutoComplete, .bg_layer').hide();
    // });
    $('.bg_layer').on("click", function () {            
        $('.AutoComplete, .bg_layer').hide();
    });
    $('.bgWrap .r_menu a.searchForm').on("click", function () {            
        $('.AutoComplete').slideDown(300);
        $('.bg_layer').show();
    });

    // 오늘의승부주 탭네비 상단 고정 시키기    
    $(window).scroll(function () {        
        if ($('.mainBox.game_scr').length) {
            var jbOffset = $('.mainBox.game_scr').offset();                                            
            if ($(document).scrollTop() < jbOffset.top - 34) {      
                $('.mainBox.game_scr').css({
                    'padding' : '25px 0 25px',                    
                });                                                      
                $('.mainBox.game_scr .page_nav').css({
                    'position' : 'relative',
                    'top': '0',
                }).removeClass('boxShadow');     
                
            } else {                            
                $('.mainBox.game_scr').css({
                    'padding' : '62px 0 25px',                    
                });                
                $('.mainBox.game_scr .page_nav').css({
                    'position' : 'fixed',
                    'top': '58px',                    
                }).addClass('boxShadow');              
            }
        }        
    });

    // 오늘의승부주 탭네비 페이지내 이동
    $('.mainBox.game_scr .page_nav li a.nav_game_scr').on("click", function () {
        var offset = $('html').offset();
        $('html').animate({ scrollTop: offset.top}, 400);
    });
    $('.mainBox.game_scr .page_nav li a.nav_portfolio').on("click", function () {
        var offset = $('.mainBox.portfolio').offset();
        $('html').animate({ scrollTop: offset.top - 80 }, 400);
    });
    $('.mainBox.game_scr .page_nav li a.nav_strategy').on("click", function () {
        var offset = $('.mainBox.strategy').offset();
        $('html').animate({ scrollTop: offset.top - 80 }, 400);
    });
    $('.mainBox.game_scr .page_nav li a.nav_attr').on("click", function () {
        var offset = $('.mainBox.attr').offset();
        $('html').animate({ scrollTop: offset.top - 80 }, 400);
    });

    // 오늘의 승부주 필터 active
    $('.s_stokes #wrap #container.sub_stock .winner .w_filter ul li').on("click", function () {
        $('.s_stokes #wrap #container.sub_stock .winner .w_filter ul li').removeClass('active');
        $(this).addClass('active');
    });
    $('.s_stokes #wrap #container.sub_stock .portfolio_recom .adequateArea .tableData .table_filter li').on("click", function () {
        $('.s_stokes #wrap #container.sub_stock .portfolio_recom .adequateArea .tableData .table_filter li').removeClass('active');
        $(this).addClass('active');
    });

    // 진단점수 그래프바 에니메이션 효과
    (function( $ ) {
        $(function() {
            function animated_contents() {
                $(".zt-skill-bar > div ").each(function (i) {
                    var $this  = $(this),
                        skills = $this.data('width');
    
                    $this.css({'width' : skills + '%'});
    
                });
            }
            
            if(jQuery().appear) {
                $('.zt-skill-bar').appear().on('appear', function() {
                    animated_contents();
                });
            } else {
                animated_contents();
            }
        });
    }(jQuery));



        
});


