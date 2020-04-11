chrome.runtime.onMessage.addListener(function(msg, sender) {
    if (msg == "toggle") {
        toggle();
        console.log(msg);
    }
})

var iframe = document.createElement('iframe');

iframe.style.height = "100%";
iframe.style.width = "0px";
iframe.style.position = "fixed";
iframe.style.top = "0px";
iframe.style.right = "0px";
iframe.style.zIndex = "1000";
iframe.frameBorder = "none";
iframe.src = chrome.extension.getURL("popup.html")

document.body.appendChild(iframe);

function toggle() {
    if (iframe.style.width == "0px") {
        iframe.style.width = "300px";
    } else {
        iframe.style.width = "0px";
    }
}