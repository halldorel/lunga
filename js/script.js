$(".frame__text").each(function(i, el) {
  
  var stringContent = $(el).attr("data-content");

  var borderString = ""; 
  for(var i = 0; i < 40; i++) {
    borderString += "<span>" + stringContent + "</span> ";
  }

  $(el).find(".text").each(function(e, el) {
    $(el).html(borderString);
  });

  console.log(borderString)


});