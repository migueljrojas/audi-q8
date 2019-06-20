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

    var countDownDate = new Date("Jul 1, 2019 00:00:00").getTime();

    var daysContainer = $('.js-days');
    var hoursContainer = $('.js-hours');
    var minutesContainer = $('.js-minutes');
    var secondsContainer = $('.js-seconds');

    var x = setInterval(function() {
    
        var now = new Date().getTime();
        
        var distance = countDownDate - now;
        
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        var daysToNumber = parseInt(days);
        var hoursToNumber = parseInt(hours);
        var minutesToNumber = parseInt(minutes);
        var secondsToNumber = parseInt(seconds);

        if ((daysToNumber - 10) < 0) {
            daysContainer.html("0" + hours);
        } else {
            daysContainer.html(days);
        }
      
        if ((hoursToNumber - 10) < 0) {
            hoursContainer.html("0" + hours);

        } else {
            hoursContainer.html(hours);
        }

        if ((minutesToNumber - 10) < 0) {
            minutesContainer.html("0" + minutes);

        } else {
            minutesContainer.html(minutes);
        }

        if ((secondsToNumber - 10) < 0) {
            secondsContainer.html("0" + seconds);

        } else {
            secondsContainer.html(seconds);
        }

        if (distance < 0) {
            clearInterval(x);
        }

    }, 1000);    
};

module.exports = Header;
