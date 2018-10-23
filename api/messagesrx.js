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
//TODO: VALIDATIONS
MessagesRX.add = function(name, pass){
    MessagesRX[name] = function () {
        let input = this;
        return Rx.Observable.create(function (observer) {
            input.subscribe({
                next: (v) =>{
                    console.log("RX operator's input:\n", v/*JSON.stringify(v).replace(/,/gm,",\n")*/);
                    if(v.request.action === pass){
                        console.log("injector Operator says: NEXT");
                        observer.next(v);
                    }else{console.log("injector Operator says: NOTHING");}
                },
                error: (err) => observer.error(err("Error in operator injectorRequest!!!")),
                complete: () => observer.complete()
            });
    
        });
    };
    MessagesRX[name].send = function (val,cb,log){
        if(typeof(log) === "string"){
            console.log(log);
        }
        chrome.runtime.sendMessage({action: pass, value: val}, function(res){
            if(res){
                if(typeof(cb) === "function")
                    cb(res);
            }else{
                cb("[No response, but the message sent]");
            }
        });
    };
}
MessagesRX.add("performInjection", "background, do your thing");
MessagesRX.add("isInjected", "isInjected");
MessagesRX.add("wannaScript", "wannaScript");


