var acceptedHash = ['#home', '#aboutUs'];

$(document).ready(function(){

    // If trying to access hash that is not included in acceptedHash array
    // redirect to home page
    if(!acceptedHash.includes(window.location.hash)) {
        window.location.hash = '#home'
    }
    
    $(window.location.hash).fadeToggle();
});

$(window).on("hashchange", function(e){
    console.log(e.originalEvent.oldURL.split('index.html')[1])
    console.log(e.originalEvent.newURL.split('index.html')[1])

    let newHash = e.originalEvent.newURL.split('index.html')[1];
    let oldHash = e.originalEvent.oldURL.split('index.html')[1];

    // If trying to access hash that is not included in acceptedHash array
    // redirect to home page
    if(!acceptedHash.includes(newHash)) {
        window.location.hash = '#home'
    }
    
    $(newHash).fadeToggle();
    $(oldHash).fadeToggle();

})

