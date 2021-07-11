$("#focus1").animate({"opacity": "1"}, 500);

$("#focus1").click(function() {
  $("#focus1").animate({"opacity": "1"}, 500);
  $("#focus2").animate({"opacity": "0.25"}, 500);
  $("#focus3").animate({"opacity": "0.25"}, 500);
  $("#product1").animate({"opacity": "1"}, 2000);
  $("#product2").animate({"opacity": "0"}, 500);
  $("#product3").animate({"opacity": "0"}, 500);

  $("#portBackground").removeClass("archBackground");
  $("#portBackground").removeClass("flexiBackground");
});


$("#focus2").click(function() {
  $("#focus1").animate({"opacity": "0.25"}, 500);
  $("#focus2").animate({"opacity": "1"}, 500);
  $("#focus3").animate({"opacity": "0.25"}, 500);
  $("#product1").animate({"opacity": "0"}, 500);
  $("#product2").animate({"opacity": "1"}, 2000);
  $("#product3").animate({"opacity": "0"}, 500);

  $("#portBackground").addClass("archBackground");
  $("#portBackground").removeClass("flexiBackground");
});

$("#focus3").click(function() {
  $("#focus1").animate({"opacity": "0.25"}, 500);
  $("#focus2").animate({"opacity": "0.25"}, 500);
  $("#focus3").animate({"opacity": "1"}, 500);
  $("#product1").animate({"opacity": "0"}, 500);
  $("#product2").animate({"opacity": "0"}, 500);
  $("#product3").animate({"opacity": "1"}, 2000);

  $("#portBackground").addClass("flexiBackground");
});
