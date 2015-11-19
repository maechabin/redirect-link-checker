var counter = 0;

var updateCounter = function (counter) {
  chrome.browserAction.setBadgeText({text:String(counter)});
};



chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    parseItems = [];
    console.log(request);
    console.log(sender);
    console.log(sendResponse);

    var res = "finish";
    sendResponse(res);
    updateCounter(request.count);
  }
);
