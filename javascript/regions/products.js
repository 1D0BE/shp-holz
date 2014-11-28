function clickMe(elem)
{
  var aside=$("aside"),
  body = $("body");
  if((' ' + elem.className + ' ').indexOf("btn-selected") === -1) {
    elem.className += " btn-selected btnsided";
    aside.addClass("sided");
    body.removeClass("has-sidebar");
  }
  else {
    elem.className = elem.className.substring(0, elem.className.indexOf("btn-selected"))
    aside.removeClass("sided");
    body.addClass("has-sidebar");
  }
}
