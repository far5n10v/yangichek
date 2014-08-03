function onMessage(request, sender, sendResponse) {
  if (request.action == "download") {
    function checkLink(index) {
      if (index >= request.links.length) {
        return null;
      }

      var link = request.links[index];

      var xhr = new XMLHttpRequest();
      xhr.open("HEAD", link.url, true);
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            chrome.downloads.download({
              url: link.url,
              filename: link.title + ".mp4"
            });
            return null;
          } else {
            return checkLink(++index);
          }
        }
      }
      xhr.send();
    }

    checkLink(0);
  }
}

chrome.runtime.onMessage.addListener(onMessage);