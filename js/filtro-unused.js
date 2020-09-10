$(document).ready(function () {
  var btns = document.getElementsByTagName("button");
  btns[0].style.borderBottom = "1px black solid";
  btns[0].style.color = "black";

  $(".filter-button").click(function () {
    var value = $(this).attr("data-filter");

    for (i = 0; i < btns.length; i++) {
      btns[i].style.color = "grey";
      btns[i].style.borderBottom = "none";
    }
    this.style.color = "black";
    this.style.borderBottom = "1px black solid";

    if (value == "todos") {
      //$('.filter').removeClass('hidden');
      $(".filter").show("1000");
    } else {
      $(".filter")
        .not("." + value)
        .hide();
      $(".filter")
        .filter("." + value)
        .show("1000");
    }
  });
});
