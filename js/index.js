var debug = true;

console.log('loaded');


$(document).ready(function () {


    /* A2 */
    $('#a1Btn1').click(function () {
        var eff = $(this).closest('.ce-effect-container').find('.ce-effect');
        
        $(eff).removeClass('a1-end').removeClass('a1-run');
        
        $('#a1Btn1, #a1Btn2').attr('disabled', true);
        
        $(eff).addClass('a1-run');
        
        setTimeout(function () {
            $(eff).removeClass('a1-end').removeClass('a1-run');
            $('#a1Btn1, #a1Btn2').attr('disabled', false);
        }, 3000);
    });
    
    
    /* */


    /* G1 */
    $('#circular_explosion').click(function () {
        $('.logo-group').addClass('logo-container-animate');
        $('.loader-bar').addClass('loader-bar-animate');
        setTimeout(function () {
            $('.logo-group').removeClass('logo-container-animate');
            $('.loader-bar').removeClass('loader-bar-animate');
        }, 4500);
    });
    /* */
    
    
    
    
    /* A2 */
    $('#a2Btn1').click(function () {
        var eff = $(this).closest('.ce-effect-container').find('.ce-effect');
        
        $(eff).removeClass('a2-end').removeClass('a2-run');
        
        $(eff).addClass('a2-run');
        
        $('#a2Btn1').attr('disabled', true);
        
        setTimeout(function () {
            $(eff).addClass('a2-end');
            setTimeout(function () {
                $(eff).removeClass('a2-end').removeClass('a2-run');
                $('#a2Btn1').attr('disabled', false);
            }, 6000);
        }, 3000);
    });
    /* */

});