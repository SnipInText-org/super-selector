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

  const Operator = function(innext){
      
  }

  Rx.Observable.prototype.injectRequest = function injectRequest() {
    var input = this;
    return Rx.Observable.create(function subscribe(observer) {
      input.subscribe({
        next: (v) =>{ 
            console.log("RX operator's input:\n",JSON.stringify(v).replace(/,/gm,",\n"));
            observer.next(v);
        },
        error: (err) => observer.error(err),
        complete: () => observer.complete()
      });
    });
  }