console.log("shit");
function select() {
  console.log("selecting");

  return new Promise((ok,notok)=>{
    let $area = $("textarea");
    $area.addClass("selectorator");

    $("body").click((e) => {
      let superSelector = undefined;
      console.log("Selected:",e.target.tagName.toLowerCase());
      if(e.target.tagName.toLowerCase() == "textarea"){
        superSelector = $(e.target)
          .parents()
          .map(function () {
              let ids = this.id ? (this.id.split(" ").length > 1 ? "" : "#" + this.id.split(" ")[0]) : "";//more than one id is invalid
              let classes = $(this).attr("class") ? "." + $(this).attr("class").split(" ").join(".") : "";//select all classes and join them in selector string
              return this.tagName + ids + classes;
          })
          .get()
          .reverse()
          .join(">") + ">" + e.target.nodeName;
      }
      $area.removeClass("selectorator");//don't highlight :hover
      $("body").off("click");
      console.log("SUPERSELECTOR: ", superSelector);
      ok(superSelector);
    });
  });
}

select().then((ss)=>{
  chrome.runtime.sendMessage({action: "select", value: ss});
});
