$(document).ready(function () {

  var $popupButton = $(".popup__button");
  var $finishLink = $("#finish-link");

  $popupButton.on("click", function () {
    var count = chrome.extension.getBackgroundPage().count;
    $finishLink.text(count);
  });

});
