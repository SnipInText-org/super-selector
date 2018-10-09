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
            next: (v)=>{
                console.log("Message from Background: ", v);
                options.async = true;
            }
        }
    );