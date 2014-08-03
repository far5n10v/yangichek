function findVideoId() {
  var re = /\/([^\/]*)\/$/i;
  var results = re.exec(document.location.href);

  if (results && results.length == 2) {
    return results[1];
  }

  return null;
}

function getVideoLinks() {
  var videoId = findVideoId();
  var videoTitle = document.getElementsByClassName("video-title")[0].innerText.replace(/^\s+|\s+$/g,'');

  return [
    {
      resolution: "480p",
      title: videoTitle,
      url: "http://v.mover.uz/" + videoId + "_b.mp4"
    },
    {
      resolution: "360p",
      title: videoTitle,
      url: "http://v.mover.uz/" + videoId + "_m.mp4"
    },
    {
      resolution: "240p",
      title: videoTitle,
      url: "http://v.mover.uz/" + videoId + "_s.mp4"
    }
  ];
  //"http://v.mover.uz/yEY5SQvj_m.mp4"
}

function showButton() {
  var videoPanel = document.getElementsByClassName("video-panel")[0];
  var embedButton = document.getElementById("embed");
  var button = document.createElement("a");
  button.setAttribute("class", "btn thin");

  if (embedButton.innerText == "Kiritish") {
    button.innerText = chrome.i18n.getMessage("download_uz");
  } else {
    button.innerText = chrome.i18n.getMessage("download");
  }

  button.onclick = downloadVideo;

  videoPanel.appendChild(button);
}