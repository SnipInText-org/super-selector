console.log("TEST SCRIPT IS LOADED");
chrome.runtime.sendMessage({action: "select", value: "NOTHING"},(res)=>{
    console.log("Message sent from content script");
    console.log(JSON.stringify(res).replace(/,/gm,",\n"));
});
