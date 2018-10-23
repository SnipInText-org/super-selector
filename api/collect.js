const Collect = new function(){
    //collect logs as a json array
    let content = [];

    this.log = function(str, options){
        console.log(str + "\n" + new Error().stack);
    }
    this.error = function(str, options){
        
    }
}