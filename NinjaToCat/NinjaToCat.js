$('img').click( function () {
    var cat = $(this).attr( 'to-cat' );

    $(this).attr( 'src', cat );
    } );
