'use strict';

// Constructor
var Header = function() {
    var retailerSelectBox = $('.home__main-cta__select');
    var submitReserva = $('.home__main-cta__button');

    retailerSelectBox.on('change', function(){
        submitReserva.removeAttr('disabled');
    });

    submitReserva.on('click', function(e){
        e.preventDefault();
        window.location.href = '/gracias';
    });
};

module.exports = Header;
