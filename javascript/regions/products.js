function clickMe(elem)
{
  if((' ' + elem.className + ' ').indexOf("btn-selected") === -1) {
    elem.className += " btn-selected";
  }
  else {
    elem.className = elem.className.substring(0, elem.className.indexOf("btn-selected"))
  }
}
