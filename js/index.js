var debug = true;

console.log('loaded');


$(document).ready(function () {


    /* A1 */
    var whoosh = $('#whoosh')[0];
    
    $('#a1Btn1, #a1Btn2').click(function (withSound) {
        var eff = $(this).closest('.ce-effect-container').find('.ce-effect');
        
        $(eff).removeClass('ce-run');
        
        $('#a1Btn1, #a1Btn2').attr('disabled', true);
        
        $(eff).addClass('ce-run');
        
        if (this.id == 'a1Btn1') {
            whoosh.play();
        }
        
        setTimeout(function () {
            // $(eff).removeClass('a1-end').removeClass('a1-run');
            $('#a1Btn1, #a1Btn2').attr('disabled', false);
        }, 4000);
    });


    /* */


    /* G1 */
    var explosion = $('#explosion')[0];
    
    $('#circular_explosion1, #circular_explosion2').click(function () {
        
        $('#circular_explosion1, #circular_explosion2').attr('disabled', true);
        
        var playSound = (this.id == 'circular_explosion1');
        
        $('.logo-group').addClass('logo-container-animate');
        $('.loader-bar').addClass('loader-bar-animate');
        
        if (playSound) {
            setTimeout(function () {
                explosion.play();
            }, 500);
        }
        
        setTimeout(function () {
            $('#circular_explosion1, #circular_explosion2').attr('disabled', false);
            $('.logo-group').removeClass('logo-container-animate');
            $('.loader-bar').removeClass('loader-bar-animate');
        }, 4500);
    });
    /* */




    /* A2 */
    var wil = $('#wil')[0];
    
    $('#a2Btn1, #a2Btn2').click(function () {
        
        var playSound = (this.id == 'a2Btn1');
        
        var eff = $(this).closest('.ce-effect-container').find('.ce-effect');

        $(eff).removeClass('a2-end').removeClass('a2-run');

        $(eff).addClass('a2-run');
        
        if (playSound) {
            whoosh.play();
        }
        
        $('#a2Btn1, #a2Btn2').attr('disabled', true);
        
        setTimeout(function () {
            $(eff).addClass('a2-end');
            
            if (playSound) {
                setTimeout(function () {
                    wil.play();
                }, 1800);
            }
            
            setTimeout(function () {
                $(eff).removeClass('a2-end').removeClass('a2-run');
                $('#a2Btn1, #a2Btn2').attr('disabled', false);
            }, 4000);
        }, 2000);
    });
    /* */


    /* Inbox App Text Shadow / Color Transition */
    
    var thump = $('#thump')[0];
    
    $('#shadow_transition1, #shadow_transition2').click(function () {
        
        $('#shadow_transition1, #shadow_transition2').attr('disabled', true);
        
        if (this.id == 'shadow_transition1') {
            setTimeout(function () {
                thump.play();
            }, 500);
        }
        
        $('.letters1').addClass('letters1-animate');
        $('.letters2').addClass('letters2-animate');
        setTimeout(function () {
            $('#shadow_transition1, #shadow_transition2').attr('disabled', false);
            $('.letters1').removeClass('letters1-animate');
            $('.letters2').removeClass('letters2-animate');
        }, 3000);
    });
    
    
    /* A3 */
    
    $('#a3Btn1, #a3Btn2').click(function () {
        
        $('.a3 .ce-effect').removeClass('ce-run');
        
        $('#a3Btn1, #a3Btn2').attr('disabled', true);
        
        $('.a3 .ce-effect').addClass('ce-run');
        
        setTimeout(function () {
            $('#a3Btn1, #a3Btn2').attr('disabled', false);
            
            // $('.a3 .envelope').removeClass('envelope-animate');
            
        }, 3000);
    });
    


    /* G3 */

    $('#g3').click(function () {

        $('#g3').attr('disabled', true);

        $('.cover').addClass('cover-animate');
        $('.letters').addClass('letters-animate');
        setTimeout(function () {
            $('#g3').attr('disabled', false);
            $('.letters').removeClass('letters-animate');
            $('.cover').removeClass('cover-animate');
        }, 20000);
    });


    /* G4 */

    $('#g4').click(function () {

        $('#g4').attr('disabled', true);

        $('.ibx-env').addClass('ibx-env-animate');
        setTimeout(function () {
            $('#g4').attr('disabled', false);
            $('.ibx-env').removeClass('ibx-env-animate');
        }, 10000);
    });



});