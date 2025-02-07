/*=========================================================================
Name- Prashant Kumar
Date- 07-02-2025
Details- The below function is to swap two number values with out using other veriable
=========================================================================*/

function swapNumber() {

    var a = $('#giveA').val();
    var b = $('#giveB').val();

    if (!a || !b) {
        toastr.error('Please complete required details');
        return false;
    }

    if (a == b) {
        toastr.error('Please enter two different value');
        return false;
    }

    a = parseInt(a) + parseInt(b);
    b = parseInt(a) - parseInt(b);
    a = parseInt(a) - parseInt(b);

    $('#setA').val(a);
    $('#setB').val(b);

    var desc = `
    function swapNumber() {

        var a = $('#giveA').val();
        var b = $('#giveB').val();

        a = parseInt(a) + parseInt(b);
        b = parseInt(a) - parseInt(b);
        a = parseInt(a) - parseInt(b);
    }`;

    $('#answerDescription1').html(desc);
    $('#answerContainer1').show();
}