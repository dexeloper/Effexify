$("#fScListNo1").addClass("firstScNumberAnimate");
$("#fScListItem1").addClass("firstScListPerContainerAnimate");
$("#fSc-image2").hide();
$("#fSc-image3").hide();

$("#fScListItem1").click(function() {
  $("#fSc-image1").fadeIn();
  $("#fSc-image2").fadeOut();
  $("#fSc-image3").fadeOut();
  $("#fScListNo1").addClass("firstScNumberAnimate");
  $("#fScListItem1").addClass("firstScListPerContainerAnimate");
  $("#fScListNo2").removeClass("firstScNumberAnimate");
  $("#fScListItem2").removeClass("firstScListPerContainerAnimate");
  $("#fScListNo3").removeClass("firstScNumberAnimate");
  $("#fScListItem3").removeClass("firstScListPerContainerAnimate");
})

$("#fScListItem2").click(function() {
  $("#click-tip").fadeOut();
  $("#fSc-image1").fadeOut();
  $("#fSc-image2").fadeIn();
  $("#fSc-image3").fadeOut();
  $("#fScListNo1").removeClass("firstScNumberAnimate");
  $("#fScListItem1").removeClass("firstScListPerContainerAnimate");
  $("#fScListNo2").addClass("firstScNumberAnimate");
  $("#fScListItem2").addClass("firstScListPerContainerAnimate");
  $("#fScListNo3").removeClass("firstScNumberAnimate");
  $("#fScListItem3").removeClass("firstScListPerContainerAnimate");
})

$("#fScListItem3").click(function() {
  $("#click-tip").fadeOut();
  $("#fSc-image1").fadeOut();
  $("#fSc-image2").fadeOut();
  $("#fSc-image3").fadeIn();
  $("#fScListNo1").removeClass("firstScNumberAnimate");
  $("#fScListItem1").removeClass("firstScListPerContainerAnimate");
  $("#fScListNo2").removeClass("firstScNumberAnimate");
  $("#fScListItem2").removeClass("firstScListPerContainerAnimate");
  $("#fScListNo3").addClass("firstScNumberAnimate");
  $("#fScListItem3").addClass("firstScListPerContainerAnimate");
});
