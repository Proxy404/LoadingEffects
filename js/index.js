var debug = true;

console.log('loaded');


$(document).ready(function () {


    /* A1 */
    var whoosh = $('#whoosh')[0];

    $('#a1Btn1').click(function () {
        var eff = $(this).closest('.ce-effect-container').find('.ce-effect');

        $(eff).removeClass('a1-end').removeClass('a1-run');

        $('#a1Btn1, #a1Btn2').attr('disabled', true);

        $(eff).addClass('a1-run');
        whoosh.play();

        setTimeout(function () {
            // $(eff).removeClass('a1-end').removeClass('a1-run');
            $('#a1Btn1, #a1Btn2').attr('disabled', false);
        }, 4000);
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
    var wil = $('#wil')[0];

    $('#a2Btn1').click(function () {
        var eff = $(this).closest('.ce-effect-container').find('.ce-effect');

        $(eff).removeClass('a2-end').removeClass('a2-run');

        $(eff).addClass('a2-run');

        whoosh.play();

        $('#a2Btn1').attr('disabled', true);

        setTimeout(function () {
            $(eff).addClass('a2-end');

            setTimeout(function () {
                wil.play();
            }, 1800);
            setTimeout(function () {
                $(eff).removeClass('a2-end').removeClass('a2-run');
                $('#a2Btn1').attr('disabled', false);
            }, 4000);
        }, 2000);
    });
    /* */


    /* Inbox App Text Shadow / Color Transition */

    var audio = $('#thump')[0];

    $('#shadow_transition').click(function () {

        $('#shadow_transition').attr('disabled', true);

        setTimeout(function () {
            audio.play();
        }, 500);

        $('.letters1').addClass('letters1-animate');
        $('.letters2').addClass('letters2-animate');
        setTimeout(function () {
            $('#shadow_transition').attr('disabled', false);
            $('.letters1').removeClass('letters1-animate');
            $('.letters2').removeClass('letters2-animate');
        }, 3000);
    });


    /* G3 */

    $('#g3').click(function () {

        $('#g3').attr('disabled', true);

        $('.cover').addClass('cover-animate');
        setTimeout(function () {
            $('#g3').attr('disabled', false);
            $('.cover').removeClass('cover-animate');
        }, 20000);
    });



});