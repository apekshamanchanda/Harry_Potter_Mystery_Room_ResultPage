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
    var a = document.createElement('a');  
                  
    var link = document.createTextNode("Please click here"); 
      
    
    a.appendChild(link);  
      
  
    a.title = "Please click here ";  
      
    
    a.href = "https://www.geeksforgeeks.org";  
      
    
    document.body.appendChild(a);  
}
else{

    var a = document.createElement('a');  
                  
  
    var link = document.createTextNode("Please click here"); 
      
    
    a.appendChild(link);  
      
   
    a.title = "Please click here";  
      
    
    a.href = "https://www.google.com/";  
      
   
    document.body.appendChild(a);  

}

}