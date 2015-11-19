const $ = require("jquery");

$(document).ready(function () {

  var link = $("a");
  var regexp = new RegExp("^https?:\/\/fanky.jp/", "i");
  var time = 0;
  var m8LinkCount = 0;
  var fankyLinkCount = 0;

  function linkCheck() {

    link.each(function (i) {
      var $this = $(this);
      var href = $this.attr("href");
      time = 100 + time;

      setTimeout(function () {
        ajax(href).done(function (d) {
          console.log(d);
          var link = d;
          if (link.match(regexp)) {
            $this.css({"background-color": "yellow"});
            fankyLinkCount++;
            console.log("count: " + fankyLinkCount);
            sendMessage(fankyLinkCount);
          }
        }).fail(function () {
          console.dir(arguments);
        });

      }, time);

    });

  }

  function ajax(url) {
    var d = new $.Deferred();

    $.ajax({
      url: "//support.moba8.net/test/maeda/linkcheck/index.php?u=http://support.moba8.net/test/maeda/linkcheck/get_header.php?url=" + url,
      cache: false,
      timeout: 50000,
      async: true,
      processData: false,
      contentType: false,
      success: d.resolve,
      error: d.reject
    });

    return d.promise();
  }

  function sendMessage(c) {
    chrome.runtime.sendMessage({
      count: c,
      function (response) {
        console.log("message sent!!");
      }
    });
  }

  linkCheck();

});
