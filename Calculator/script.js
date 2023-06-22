//clear all the values
function clearScreen() {
    document.getElementById("ID").value = "";
   }
//display values
function button(a)
{	
	document.getElementById("ID").value+=a;
}
//clear one by one value
function back(){
    var txt=document.getElementById("ID").value;
    document.getElementById("ID").value=txt.substring(0,txt.length-1)
}
//evaluates the expression and return result
function calculate() {
 var p = document.getElementById("ID").value;
 var q = eval(p);
 document.getElementById("ID").value = q;
}