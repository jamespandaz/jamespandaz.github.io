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

/* fucntion googleMap(){
    var mapProp={
        center: new google.maps.LatLng(-33.773708, 151.112714),
        zoom:5;
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
*/
/* var reviewIndex = 1;
showReview(reviewIndex);

function plusReview(n){
    showReview(reviewIndex += n);
}

function currentReview(n){
    showReview(showReview = n);
}

function showReview(n){
    var i;
    var reviews = document.getElementById("#reviewContent");

    if (n > reviews.length) {reviewIndex = 1}
        if (n < 1) {reviewIndex = review.length}
        for (i=0; i < reviews.length; i++){
            reviews[i].style.display = "none";
        }

    reviews[reviewIndex-1].style.display = "block";
} */


var coll = document.getElementsByClassName("accordian");
var i;
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    }
