function clickMe(elem)
{
  console.log("Click");
  var aside=$("aside");
  console.log(aside);
  if((' ' + elem.className + ' ').indexOf("btn-selected") === -1) {
    elem.className += " btn-selected btnsided";
    aside.addClass("sided");
    console.log("if inside");
  }
  else {
    elem.className = elem.className.substring(0, elem.className.indexOf("btn-selected"))
    aside.removeClass("sided");
    console.log("else inside");

  }
}
