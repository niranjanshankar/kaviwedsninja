$(document).ready(function(){

    var diff = daysBetween(new Date(), new Date('1/17/2019'));
    var days = Math.trunc(diff);

    if(days > 0){
        $("#daysText").html("Days")
        $("#numberOfDays").html(days);
        $("#rsvpForm").show();
        $("#rsvpExpiry").hide();
    }
    else{
        $("#numberOfDays").html("IT'S OVER");
        $("#rsvpForm").hide();
        $("#rsvpExpiry").show();
    }
    

    // $('#myTab').tabCollapse();
    // $('#myTab').on('shown-accordion.bs.tabcollapse', function(){
    //     alert('accordion is shown now!');
    // });

});

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