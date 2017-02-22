$(document).ready(function() {
    var flag = true;
    $('.btn-toggle').on('click', function (e) {
       if (flag) {
            flag = false;
            $('.main-header .main-nav').slideToggle(function(){
                flag = true;
            });
       }
    });
//AJAX form submission







//AJAX form submission END




});


