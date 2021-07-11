$("#imageTopContainer").hide();

$("#ambi-banner").click(function() {
  $("#project-title").text("Ambiquil - Therapeutic Courses");
  $("#imageTopContainer").fadeIn();
  $('#project-image').attr('src','./images/Ambiquil.jpg');
  $("#body").addClass("disableBody");
});

$("#eupho-banner").click(function() {
  $("#project-title").text("Euphorior - Interior Design Agency");
  $("#imageTopContainer").fadeIn();
  $('#project-image').attr('src','./images/Euphorior.jpg');
  $("#body").addClass("disableBody");
});

$("#flexi-banner").click(function() {
  $("#project-title").text("Flexicred UX - Budget Management Software");
  $("#imageTopContainer").fadeIn();
  $('#project-image').attr('src','./images/Flexicred.jpg');
  $("#body").addClass("disableBody");
});

$(".closeProject").click(function() {
  $("#imageTopContainer").fadeOut();
  $("#body").removeClass("disableBody");

});

$(".projectImage").click(function() {
  $(".projectImage").toggleClass("zoomPort");
});
