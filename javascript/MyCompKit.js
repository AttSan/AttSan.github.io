function lab02()
{ }

function lab03()
{ }

function p01Func() 
{
   document.getElementById("problem");
   document.getElementById("problem").innerHTML="<p>I'm looking for a type of pancake originating from the Indian subcontinent, made from a fermented batter. It is somewhat similar to a crepe in appearance.</p>";

   document.getElementById("flowchart").setAttribute("src","MyCompKit/Lab4/dosaDesign.jpg");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","MyCompKit/Lab4/dosa1.jpg");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","MyCompKit/Lab4/dosa2.jpg");
   document.getElementById("another").style.display="none";
	
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;

}

function checkUncheck1()
{
  if (document.getElementById("check1").checked==true) 
  {
      document.getElementById("flowchart").style.display="inline";	 
  }
  else 
  {
    document.getElementById("flowchart").style.display="none";
  }
}

function checkUncheck2()
{
  if (document.getElementById("check2").checked==true) 
  {
    document.getElementById("js").style.display="inline";	 
	 
  }
  else 
  {    
      document.getElementById("js").style.display="none";	  
  }
}

function checkUncheck3()
{
  if (document.getElementById("check3").checked==true)
  {
    document.getElementById("another").style.display="inline";
  }
  else
  {
    document.getElementById("another").style.display="none";
  }
}

/* in Ex4, create function p02Func similar to p01Func */
function p02Func() 
{
   document.getElementById("problem");
   document.getElementById("problem").innerHTML="<p>I'm looking for an Iranian dish that consists of grilled chunks of chicken which are sometimes with bone and other times without bone. It'ss one of the most popular dishes of Iran. It is common to marinate the chunks in minced onion, lemon juice and sometimes saffron.</p>";

   document.getElementById("flowchart").setAttribute("src","MyCompKit/Lab4/jujehDesign.jpg");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","MyCompKit/Lab4/jujeh1.jpg");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","MyCompKit/Lab4/jujeh2.jpg");
   document.getElementById("another").style.display="none";
	
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;
}

function zoomIn()
{
    document.getElementById("flowchart").style.width="200%";
}

function zoomOut()
{
    document.getElementById("flowchart").style.width="100%";
}

function seperateDigits()
{
   var output= document.getElementById("problem"); 
   var a = parseInt(prompt("Please enter a number: ", ""));
  
   output.innerHTML="<p>number: </p>"+a+"<br><br>its digits: ";

   // outputObj.innerHTML="number: "+a+"<br><br>its digits: ";
  
    while (a>0 )
    {
        output.innerHTML += (+(a%10)+ ",");
        a=Math.floor(a/10);
    }

    output.innerHTML=output.innerHTML+"<br><br>"+"program ended";
    // document.getElementsByTagName("button")[0].setAttribute("disabled","true");
  
}

function digitsSum()
{
    var outputObj=document.getElementById("problem");
    var a = parseInt(prompt("Please enter a number: ", ""));
    
    outputObj.innerHTML="number: "+a+"<br><br>sum of digits: ";

    var sum= 0;
    var digit=0;
    while (a>0 )
    {
        digit= a%10;
        sum=digit+sum;
        a=a/10;
        a=Math.floor(a);
    }
    outputObj.innerHTML= outputObj.innerHTML+ sum;  

    outputObj.innerHTML=outputObj.innerHTML+"<br><br>"+"program ended";
    //document.getElementsByTagName("button")[0].setAttribute("disabled","true");
}

function noOf7s()
{
    var outputObj=document.getElementById("problem");
    var a = parseInt(prompt("Please enter a number: ", ""));
   
    outputObj.innerHTML="number: "+a+"<br><br>number of 7s: ";
  
    var counter= 0;
    while (a>0 )
    {
        var temp=a%10;
        if (temp==7)
        {
            counter+=1;
        }
        a=a/10;
        a=Math.floor(a);
    }
    outputObj.innerHTML= outputObj.innerHTML+ counter;  
   
    outputObj.innerHTML=outputObj.innerHTML+"<br><br>"+"program ended";
    document.getElementsByTagName("button")[0].setAttribute("disabled","true");
}

function reversedInt()
{
    var outputObj=document.getElementById("problem");
    var a = parseInt(prompt("Please enter a number: ", ""));
    outputObj.innerHTML="number: "+a+"<br><br>equal to reverse? ";

    var reverse=0;
    while (a>0 )
    {
        reverse+=reverse*(10*(a%10));
        a=a/10;
        a=Math.floor(a); 
    }

    if (reverse==a) 
    {
        outputObj.innerHTML= outputObj.innerHTML+ "yes";
    }
    else
    {
        outputObj.innerHTML= outputObj.innerHTML+ "no";
    }

    outputObj.innerHTML=outputObj.innerHTML+"<br><br>"+"program ended";
  //document.getElementsByTagName("button")[0].setAttribute("disabled","true");
}

function factorial() 
{
    var outputObj=document.getElementById("problem");
    var a = parseInt(prompt("Please enter a number: ", ""));
    outputObj.innerHTML="number: "+a+"<br><br>";

    var fact=1;
    for (var i=1; i<a+1; i++)
    {
        fact= fact*i;
    }

    outputObj.innerHTML =outputObj.innerHTML+ (+a+"! = "+fact);
    outputObj.innerHTML=outputObj.innerHTML+"<br><br>"+"program ended";
    document.getElementsByTagName("button")[0].setAttribute("disabled","true");
}
function fibonacci() 
{
    var outputObj=document.getElementById("problem");
    var a = parseInt(prompt("Please enter a number: ", ""));
    outputObj.innerHTML="number: "+a+"<br><br> Fibonacci: "; //CAN ALSO ADD 0, 1, HERE 

    var secondLast=0;
    var last=1;
    var newValue;
    var num=a-2;
    outputObj.innerHTML += (+secondLast+", "+last+", "); 
  
    for(i=1; i<=num; i++)
         {
            newValue=last+secondLast;
            secondLast= newValue;
            outputObj.innerHTML += (+newValue+", ");
         }
    
    outputObj.innerHTML=outputObj.innerHTML+"<br><br>"+"program ended";
    document.getElementsByTagName("button")[0].setAttribute("disabled","true");
}

function triangleByLoops() 
{
    var outputObj=document.getElementById("problem");
    var a = parseInt(prompt("Please enter a number: ", ""));
    outputObj.innerHTML="number: "+a+"<br><br>";

    var num=a;
    outputObj.style.textAlign="left";
    outputObj.style.fontSize="11px";

    for(i=1; i<=num; i++)
         {
            for (j=1; j<=i; j++)
            {
                outputObj.innerHTML = outputObj.innerHTML+ "XX ";
            }

            outputObj.innerHTML = outputObj.innerHTML+ "<br> ";  
         }

  outputObj.innerHTML=outputObj.innerHTML+"<br><br>"+"program ended";
  document.getElementsByTagName("button")[0].setAttribute("disabled","true");
}

function isPrime()
{
    var num;
    num=parseInt(prompt("Please enter a number", ""));

    var prime= true;
    var d= 2;

    while (prime==true && d<=(num/2))
    {
        if (num%d==0)
        {
            prime= false;
        }

        d= d+1;
    } //while = true

    if (prime==true)
    {
        output= num+" is a prime";
        alert(output);
        document.getElementById("problem").innerHTML= num+" is a prime.";
    }

    else
    {
        output= num+" is not prime";
        alert(output);
        document.getElementById("problem").innerHTML= num+" is not a prime.";

    }
} 

function equalSums()
{
  var sum1= 0; var sum2= 0;

  for (var i=1; i<=4; i++)
  {
      var num= parseInt(prompt("Enter a number",""));
      sum1= sum1 + num;
  }

  for (var i=1; i<=4; i++)
  {
      var num= parseInt(prompt("Enter a number",""));
      sum2= sum2 + num;
  }

  if (sum1==sum2) { alert("yes"); }

  else { alert("no"); }
}

function noOfPandNInt()
{
    var p=0;
    var n=0;

    do
    {
        var num= parseInt(prompt("Enter a number",""));

        if(num>0)
        {
            p=p+1;
        }

        else (num<0)
        {
            n=n+1;
        }
    }
    while ((num != 0) && (p<=2*n))
}

function equalNandP()
{
    var cnt1=0; var cnt2=0;

    for(var i=0; i<4; i++)
    {
        var num= parseInt(prompt("Enter a number",""));
        if (num<0) { cnt1= cnt1+1; }
    }

    for (var i=0; i<4; i++)
    {
        var num= parseInt(prompt("Enter a number",""));
        if (num>0) { cnt2= cnt2+1; }
    }

    if (cnt1==cnt2) { alert("yes"); }
    else { alert("no"); }
}

function HorT()
{
  var p = document.getElementById("problem");
  var x= Math.random();

  if (x>=0.5) { p.innerHTML= "tails <br>"; }
  else { p.innerHTML= "heads <br>"; }
}

function getPlace(value)
{
    var x= document.getElementById("problem");
    console.log(value);

    if (value=="Toronto") { x.innerHTML= "Value = Toronto"; }    
    if (value=="Montreal") { x.innerHTML= "Value = Montreal"; }
    if (value=="Saskatoon") { x.innerHTML= "Value = Saskatoon"; }
    if (value=="Ottawa") { x.innerHTML= "Value = Ottawa"; }
}

var amount=0; //GLOBAL VAR

function totalAmt(value)
{
    var x= document.getElementById("problem");
    amount+= parseFloat(value);
    x.innerHTML= "Amount = $"+amount.toFixed(2);
    //console.log(value);
}

function rollDice()
{
    var x= document.getElementById("problem");
    var a,b,avg=0; var i=1;
    x.innerHTML="";

    while (i<=3)
    {
        a= Math.ceil(Math.random()*6);
        b= Math.ceil(Math.random()*6);

        x.innerHTML+= a+" "+b;

        if (i<3) { x.innerHTML+= ", "; }
        i++;
        avg+= a+b;        
    } 

    x.innerHTML+= "<br> Average = "+((avg/3).toFixed(2));
}

function fullDate()
{
    var date= new Date();
    var x= document.getElementById("problem");
    var dayOfWeek= ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    var month= ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

    x.innerHTML= "Today is " + dayOfWeek[date.getDay()] +", "
                    + month[date.getMonth()] +" "+ date.getDate() +", "
                    +date.getFullYear();

}

var i= 20; //GLOBAL VAR

function counter()
{
    var x= document.getElementById("problem");
    
    x.innerHTML= i;
    console.log(i);
    i--;    
    
    if (i<0) { x.innerHTML= "liftoff!"; }
}
    