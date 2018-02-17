var n =  new Date();
var y = n.getFullYear();
var m = n.getMonth() + 1;
var d = n.getDate();
document.getElementById("currentdate").innerHTML = m + "/" + d + "/" + y;