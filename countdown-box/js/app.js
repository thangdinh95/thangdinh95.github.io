$(document).ready(function () {

  // Set the date we're counting down to
  function setCountDown(date) {
    var countDownDate = new Date(date).getTime();

    // Update the count down
    if (this.intervalId) clearInterval(this.intervalId);
    this.intervalId = setInterval(function () {
      // Get todays date and time
      var now = new Date().getTime();

      // Find the distance between now an the count down date
      var distance = Math.max(0, countDownDate - now);

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
      var seconds = Math.floor(distance % (1000 * 60) / 1000);

      // Display Zero
      var days = days.toLocaleString(undefined, { minimumIntegerDigits: 2 });
      var hours = hours.toLocaleString(undefined, { minimumIntegerDigits: 2 });
      var minutes = minutes.toLocaleString(undefined, { minimumIntegerDigits: 2 });
      var seconds = seconds.toLocaleString(undefined, { minimumIntegerDigits: 2 });

      // Display the result in the element
      document.getElementById("days").innerHTML = days;
      document.getElementById("hours").innerHTML = hours;
      document.getElementById("minutes").innerHTML = minutes;
      document.getElementById("seconds").innerHTML = seconds;

      if (distance <= 0) {
        clearInterval(this.intervalId);
      }
    }, 1000);
  }

  $('.countdown-box__input').each(function () {
    $(this).datetimepicker({
      timeFormat: 'hh:mm:ss TT',
      dateFormat: 'mm/dd/yy',
      minDate: new Date(),
      onSelect: function (dateText) {
        setCountDown(dateText);
      }
    });
  });
});