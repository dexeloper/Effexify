$("#predefinedShifted").hide();

$("#shiftToPredefined").click(function() {
  $("#hourlyShifted").fadeOut();
  $("#predefinedShifted").fadeIn();
});

$("#shiftToHourly").click(function() {
  $("#predefinedShifted").fadeOut();
  $("#hourlyShifted").fadeIn();
});
