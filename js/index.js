var debug = true;

console.log('loaded');


$(document).ready(function () {


    /* Inbox App Loading Icon */
    $('#ibxBtn').click(function () {
        $('.ibx').addClass('ibx-run');
        setTimeout(function () {
            $('.ibx').addClass('ibx-end');
            $('.ibx').removeClass('ibx-run');
            setTimeout(function () {
                $('.ibx').removeClass('ibx-end');
            }, 4000);

        }, 3000);
    });





    /* */
    $('#circular_explosion').click(function () {
        $('.logo-group').addClass('logo-container-animate');
        $('.loader-bar').addClass('loader-bar-animate');
        setTimeout(function () {
            $('.logo-group').removeClass('logo-container-animate');
            $('.loader-bar').removeClass('loader-bar-animate');
        }, 4500);
    });

});