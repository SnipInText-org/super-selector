console.log("TEST SCRIPT IS LOADED");

// const sendTaggedMessage = function(...tags){
//     chrome.runtime.sendMessage({tags, value: "what the fuck"},(res)=>{
//         console.log("TAGS: ",tags);
//         console.log("Response from background script: \n[");
//         if(res)
//             console.log(JSON.stringify(res).replace(/,/gm,",\n"));
//         console.log("](the end)")
//     });
// }

// sendTaggedMessage("notinject");
// setTimeout(sendTaggedMessage("inject"), 5000);

MessagesRX
    .inject()
    .subscribe(
        {
            next: (options)=>{
                console.log("Message from Background: ", options);
                options.async = true;
                options.sendResponse({message: "No Fuck YOU! (your content script)"});
            }
        }
    );