$("#focus1").animate({"opacity": "1"}, 500);
$("#product2").hide();
$("#product3").hide();

$("#focus1").click(function() {
  $("#focus1").animate({"opacity": "1"}, 500);
  $("#focus2").animate({"opacity": "0.25"}, 500);
  $("#focus3").animate({"opacity": "0.25"}, 500);
  $("#product1").animate({"opacity": "1"}, 2000);
  $("#product2").fadeOut(1500);
  $("#product3").fadeOut(1500);

  $("#portBackground").removeClass("archBackground");
  $("#portBackground").removeClass("flexiBackground");
});


$("#focus2").click(function() {
  $("#focus1").animate({"opacity": "0.25"}, 500);
  $("#focus2").animate({"opacity": "1"}, 500);
  $("#focus3").animate({"opacity": "0.25"}, 500);
  $("#product1").animate({"opacity": "0"}, 500);
  $("#product2").fadeIn(1500);
  $("#product3").fadeOut(1500);

  $("#portBackground").addClass("archBackground");
  $("#portBackground").removeClass("flexiBackground");
});

$("#focus3").click(function() {
  $("#focus1").animate({"opacity": "0.25"}, 500);
  $("#focus2").animate({"opacity": "0.25"}, 500);
  $("#focus3").animate({"opacity": "1"}, 500);
  $("#product1").animate({"opacity": "0"}, 500);
  $("#product2").fadeOut(1500);
  $("#product3").fadeIn(1500);

  $("#portBackground").addClass("flexiBackground");
});


$("#view-project1").click(function() {
  $("#project-title").text("PayFC - Banking Solution");
  $("#imageTopContainer").fadeIn();
  $('#project-image').attr('src','./images/ArchScraper.jpg');
  $("#body").addClass("disableBody");
});

$("#view-project2").click(function() {
  $("#project-title").text("ArchScraper - Construction Agency");
  $("#imageTopContainer").fadeIn();
  $('#project-image').attr('src','./images/ArchScraper.jpg');
  $("#body").addClass("disableBody");
});

$("#view-project3").click(function() {
  $("#project-title").text("Flexicred UX - Budget Management Software");
  $("#imageTopContainer").fadeIn();
  $('#project-image').attr('src','./images/Flexicred.jpg');
  $("#body").addClass("disableBody");
});
