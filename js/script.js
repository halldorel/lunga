// Create text-borders


$("#open-nav").click(function(e) {
  $(".main__nav").css('display', 'block');
});

$("#close-nav").click(function(e) {
  $(".main__nav").css('display', 'none');
})

$(".image__widget .images__container img").first().addClass("visible");

$(".image__widget .arrow--left a").click(function(e) {
  e.preventDefault();
  $(e.target).parent().parent().parent().find(".visible").removeClass("visible").prev().addClass("visible");
  if($(e.target).parent().parent().parent().find(".visible").length == 0) {
    $(e.target).parent().parent().parent().find("img.photo").last().addClass("visible");
  }
});

$(".image__widget .arrow--right a").click(function(e) {
  e.preventDefault();
  $(e.target).parent().parent().parent().find(".visible").removeClass("visible").next().addClass("visible");

  console.log($(e.target).parent().parent().parent().find(".visible"));

  if($(e.target).parent().parent().parent().find(".visible").length == 0) {
    console.log($(e.target).parent().parent().parent().find("img").first());
    $(e.target).parent().parent().parent().find("img.photo").first().addClass("visible");
  }
});

$(window).on('scroll', function() {
  $("#lines path").each(function(i, el) {
    var scroll = $(window).scrollTop();
    $(el).css('transform', 'rotate(' + Math.sin((2*i/11)*Math.PI+(scroll/700))*5 + 'deg)');
    $(el).css('transform-origin', '50% 50%');
  });
});