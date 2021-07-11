$(".navHamDropContainer").hide();

$("#navHamBtn").click(function() {
  $(".navHamDropContainer").fadeToggle();
});

setTimeout(function(){
  $("#opacity-load").fadeOut();
}, 500);
