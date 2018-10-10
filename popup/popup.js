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
  chrome.runtime.sendMessage({action: "inject"});
  MessagesRX.inject.send((res)=>{
      console.log("Response to inject: \n[");
      console.log(res);
  });
};

Rx.Observable.fromEvent( document.getElementsByTagName("body")[0] , "load")
  .throttleTime(2000)
  .subscribe(()=>alert("event: Load -> check to inject"));


  // document.getElementsByTagName("body")[0].onmouseover = ()=>{
//   ;
// }
