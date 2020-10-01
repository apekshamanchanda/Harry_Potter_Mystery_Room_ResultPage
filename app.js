function myFunction(){
var txt;
var person = prompt("Please enter your username:", "Harry Potter");
var check= false;
var x;
for (x=0;x<4;x++)
{

      if(json[x].name==person)
      check=true;

}
      
      
  
   
if(check==true)

{
    
      
    
    document.getElementById("result").innerHTML="Click here";
    document.getElementById("result").href = "https://www.geeksforgeeks.org";
}
else{

       document.getElementById("result").innerHTML="Click here";
    document.getElementById("result").href = "https://www.google.com/";
   
    
   

}

}
