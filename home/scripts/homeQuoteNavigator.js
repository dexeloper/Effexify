$("#quote-circle1").addClass("quoteNavCircleMod");
$("#ceo-photo2").hide();
$("#ceo-photo3").hide();

$("#quote-circle1").click(function() {
  $("#ceo-photo1").fadeIn();
  $("#ceo-photo2").fadeOut();
  $("#ceo-photo3").fadeOut();
  $("#quote-circle1").addClass("quoteNavCircleMod");
  $("#quote-circle2").removeClass("quoteNavCircleMod");
  $("#quote-circle3").removeClass("quoteNavCircleMod");
  $(".ceoName").fadeOut(function () {
            $(".ceoName").text(($(".ceoName").text() == 'Peter Orloff' || 'Andrew Scott') ? 'Adam Parsons' : null).fadeIn();
        });
  $(".ceoAt").fadeOut(function () {
            $(".ceoAt").text(($(".ceoAt").text() == 'CEO @ PayFC' || 'CEO @ ArchScraper') ? 'CEO @ Euphorior' : null).fadeIn();
        });
  $(".quoteSubHeader").fadeOut(function () {
              $(".quoteSubHeader").text(($(".quoteSubHeader").text() == "One thing that did strike us was the highly responsive and caring nature of the team at Effexify. They streamlined the entire process and delivered a very clean and attractive UI design, a big thanks!" || "Their homepage redesign increased our inbound inquiries by four times. Really impressed how a good design can skyrocket sales, all thanks to Effexify.") ? "As an interior design agency, we needed a web page with high-quality content and aesthetics. The final product delivered by Effexify's team was beyond our expectations!" : null).fadeIn();
          });
});

$("#quote-circle2").click(function() {
  $("#ceo-photo1").fadeOut();
  $("#ceo-photo2").fadeIn();
  $("#ceo-photo3").fadeOut();
  $("#quote-circle1").removeClass("quoteNavCircleMod");
  $("#quote-circle2").addClass("quoteNavCircleMod");
  $("#quote-circle3").removeClass("quoteNavCircleMod");
  $(".ceoName").fadeOut(function () {
            $(".ceoName").text(($(".ceoName").text() == 'Adam Parsons' || 'Andrew Scott') ? 'Peter Orloff' : null).fadeIn();
        });
  $(".ceoAt").fadeOut(function () {
            $(".ceoAt").text(($(".ceoAt").text() == 'CEO @ Euphorior' || 'CEO @ ArchScraper') ? 'CEO @ PayFC' : null).fadeIn();
        });
  $(".quoteSubHeader").fadeOut(function () {
              $(".quoteSubHeader").text(($(".quoteSubHeader").text() == "As an interior design agency, we needed a web page with high-quality content and aesthetics. The final product delivered by Effexify's team was beyond our expectations!" || "Their homepage redesign increased our inbound inquiries by four times. Really impressed how a good design can skyrocket sales, all thanks to Effexify.") ? "One thing that did strike us was the highly responsive and caring nature of the team at Effexify. They streamlined the entire process and delivered a very clean and attractive UI design, a big thanks!" : null).fadeIn();
          });
});

$("#quote-circle3").click(function() {
  $("#ceo-photo1").fadeOut();
  $("#ceo-photo2").fadeOut();
  $("#ceo-photo3").fadeIn();
  $("#quote-circle1").removeClass("quoteNavCircleMod");
  $("#quote-circle2").removeClass("quoteNavCircleMod");
  $("#quote-circle3").addClass("quoteNavCircleMod");
  $(".ceoName").fadeOut(function () {
            $(".ceoName").text(($(".ceoName").text() == 'Adam Parsons' || 'Peter Orloff') ? 'Andrew Scott' : null).fadeIn();
        });
  $(".ceoAt").fadeOut(function () {
            $(".ceoAt").text(($(".ceoAt").text() == 'CEO @ Euphorior' || 'CEO @ PayFC') ? 'CEO @ ArchScraper' : null).fadeIn();
        });
  $(".quoteSubHeader").fadeOut(function () {
              $(".quoteSubHeader").text(($(".quoteSubHeader").text() == "As an interior design agency, we needed a web page with high-quality content and aesthetics. The final product delivered by Effexify's team was beyond our expectations!" || "One thing that did strike us was the highly responsive and caring nature of the team at Effexify. They streamlined the entire process and delivered a very clean and attractive UI design, a big thanks!") ? "Their homepage redesign increased our inbound inquiries by four times. Really impressed how a good design can skyrocket sales, all thanks to Effexify." : null).fadeIn();
          });
});
