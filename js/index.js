var debug = true;

console.log('loaded');


$(document).ready(function () {


    /* Inbox App Loading Icon */
    $('#a1Btn1').click(function () {
        var ibx = $(this).closest('.ce-effect-container').find('.ibx');

        $(ibx).removeClass('ibx-end').removeClass('ibx-run');

        $('#a1Btn1, #a1Btn2').attr('disabled', true);

        $(ibx).addClass('ibx-run');

        setTimeout(function () {
            $(ibx).removeClass('ibx-end').removeClass('ibx-run');
            $('#a1Btn1, #a1Btn2').attr('disabled', false);
        }, 3000);
    });
    $('#a1Btn2').click(function () {
        var ibx = $(this).closest('.ce-effect-container').find('.ce-effect');

        $(ibx).removeClass('ibx-end').removeClass('ibx-run');

        $(ibx).addClass('ibx-run');

        $('#a1Btn1, #a1Btn2').attr('disabled', true);

        setTimeout(function () {
            $(ibx).addClass('ibx-end');
            setTimeout(function () {
                $(ibx).removeClass('ibx-end').removeClass('ibx-run');
                $('#a1Btn1, #a1Btn2').attr('disabled', false);
            }, 6000);
        }, 3000);
    });

    /* */


    /* Inbox App Circular Explosion */
    $('#circular_explosion').click(function () {
        $('.logo-group').addClass('logo-container-animate');
        $('.loader-bar').addClass('loader-bar-animate');
        setTimeout(function () {
            $('.logo-group').removeClass('logo-container-animate');
            $('.loader-bar').removeClass('loader-bar-animate');
        }, 4500);
    });


    /* Inbox App Text Shadow / Color Transition */
    $('#shadow_transition').click(function () {
        $('.letter_set1').addClass('letters1-animate');
        $('.letter_set2').addClass('letters2-animate');
        setTimeout(function () {
            $('.letter_set1').removeClass('letters1-animate');
            $('.letter_set2').removeClass('letters2-animate');
        }, 3000);
    });

});