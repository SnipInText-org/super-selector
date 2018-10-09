Ig.download().then(()=>Ig.get().map((x)=>JSON.stringify(x)).join("||"));

document.getElementById("selectoratorka").onclick = ()=>{
  console.log("click");
  Message.select.out();
}
document.getElementById("clearList").onclick = ()=>{
  console.log("clear");
  Ig.devastate();
}

Rx.Observable.fromEvent( document.getElementsByTagName("body")[0] , "mouseover")
  .throttleTime(2000)
  .subscribe(()=>console.log("hovering on the POPUP"))


  // document.getElementsByTagName("body")[0].onmouseover = ()=>{
//   ;
// }
