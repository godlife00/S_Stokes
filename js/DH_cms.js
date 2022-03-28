$(document).ready(function () {
    console.log("cms 불러오기");

    // 달력
    $(function () {
        //input을 datepicker로 선언
        $("#datepicker1, #datepicker2 ").datepicker({
            dateFormat: 'yy-mm-dd' //달력 날짜 형태
            , showOtherMonths: true //빈 공간에 현재월의 앞뒤월의 날짜를 표시
            , showMonthAfterYear: true // 월- 년 순서가아닌 년도 - 월 순서            
            , showOn: "both" //button:버튼을 표시하고,버튼을 눌러야만 달력 표시 ^ both:버튼을 표시하고,버튼을 누르거나 input을 클릭하면 달력 표시  
            , changeMonth: true
            , changeYear: true
            , buttonImage: "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif"
            , buttonImageOnly: true //버튼 이미지만 깔끔하게 보이게함            
            // , yearSuffix: "년" //달력의 년도 부분 뒤 텍스트
            , monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] // 월의 한글 형식.
            , minDate: "-10Y" //최소 선택일자(-1D:하루전, -1M:한달전, -1Y:일년전)
            , maxDate: "+0Y" //최대 선택일자(+1D:하루후, -1M:한달후, -1Y:일년후)                                      
            , showButtonPanel: true // 캘린더 하단에 버튼 패널을 표시한다. 
            , closeText: '적용'  // 닫기 버튼 패널
            , currentText: '오늘 날짜' // 오늘 날짜로 이동하는 버튼 패널
            , onClose: function(dateText, inst) { 
                $(this).datepicker('setDate', new Date(inst.selectedYear, inst.selectedMonth, 1));
            }
        });

        //초기값을 오늘 날짜로 설정해줘야 합니다.
        $('#datepicker').datepicker('setDate', 'today'); //(-1D:하루전, -1M:한달전, -1Y:일년전), (+1D:하루후, -1M:한달후, -1Y:일년후)            
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

    // 상단 검색바
    $('.searchArea .searchInput').on("focusout", function () {            
        $('.searchArea .AutoComplete').hide();
    });
    $('.searchArea .searchInput').on("keydown", function () {            
        console.log("test");        
        $(this).next().next('.searchArea .AutoComplete').show();
        
    });
    $('.searchArea .AutoComplete li').removeClass('_on');
    $('.searchArea .AutoComplete li').on("mouseover", function () {            
        $('.searchArea .AutoComplete li').removeClass('_on')
        $(this).addClass('_on');
    });

    // 도움말
    $('.sStokes .formWrap .btn_help').on('click', function () {
        $('#content .sStokes .formWrap .info_box').toggle();
    });

    $('#textBox').keyup(function (e) {
        let content = $(this).val(); // 글자수 세기
        if (content.length == 0 || content == '') {
            $('.textCount').text('0자');
        } else {
            $('.textCount').text(content.length + '자');
        }
        
    });

    
});


