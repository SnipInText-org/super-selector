Ig.download().then(()=>Ig.get().map((x)=>JSON.stringify(x)).join("||"));

document.getElementById("selectoratorka").onclick = ()=>{
  console.log("click");
  MessagesRX.isInjected.send(
    "fuck you, content",
    (res)=>{
      console.log("RESPONSE: ")
      console.log(res);
    },
    "Sending the message:"
  )
}
document.getElementById("clearList").onclick = ()=>{
  console.log("clear");
  Ig.devastate();
  let startTime = Date.now();
  MessagesRX.wannaScript.send(
    "test value",
    (res)=>{
      console.log("Time spent: ")
      console.log(res + " - " + startTime + " = " );
    },
    "Sending the message:"
  )
}

window.onload = ()=>{
  console.log("INJECT! ");
  MessagesRX.performInjection.send(
    //page address
    "nothing here yet"
    ,(res)=>{
      console.log("Response to inject: \n");
      console.log(res);
  });
};