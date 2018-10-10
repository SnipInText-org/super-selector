console.log("BACKGROUND is loaded");
const inject = function(path, tab){
  chrome.tabs.executeScript(tab.id,{
    file: path
  });
};

chrome.browserAction.onClicked.addListener(function(tab){
  console.log("INJECTED\n" + JSON.stringify(tab).replace(/,/gm,",\n"));
  inject("./rxjs.js", tab);
  inject("./api/messagesrx.js", tab);
  inject("./testcontent.js", tab);
});

const subs = MessagesRX
  .inject()
  .subscribe({
      next: options=>{
        console.log("incoming message:");
        console.log(JSON.stringify(options).replace(/,/gm, ",\n"));
        options.async = true;
        options.sendResponse({res: "Rx RESPONSE !"});
      },
      error: (e)=>console.log("ERROR in MessagesRX:\n",e),
      complete: (v)=>{
        console.log("Background receive COMPLETE with: ", v);
        
      }
    }
  );

// setTimeout(()=>MessagesRX.inject.send((res)=>console.log("res to BACKGROUND : ", res)), 4000);
