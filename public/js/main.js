function getHTML(page) {
  $.get(page, function(html) {
    $(".main-container").empty();
    $(".main-container").append(html);
  });
}

$(document).ready(function(){
    $("footer").show();
    getHTML('blog.html');
  $("#blog-link").on("click", function() {
    $("footer").show();
    getHTML('blog.html');
  });
  $("#nosotros-link").on("click", function() {
    $("footer").show();
    getHTML('nosotros.html');
  });
  $("#orderna-online-link").on("click", function() {
    $("footer").hide();
    getHTML('ordena-online.html');
  });
  $("#conectate-link").on("click", function() {
    $("footer").show();
    getHTML('conectate.html');
  });
});
