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
$('.top-form').on('submit', function (e) {
        e.preventDefault();
    let name = $('.field-name').val().trim(),
        email = $('.field-email').val().trim(),
        phone = $('.field-phone').val().trim();
    let data = {
        name: name,
        email: email,
        phone: phone
    };

    $.ajax({
        url: '/Business Theme/js/app.js',
        method: 'post',
        data: JSON.stringify(data),
        // headers: {
        //     'content-type': 'application/json'
        // },
        success: function (data) {
            console.log(data);
        }
    })
    });
//AJAX form submission  End




});


