$(document).ready(function () {

    if (window.location.href.indexOf("index") > -1) {
        var urlRoute = './';
        var htmlRoute = 'header_index.html';
    } else {
        var urlRoute = '../';
        var htmlRoute = 'header.html';
    }

    $('#header').load(urlRoute + 'common/' + htmlRoute, function () {

        console.log("로컬해더js");
        $(function () {
            $('.gnb ul li').removeClass('active'); //재무분석
            var loc = window.location.href; // returns the full URL            
            if (/analysis/.test(loc)) {
                $('.gnb ul li.analysis').addClass('active'); //재무분석
            } else if (/excavation/.test(loc)) {
                $('.gnb ul li.excavation').addClass('active'); // 종목발굴
            } else if (/invest/.test(loc)) {
                $('.gnb ul li.invest').addClass('active'); // 투자대가        
            } else if (/sectors/.test(loc)) {
                $('.gnb ul li.sectors').addClass('active'); // 업종분석
            }
        });
        
        // 상단 검색바
        $('.searchArea form .searchInput').on("focusout", function () {            
            $('.searchArea .AutoComplete').hide();
        });
        $('.searchArea form .searchInput').on("keydown", function () {            
            $('.searchArea .AutoComplete').show();
        });
        $('.searchArea .AutoComplete li').removeClass('_on');
        $('.searchArea .AutoComplete li').on("mouseover", function () {            
            $('.searchArea .AutoComplete li').removeClass('_on')
            $(this).addClass('_on');
        });

        // active
        $('.modal.terms_form .pop_con .agree_area .agree_from .label .label_chk').on('click', function () {
            $(this).toggleClass('active');
        });
        $('.modal.mypage_info .pop_con .mapage_area .mapage_form .agree_area .agree_from .label .label_chk').on('click', function () {
            $(this).toggleClass('active');
        });

        $('#header .bgWrap .premium .loginId .login').on('click', function () {
            $('.login_form').modal({
                fadeDuration: 100
            });
        });
        $('.modal a.open_step02').on('click', function () {
            $('.terms_form').modal({
                fadeDuration: 100
            });
        });
        $('.modal a.open_step03').on('click', function () {
            $('.sign_complete').modal({
                fadeDuration: 100
            });
        });
        $('#header .bgWrap .premium a.join').on('click', function () {
            $('.premium_join').modal({
                fadeDuration: 100
            });
        });
        $('#header .bgWrap .premium a.join').on('click', function () {
            $('.premium_join').modal({
                fadeDuration: 100
            });
        });

        // 밸류라인 프리미엄 가입 - 가입방법 열기
        $('.modal a.open_payment').on('click', function () {
            $('.payment_step.pay01').modal({
                fadeDuration: 100
            });
        });
        $('.modal a.payment_step01').on('click', function () {
            $('.payment_step.pay01').modal({
                fadeDuration: 100
            });
        });
        // 밸류라인 프리미엄 가입 - 결제하기 열기
        $('.modal a.payment_step02').on('click', function () {
            $('.payment_step.pay02').modal({
                fadeDuration: 100
            });
        });
        // 밸류라인 프리미엄 가입 - 결제완료 열기
        $('.modal a.payment_step03').on('click', function () {
            $('.payment_step.pay03').modal({
                fadeDuration: 100
            });
        });

        // 마이페이지
        $('#header .bgWrap .premium .my_info').on('click', function () {
            $('.mypage_info').modal({
                fadeDuration: 100
            });
        });
        // 회원탈퇴
        $('.modal.mypage_info .pop_con .open_withdrawal').on('click', function () {
            $('.withdrawal_sum').modal({
                fadeDuration: 100
            });
        });

        //결제
        $('.serviceStep .step_box').on("click", function () {
            $('.serviceStep .step_box').removeClass("active");
            $(this).addClass("active");
        });

        // 결제동의하기 체크
        $('.payment_note .note_chk .txt').on("click", function () {
            $(this).toggleClass("active");
        });

        //select
        $(function () {
            var selectTarget = $('.selectbox select');

            // focus 가 되었을 때와 focus 를 잃었을 때
            selectTarget.on({
                'focus': function () {
                    $(this).parent().addClass('focus');
                },
                'blur': function () {
                    $(this).parent().removeClass('focus');
                }
            });

            selectTarget.change(function () {
                var select_name = $(this).children('option:selected').text();
                $(this).siblings('label').text(select_name);
                $(this).parent().removeClass('focus');
            });
        });

        // 스크롤 끝 감지해서 스타일 수정
        $(".modal.mypage_info .pop_con .history_area").scroll(function () {
            var scrollTop = $(this).scrollTop();
            var innerHeight = $(this).innerHeight();
            var scrollHeight = $(this).prop('scrollHeight');

            if (scrollTop + innerHeight >= scrollHeight) {
                $(".modal.mypage_info .pop_con .history_area").css('border', 'none');
            } else {
                $(".modal.mypage_info .pop_con .history_area").css('border-bottom', '1px solid #e7eaf2');
            }
        });

        // 내정보 - 회원정보 - 휴대폰 번호 변경
        $('.modal.mypage_info .pop_con .mapage_area .mapage_form .form_table td .mod_btn').on('click', function () {
            $('.modal.mypage_info .pop_con .mapage_area .mapage_form .form_table td .mod_phone').slideDown();
        });
        $(".modal.mypage_info .pop_con .mapage_area .tab_area ul li").on('click', function () {
            $(".modal.mypage_info .pop_con .mapage_area .tab_area ul li").removeClass("active");
            $(this).addClass("active");
            $(".modal.mypage_info .pop_con .tab_content").hide();
            var activeTab = $(this).attr("rel");
            $("#" + activeTab).show();
        });


        $('#header .bgWrap .gnb ul li').on('click', function () {
            $(this).addClass('active');
        });

    });

    $('#footer').load(urlRoute + 'common/footer.html', function () {        
    });

});