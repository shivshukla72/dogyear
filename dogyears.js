 function convert()
 {
 	document.getElementById("form").style.display="none";

 var value1=document.getElementById("humanage").value;

   if(value1=="")
   {
     value1=0;
   }
   var value2=document.getElementById("months").value;
   var result=0;
   value1=parseFloat(value1);
   value2=parseFloat(value2);
   value1=value1+value2/12;
  
  if(value1>21)
      {
      	result=(2+(value1-21)/4);
      	document.getElementById('dogage').innerHTML=convertmonth(result);
      } 
    else
     {
     	result=(value1/10.5);
     	document.getElementById('dogage').innerHTML=convertmonth(result);
     }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
 
  return false;
 }
 function convertmonth(result)
 {
 	debugger;
    var yy=Math.floor(result);
    var mm=(result-yy)*12;
    var dd=Math.round((mm-Math.floor(mm))*30);
     document.getElementById('display').innerHTML="Your Dog Age:"
     return  yy +" years "+ Math.floor(mm) +" months "+ dd+ " days ";
 }