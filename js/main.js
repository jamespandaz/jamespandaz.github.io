$(document).ready(function(){
    var currentHash = location.hash;
    currentHash = "#home";
    homePageShow();

    $(window).on("hashchange", function(){
        currentHash = location.hash;
        console.log(currentHash);
        
        if (currentHash == "#home"){
            aboutUsHide();
            homePageShow();
        }

        if (currentHash == "#aboutus"){
            homePageHide();
            aboutUsShow();
        }
    })


});

function homePageShow(){
    $('#backgroundTitleVideo').fadeIn();
    $('#heading').fadeIn();
    $('#logo img').fadeIn();
}

function homePageHide(){
    $('#backgroundTitleVideo').fadeOut();
    $('#heading').fadeOut();
    $('#logo img').fadeOut();
}

/* function aboutUsShow(){
    $('#aboutUs h1').fadeIn();
    $('#aboutUs p').fadeIn();
}*/

function aboutUsShow(){
    $("#aboutUs").fadeIn();
}

function aboutUsHide(){
    $('#aboutUs h1').fadeOut();
    $('#aboutUs p').fadeOut();
}