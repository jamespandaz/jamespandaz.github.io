var acceptedHash = ['#home', '#aboutUs', '#findArtists', '#artOf', '#contact'];

$(document).ready(function(){

    // If trying to access hash that is not included in acceptedHash array
    // redirect to home page
    if(!acceptedHash.includes(window.location.hash)) {
        window.location.hash = '#home'
    }
    
    $(window.location.hash).fadeToggle();
});

$(window).on("hashchange", function(e){
    let newHash = e.originalEvent.newURL.split('index.html')[1];
    let oldHash = e.originalEvent.oldURL.split('index.html')[1];

    // If trying to access hash that is not included in acceptedHash array
    // redirect to home page
    if(!acceptedHash.includes(newHash)) {
        newHash = '#home';
    }

    if(!acceptedHash.includes(oldHash)) {
        oldHash = '#home';
    }
    
    $(oldHash).fadeToggle().promise().done(function(){
        $(newHash).fadeToggle();
    });
})
