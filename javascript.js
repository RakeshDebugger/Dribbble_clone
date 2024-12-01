
var a=document.querySelector("#menu");
var b=document.querySelector(".responsive_ness");
var check=0;
a.addEventListener("click", function(){

 if(check==0){
   b.style="display:block; display:flex; transition:transform 0.3s;";
   check=1;
 }
 else{
    b.style.display="none";
    check=0;
 }

});


//animation js
AOS.init();