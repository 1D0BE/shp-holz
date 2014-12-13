function clickMe(elem)
{
  var aside=$("aside"),
  body = $("body"),
  elem1 = $("aside .button");
  if(!elem1.hasClass("button-selected")) {
    hideSidebar();
  } else {
    showSidebar();
  }
}

function showSidebar() {
  var aside=$("aside"),
  body = $("body"),
  elem = $("aside .button");
  elem.removeClass("btnsided");
  elem.removeClass("button-selected");
  aside.removeClass("sided");
  body.addClass("has-sidebar");
}

function hideSidebar() {
  var aside=$("aside"),
  body = $("body"),
  elem = $("aside .button");
  elem.addClass("btnsided");
  elem.addClass("button-selected");
  aside.addClass("sided");
  body.removeClass("has-sidebar");
}
