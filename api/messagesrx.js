const MessagesRX = Rx.Observable.fromEventPattern(
    handler => {
      const wrapper = (request, sender, sendResponse) => {
        const options = { async: false, request, sender, sendResponse };
        handler(options);
        return options.async;
      };
      chrome.runtime.onMessage.addListener(wrapper);
      return wrapper;
    },
    (handler, wrapper) => chrome.runtime.onMessage.removeListener(wrapper)
  );

  Rx.Observable.prototype.inject = function () {
    let input = this;
    console.log("WHAT THE FUCK iS")
    return Rx.Observable.create(function (observer) {
        input.subscribe({
            next: (v) =>{
                console.log("RX operator's input:\n", v/*JSON.stringify(v).replace(/,/gm,",\n")*/);
                if(v.request.action === "inject"){
                    console.log("injector Operator says: NEXT");
                    observer.next(v);
                }else{
                    console.log("injector Operator says: NOTHING");
                }
            },
            error: (err) => observer.error(err("Error in operator injectorRequest!!!")),
            complete: () => observer.complete()
        });

    });
};
Rx.Observable.prototype.inject.send = function (cb){
    console.log("MAGIC");
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {action: "inject"},(res)=>{
            console.log("Response to background script: \n[");
            if(res){
                console.log(JSON.stringify(res).replace(/,/gm,",\n"));
                if(cb)
                    cb(res);
            }
            console.log("](the end)")
        });
    });
};
