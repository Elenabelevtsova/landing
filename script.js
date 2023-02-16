$(document).ready(function () {
  $("a[href^='#']").on("click", function (event) {
    if (this.hash !== "") {
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        900,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});
$(".panel #one").hide(); // прячем все картики в панели
  $(".panel #one").first().show(); // показываем первую
  $(".panel a #one").show(); // показываем все стрелочки
  $(".panel a").click(function () {
    $(this).prev("#one").slideToggle(300); // переключаем hide и show
  });
