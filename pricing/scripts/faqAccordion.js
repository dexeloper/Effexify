$(".faqBtn").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#faq-section").offset().top
    }, 1200);
});

$("#faqA1").hide();

$("#faqQ1").click(function() {
  $("#faqA1").slideToggle();
  $("#faqArrow1").toggleClass("chevronRotate");
});

$("#faqA2").hide();

$("#faqQ2").click(function() {
  $("#faqA2").slideToggle();
  $("#faqArrow2").toggleClass("chevronRotate");
});

$("#faqA3").hide();

$("#faqQ3").click(function() {
  $("#faqA3").slideToggle();
  $("#faqArrow3").toggleClass("chevronRotate");
});

$("#faqA4").hide();

$("#faqQ4").click(function() {
  $("#faqA4").slideToggle();
  $("#faqArrow4").toggleClass("chevronRotate");
});

$("#faqA5").hide();

$("#faqQ5").click(function() {
  $("#faqA5").slideToggle();
  $("#faqArrow5").toggleClass("chevronRotate");
});

$("#faqA6").hide();

$("#faqQ6").click(function() {
  $("#faqA6").slideToggle();
  $("#faqArrow6").toggleClass("chevronRotate");
});
