var acceptedHash = ['#home', '#aboutUs', '#findArtists', '#artOf', '#contact', '#thankYou'];

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

fucntion googleMap(){
    var mapProp={
        center: new google.maps.LatLng(-33.773708, 151.112714),
        zoom:5;
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

var reviewIndex = 1;
showReview(reviewIndex);

function plusReview(n){
    showReview(reviewIndex += n);
}

function currentReview(n){
    showReview(showReview = n);
}

function showReview(n){
    var i;
    var reviews = document.getElementById("review");

    if (n > reviews.length) {reviewIndex = 1}
        if (n < 1) {reviewIndex = review.length}
        for (i=0; i < reviews.length; i++){
            reviews[i].style.display = "none";
        }
}   

