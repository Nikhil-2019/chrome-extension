chrome.runtime.onMessage.addListener(function(msg, sender) {
    if (msg == "toggle") {
        toggle();
    }
})

var iframe = document.createElement('iframe');
iframe.style.background = "green";
iframe.style.height = "100%";
iframe.style.width = "0px";
iframe.style.position = "fixed";
iframe.style.top = "0px";
iframe.style.right = "0px";
iframe.style.zIndex = "9000000000000000000";
iframe.frameBorder = "none";
iframe.src = chrome.extension.getURL("popup.html")

document.body.appendChild(iframe);

function toggle() {
    if (iframe.style.width == "0px") {
        let fwidth = 0;
        var id = setInterval(frame, 10);

        function frame() {
            if (fwidth === 310) {
                clearInterval(id);
            } else {
                fwidth += 10;
                console.log(iframe.style.width);
                iframe.style.width = fwidth + "px";
            }
        }

    } else {
        iframe.style.width = "0px";
    }
}