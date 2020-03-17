

window.onload = function() {
      
      document.getElementById("c1").style.cursor = "pointer";
      document.getElementById("c2").style.cursor = "pointer";
      document.getElementById("c3").style.cursor = "pointer";

      document.getElementById("c1").addEventListener("click", f1);
	  document.getElementById("c2").addEventListener("click", f2);
	  document.getElementById("c3").addEventListener("click", f3);
}


 
function f1(){
   
      document.getElementById("c1").style.backgroundColor = "#ff00ff";
}

function f2(){

      document.getElementById("c2").style.backgroundColor = "#ff0000";
}

function f3(){

      document.getElementById("c3").style.backgroundColor = "#ffff00";
}
 
 

 
