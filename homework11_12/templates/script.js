
(function(){
  var cache = {};

  this.tmpl = function tmpl(str, data){
    // Figure out if we're getting a template, or if we need to
    // load the template - and be sure to cache the result.
    var fn = !/\W/.test(str) ?
      cache[str] = cache[str] ||
        tmpl(document.getElementById(str).innerHTML) :

      // Generate a reusable function that will serve as a template
      // generator (and which will be cached).
      new Function("obj",
        "var p=[],print=function(){p.push.apply(p,arguments);};" +

        // Introduce the data as local variables using with(){}
        "with(obj){p.push('" +

        // Convert the template into pure JavaScript
        str
          .replace(/[\r\t\n]/g, " ")
          .split("<%").join("\t")
          .replace(/((^|%>)[^\t]*)'/g, "$1\r")
          .replace(/\t=(.*?)%>/g, "',$1,'")
          .split("\t").join("');")
          .split("%>").join("p.push('")
          .split("\r").join("\\'")
      + "');}return p.join('');");

    // Provide some basic currying to the user
    return data ? fn( data ) : fn;
  };
})();


// Demo data.
$(function(){

  var dataObject = {
    members:[
    {id:1, quantity:"20 шт", text:" яйца"},
    {id:9, quantity:"5 шт", text:" помидоры"},
    {id:15, quantity:"3 шт", text:" огурци"},
    {id:22, quantity:"1 шт", text:" хлеб"},
    {id:78, quantity:"1 л", text:" молоко"},
    {id:876, quantity:"2 шт", text:" ананас"},
    {id:1033, quantity:"1 кг", text:" клубника"},
    {id:7899, quantity:"1 пачка", text:" салфетки"}
    ]
  }; // -> End of dataObject

  var results = document.getElementById("results");
  results.innerHTML = tmpl("item_tmpl", dataObject);

});
