console.log("BACKGROUND is loaded");
const inject = function(path, tab){
  chrome.tabs.executeScript(tab.id,{
    file: path
  });
};

chrome.browserAction.onClicked.addListener(function(tab){
  console.log("INJECTED\n" + JSON.stringify(tab).replace(/,/gm,",\n"));
  inject("./rxjs.js", tab);
  inject("./content.js", tab);
});

chrome.runtime.onMessage.addListener(
  function(message, callback) {
    if (message.action === "select"){
      inject('./content.js');
    }
  }
);
