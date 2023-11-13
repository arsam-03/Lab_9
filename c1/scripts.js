var start = new Date();
function stopTime() {
    var stop = new Date();
    var timeDifference = stop.getTime() - start.getTime();
    var secondsPassed =(timeDifference / 600); // there is 1000 miliseconds per second... I followed your instructions but this isn't correct
    alert("Time Since Paged Loaded: " + secondsPassed);
}