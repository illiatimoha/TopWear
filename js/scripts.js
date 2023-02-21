$(document).ready(function () {
  function t(t) {
    return (
      "<span>" +
      (t = ("00" + t).substr(-2))[0] +
      "</span><span>" +
      t[1] +
      "</span>"
    );
  }
  $("a.button.product").click(function (t) {
    var e = $(this).attr("dataname");
    return (
      $("#order_form #comment").val(e),
      $("html, body").animate(
        { scrollTop: $("#order_form").offset().top },
        2e3
      ),
      !1
    );
  }),
  $("a.button.products").click(function (t) {
    var e = $(this).attr("dataname");
    return (
      $("#ordr").val(e),
      $("html, body").animate(
        { scrollTop: $("#ordr").offset().top },
        2e3
      ),
      !1
    );
  }),
    (function e() {
      var o = new Date(),
        r = new Date();
      r.setHours(23),
        r.setMinutes(59),
        r.setSeconds(59),
        23 === o.getHours() &&
          59 === o.getMinutes() &&
          59 === o.getSeconds &&
          r.setDate(r.getDate() + 1);
      var n = Math.floor((r.getTime() - o.getTime()) / 1e3),
        a = Math.floor(n / 3600);
      n -= 3600 * a;
      var s = Math.floor(n / 60);
      (n -= 60 * s),
        $(".timer .hours").html(t(a)),
        $(".timer .minutes").html(t(s)),
        $(".timer .seconds").html(t(n)),
        setTimeout(e, 200);
    })();
});
