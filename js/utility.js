function download(elementName) {
  if(isSafari) {
      getLink2(elementName);
      return;
  }

  domtoimage
    .toJpeg(document.getElementById(elementName), { quality: 0.95 })
    .then(function (dataUrl) {
      var link = document.createElement("a");
      link.download = "my-usmnt-roster.jpeg";
      link.href = dataUrl;
      link.click();
    });
}

function getLink2(elementName) {
  rasterizeDom(elementName, function (url) {
    let aElement = document.createElement("a");
    if(!isSafari) {
        aElement.target = '_blank';
    }
    aElement.href = url;
    aElement.click();
  });
}

function getLink(elementName) {
  rasterizeDom(elementName, function (url) {
    navigator.clipboard.writeText(url).then(
      function () {
        alert("copied " + url + " to clipboard");
      },
      function (err) {
        console.error("Async: Could not copy text: ", err);
      }
    );
  });
}

function shareToFacebook(elementName) {
  rasterizeDom(elementName, function (url) {
    let shareUrl = "https://www.facebook.com/sharer/sharer.php?u=" + url;
    let aElement = document.createElement("a");
    if(!isSafari) {
        aElement.target = '_blank';
    }
    aElement.href = shareUrl;
    aElement.click();
  });
}

function shareToTwitter(elementName) {
  rasterizeDom(elementName, function (url) {
    let shareUrl = "https://twitter.com/share?url=" + url + "&text=My USMNT squad pick (with oureleven.com)&hashtags=#USMNT,#oureleven";
    let aElement = document.createElement("a");
    if(!isSafari) {
        aElement.target = '_blank';
    }
    aElement.href = shareUrl;
    aElement.click();
  });
}

function rasterizeDom(elementName, chainFunction) {
  domtoimage
    .toJpeg(document.getElementById(elementName), { quality: 0.95 })
    .then(function (dataUrl) {
      if (isSafari()) {
        domtoimage
          .toJpeg(document.getElementById(elementName), { quality: 0.95 })
          .then(function (dataUrl) {
            saveToImgur(dataUrl, chainFunction);
          });
      } else {
        saveToImgur(dataUrl, chainFunction);
      }
    });
}

function saveToImgur(dataUrl, chainFunction) {
  const formData = new FormData();
  formData.append("image", dataUrl.split(",")[1]);

  fetch("https://api.imgur.com/3/image", {
    method: "POST",
    mode: "cors",
    headers: {
      Authorization: "Client-ID 1aa2a0872cf6b8a",
    },
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          chainFunction(data.data.link);
        });
      }
    })
    .catch((error) => {
      alert(error);
    });
}

function isSafari() {
  var ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf("safari") != -1) {
    if (ua.indexOf("chrome") > -1) {
      return false;
    } else {
      return true;
    }
  }
}
