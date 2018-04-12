// Create text-borders

$(".frame__text").each(function(i, el) {
  var stringContent = $(el).attr("data-content");

  var borderString = ""; 
  for(var i = 0; i < 40; i++) {
    borderString += "<span>" + stringContent + "</span> ";
  }

  $(el).find(".text").each(function(e, el) {
    $(el).html(borderString);
  });
});

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