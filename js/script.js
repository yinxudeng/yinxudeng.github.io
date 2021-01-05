$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});

// Source: https://www.w3schools.com/bootstrap/bootstrap_ref_js_scrollspy.asp
$(document).ready(function(){
    $('body').scrollspy({target: ".navbar", offset: 50});
    $("#myNavbar a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
            window.location.hash = hash;
            });
        } 
    });
});
