$(document).ready(function () {

    if (window.location.href.indexOf("index") > -1) {
        var urlRoute = './';
    } else {
        var urlRoute = '../';        
    }

    $('#footer').load(urlRoute + 'common/footer.html', function () {        
    });

});