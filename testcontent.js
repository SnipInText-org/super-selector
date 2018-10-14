console.log("TEST SCRIPT IS LOADED");

console.log("wazaap");
console.log(window.location.href.replace(/(\?.*)/,""));

MessagesRX
    .isInjected()
    .subscribe(
        {
            next: (options)=>{
                console.log("Message from Background: ", options);
                options.async = true;
                options.sendResponse({message: "No Fuck YOU! (your content script)"});
            }
        }
    );