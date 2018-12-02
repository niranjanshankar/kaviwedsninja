$(document).ready(function(){

    var diff = daysBetween(new Date(), new Date('1/17/2019'));
    var days = Math.trunc(diff);

    if(days > 0){
        $("#daysText").html("Days")
        $("#numberOfDays").html(days);
        $("#rsvpForm").show();
        $("#wishesSent").hide();
    }
    else{
        $("#numberOfDays").html("IT'S OVER");
        $("#rsvpForm").show();
        $("#wishesSent").hide();
    }
    

});

// https://script.google.com/macros/s/AKfycbxHN5SNaJHHp98EPKf-qLgKfhO3ysKd5q_9WlPAnHT12WDLJGF5/exec

//to consider day light savings also
function treatAsUTC(result) {
    result.setMinutes(result.getMinutes() - result.getTimezoneOffset());
    return result;
}

// find days between two dates
function daysBetween(startDate, endDate) {
    var millisecondsPerDay = 24 * 60 * 60 * 1000;
    return (treatAsUTC(endDate) - treatAsUTC(startDate)) / millisecondsPerDay;
}

function sendWish(){
    // event.preventDefault();
    // event.stopPropagation();

    str = $("#wishContent").val().trim();
    person = $("#name").val().trim();

    if(str.length > 0 && person.length > 0){

        $('#wishBtn').html('Sending Wish...');
        $('#wishBtn').attr('disabled', true);

        var url = "https://script.google.com/macros/s/AKfycbxHN5SNaJHHp98EPKf-qLgKfhO3ysKd5q_9WlPAnHT12WDLJGF5/exec";

        var xhr = new XMLHttpRequest();
        xhr.open('GET', url+'?content='+str+'&person='+person, true);
        xhr.onload = function() {
            if (xhr.status === 200) {
                $("#wishesSent").show();
                $("#sendWishes").hide();
                $("#wishContent").val('');
                $("#name").val('');

                $('#wishBtn').html('Send My Wish');
                $('#wishBtn').attr('disabled', false);
            }
            else {
                alert('I am sorry, we cannot send your wish now, please try again later!');
            }
        };
        xhr.send();

    }
}

function showWishHolder(){
  $("#wishesSent").hide();
    $("#sendWishes").show();   
}