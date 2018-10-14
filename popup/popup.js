Ig.download().then(()=>Ig.get().map((x)=>JSON.stringify(x)).join("||"));

document.getElementById("selectoratorka").onclick = ()=>{
  console.log("click");
  Message.select.out();
}
document.getElementById("clearList").onclick = ()=>{
  console.log("clear");
  Ig.devastate();
}

window.onload = ()=>{
  console.log("Message Sent to someone");
  // chrome.runtime.sendMessage({action: "inject"});
  MessagesRX.performInjection.send(
    //page address
    "nothing here yet"
    ,(res)=>{
      console.log("Response to inject: \n");
      console.log(res);
  });
};