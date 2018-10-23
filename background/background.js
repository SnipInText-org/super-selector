console.log("BACKGROUND is loaded");
const inject = function(path, tab){
  chrome.tabs.executeScript(tab.id,{
    file: path
  });
};

// chrome.browserAction.onClicked.addListener(function(tab){
//   console.log("INJECTED\n" + JSON.stringify(tab).replace(/,/gm,",\n"));
//   inject("./rxjs.js", tab);
//   inject("./api/messagesrx.js", tab);
//   inject("./testcontent.js", tab);
// });

const subInject = MessagesRX
  .performInjection()
  .subscribe(
    options => {
        console.log("COLLECT:");
        Collect.log("incoming message:");
        console.log(JSON.stringify(options).replace(/,/gm, ",\n"));
        options.async = true;
        setTimeout(()=>options.sendResponse({res: "Rx RESPONSE !"}), 5000);
        chrome.tabs.query({active: true, currentWindow: true}, function(tab) {
          inject("./rxjs.js", tab);
          inject("./api/messagesrx.js", tab);
          inject("./testcontent.js", tab);
        });
      }
  );

