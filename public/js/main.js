function getHTML(page) {
  $.get(page, function(html) {
    $(".main-container").empty();
    $(".main-container").append(html);
  });
}

$(document).ready(function(){
    getHTML('inicio.html');
  $("#inicio-link").on("click", function() {
    getHTML('inicio.html');
  });
  $("#nosotros-link").on("click", function() {
    getHTML('nosotros.html');
  });
  $("#orderna-online-link").on("click", function() {
    getHTML('ordena-online.html');
  });
  $("#conectate-link").on("click", function() {
    getHTML('conectate.html');
  });
});
