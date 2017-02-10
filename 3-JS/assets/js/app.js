// Define stamp constant
var STAMP_STAR = 'star';
var STAMP_HEART = 'heart';
var STAMP_MICKEY = 'mickey';
var STAMP_PAW = 'paw';
var STAMP_CROWN = 'crown';

var selectedStamp = '';

// Helper Function
function getStampImageSource() {
    return 'assets/img/stamp_mark_' + selectedStamp + '.png';
}

function createStampElement() {
    return $('<img src="' + getStampImageSource() +'" class="mark-proto">');
}

function createCursorUrl() {
    return 'url(' + getStampImageSource() + ')';
}

// Main Logic for stamper
$('.stamper').click(function() {
    if (selectedStamp !== '') {
        $('.stamper[stamper=' + selectedStamp + ']').next().removeClass('active');
    }
    $(this).next().addClass('active');  
    selectedStamp = $(this).attr('stamper');
});

$('#stamppad-canvas').click(function(e) {
    if (selectedStamp === '') return;
    // Get mouse position
    var xPos = e.pageX - $(this).offset().left;
    var yPos = e.pageY - $(this).offset().top;
    // Create image DOM element
    var stampElem = createStampElement();
    stampElem.css({
        position: 'absolute',
        left: xPos - stampElem[0].width / 2,
        top: yPos - stampElem[0].height / 2
    });
    $(this).append(stampElem);
});

$('#stamppad-canvas').mousemove(function() {
    if (selectedStamp === '') return;
    var tempElem = createStampElement();
    var stampWidth = tempElem[0].width;
    var stampHeight = tempElem[0].height;
    $('#stamppad-canvas').css('cursor', createCursorUrl() + ' ' + stampWidth / 2 + ' ' + stampHeight / 2 + ', auto');
})
