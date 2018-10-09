console.log("BACKGROUND is loaded");
const inject = function(path, tab){
  chrome.tabs.executeScript(tab.id,{
    file: path
  });
};

chrome.browserAction.onClicked.addListener(function(tab){
  console.log("INJECTED\n" + JSON.stringify(tab).replace(/,/gm,",\n"));
  inject("./rxjs.js", tab);
  inject("./testcontent.js", tab);
});

MessagesRX
  .injectRequest()
  .subscribe({
      next: options=>{
        console.log(JSON.stringify(options).replace(/,/gm, ",\n"));
        options.async = true;
        setTimeout(() => options.sendResponse({res: "Rx RESPONSE !"}), 2000);
      },
      error: (e)=>console.log("ERROR in MessagesRX:\n",e)
    }
  );

