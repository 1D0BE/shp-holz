function clickMe(elem)
{
  var aside=$("aside");
  if((' ' + elem.className + ' ').indexOf("btn-selected") === -1) {
    elem.className += " btn-selected btnsided";
    aside.addClass("sided");
  }
  else {
    elem.className = elem.className.substring(0, elem.className.indexOf("btn-selected"))
    aside.removeClass("sided");
  }
}
