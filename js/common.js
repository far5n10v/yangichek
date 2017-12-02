function downloadVideo() {
  var links = getVideoLinks();

  chrome.runtime.sendMessage({
    action: "download",
    links: links
  }, function(response) {
    //console.log(response);
  });
}

showButton();
