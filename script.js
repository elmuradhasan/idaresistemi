var hashChange = function () {
  var hash = window.location.hash;
  if (hash.startsWith("#/") && hash.length > 2) {
    hash = hash.replace("#/", "");
    var file = "src/" + hash + ".html";
    $("#main_div").load(file);
  } else {
    window.location = "#/teskilat";
  }
};
window.onhashchange = hashChange;
hashChange();

$(document).ready(function () {
  $("#bar").click(function () {
    $(this).toggleClass("padding_l");
    $(".nav_main_div").toggleClass("lefts");
    $(".right_line_main").toggleClass("full_w");
  });
  $("#first").click(function () {
    $(".sub_link_list").slideToggle();
    $("#first .fa-angle-up").toggleClass("rotate");
  });
  $("#second").click(function () {
    $(".sub_link_list_about").slideToggle();
    $("#second .fa-angle-up").toggleClass("rotate");
  });
});
function myFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("list");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
