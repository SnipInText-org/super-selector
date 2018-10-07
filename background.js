//inbound select request
const inject = function(path){
  chrome.tabs.executeScript({
    file: path
  });
}
chrome.runtime.onMessage.addListener(
function(message, callback) {
  if (message.action === "select"){
    inject('./content.js');
  }
});
