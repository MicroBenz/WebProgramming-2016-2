// Define stamp constant
var STAMP_STAR = 'star';
var STAMP_HEART = 'heart';
var STAMP_MICKEY = 'mickey';
var STAMP_PAW = 'paw';
var STAMP_CROWN = 'crown';

var selectedStamp = '';

$('.stamper').click(function() {
    selectedStamp = $(this).attr('stamper');
});

$('#stamppad-canvas').click(function(e) {
    if (selectedStamp === '') return;
    var xPos = e.pageX - $(this).offset().left;
    var yPos = e.pageY - $(this).offset().top;
    console.log(xPos, yPos);
    var stampImageSrc = 'assets/img/stamp_mark_' + selectedStamp + '.png';
    var stampElem = $('<img src="' + stampImageSrc +'" class="mark-proto">');
    stampElem.css('position', 'absolute');
    stampElem.css('left', xPos - stampElem[0].width / 2);        
    stampElem.css('top', yPos - stampElem[0].height / 2);
    $(this).append(stampElem);
});
