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
    
});