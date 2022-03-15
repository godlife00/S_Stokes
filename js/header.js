$(document).ready(function () {

    if (window.location.href.indexOf("index") > -1) {
        var urlRoute = './';
    } else {
        var urlRoute = '../';        
    }

    $('#footer').load(urlRoute + 'common/footer.html', function () {        
        $('.modal.login_form .pop_con .mapage_form .label_chk, .modal .pop_con .mapage_form .label_chk').on("click", function () {
            if ($(this).hasClass("active")) {
                $(this).removeClass('active');
            } else {
                $(this).addClass('active');
            }
        });
    });

});