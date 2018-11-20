var debug = true;

console.log('loaded');


$(document).ready(function () {
    
    
    /* Inbox App Loading Icon */
    $('#ibxBtn1').click(function () {
        $('.ibx').removeClass('ibx-end').removeClass('ibx-run');
        
        $('#ibxBtn1, #ibxBtn2').attr('disabled', true);
        
        $('.ibx').addClass('ibx-run');
        setTimeout(function () {
            $('.ibx').removeClass('ibx-end').removeClass('ibx-run');
            
            $('#ibxBtn1, #ibxBtn2').attr('disabled', false);
            
        }, 3000);
    });
    $('#ibxBtn2').click(function () {
        $('.ibx').removeClass('ibx-end').removeClass('ibx-run');
        $('.ibx').addClass('ibx-run');
        
        $('#ibxBtn1, #ibxBtn2').attr('disabled', true);
        
        setTimeout(function () {
            $('.ibx').addClass('ibx-end');
            setTimeout(function () {
                $('.ibx').removeClass('ibx-end').removeClass('ibx-run');
                
                $('#ibxBtn1, #ibxBtn2').attr('disabled', false);
            }, 4000);
        }, 3000);
    });
    
    /* */
    
    
    
    
    
});