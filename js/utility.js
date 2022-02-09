
    function download(elementName){
        domtoimage.toJpeg(document.getElementById(elementName), { quality: 0.95 })
            .then(function (dataUrl) {
                var link = document.createElement('a');
                link.download = 'my-usmnt-roster.jpeg';
                link.href = dataUrl;
                link.click();
            });
    }

    function getLink3(elementName) {
        saveToImgur(elementName, function(url) {
            const shareData = {
                title: 'USMNT team',
                text: 'your team selections',
                url: url
              }
            navigator.share(shareData)
        });
    }
    async function dummyAsync() {

    }

    function getLink2(elementName) {
        saveToImgur(elementName, function(url) {
            const clipboardItem = new ClipboardItem({
                'text/plain': dummyAsync().then((result) => {
            
                if (!result) {
                    return new Promise(async (resolve) => {
                        resolve(new Blob[``]())
                    })
                }
                const copyText = url
                    return new Promise(async (resolve) => {
                        resolve(new Blob([copyText]))
                    })
                }),
            })
            navigator.clipboard.write([clipboardItem]);
            alert(url + ' written to clipboard.')
        });
    }

    function getLink(elementName) {
        saveToImgur(elementName, function(url) {
            navigator.clipboard.writeText(url).then(function() {
                alert('copied ' + url + " to clipboard");
            }, function(err) {
            console.error('Async: Could not copy text: ', err);
            });
        });
    }

    function shareToFacebook(elementName) {
        saveToImgur(elementName, function(url) {
            window.open(
                'https://www.facebook.com/sharer/sharer.php?u=' + url,
                'facebook-share-dialog', 
                'width=626,height=436'); 
            });
    }

    function shareToTwitter(elementName) {
        saveToImgur(elementName, function(url) {
            window.open(
                'https://twitter.com/share?url=' + url + '&text=My USMNT squad pick (with oureleven.com)&hashtags=#USMNT,#oureleven',
                'twitter-share-dialog', 
                'width=626,height=436'); 
            });
    }

    function saveToImgur(elementName, chainFunction){
        domtoimage.toJpeg(document.getElementById(elementName), { quality: 0.95 })
        .then(function (dataUrl) {
            const formData = new FormData();
            formData.append('image', dataUrl.split(',')[1]);
            
            fetch('https://api.imgur.com/3/image', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    Authorization: 'Client-ID 1aa2a0872cf6b8a',
                },
                body: formData
            }).then(response => {
                if (response.ok) {
                    response.json().then(data => {
                        chainFunction(data.data.link);
                    });
                }
            }).catch(error => {
                alert(error);
            });
        });
    }
