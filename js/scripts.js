function removeClass() {
  $("body").removeClass();
  $("li").removeClass();
  $("h1").removeClass();
  $("h2").removeClass();
}


$(document).ready(function() {
  $("#default").click(function() {
    removeClass();
    $("body").addClass("default");
    $("li").addClass("default");
    $("h1").addClass("default");
    $("h2").addClass("default");
  });

  $("#dark").click(function() {
    removeClass();
    $("body").addClass("dark");
    $("li").addClass("dark");
    $("h1").addClass("dark");
    $("h2").addClass("dark");
  });

  $("#light").click(function() {
    removeClass();
    $("body").addClass("light");
    $("li").addClass("light");
    $("h1").addClass("light");
    $("h2").addClass("light");
  });
});
