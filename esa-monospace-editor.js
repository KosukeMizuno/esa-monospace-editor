function setfontfamily() {
  var post_form = document.getElementById("js-post-body-md");
  post_form.style.fontFamily = "Consolas, 'Courier New', Courier, Monaco, monospace, 'ＭＳ ゴシック', 'MS Gothic', Osaka−等幅";
}

if (window.addEventListener) {
  window.addEventListener("load", setfontfamily, false);
} else if (window.attachEvent) {
  window.attachEvent("onload", setfontfamily);
} else {
  window.onload = setfontfamily;
}
