/* Task1.js - Add your Java Script Code Here */
function HorT()
{
  var p = document.getElementById("problem");

  var x= Math.random();

  if (x>=0.5)
  {
    p.innerHTML= "tails <br>";
  }

  else
  {
    p.innerHTML= "heads <br>";
  }

}

/* Task2.js - Add your Java Script Code Here */
function getPlace(value)
{
    var x= document.getElementById("problem");
    console.log(value);

    if (value=="Toronto")
    {
        x.innerHTML= "Value = Toronto";
    }
    
    if (value=="Montreal")
    {
        x.innerHTML= "Value = Montreal";
    }

    if (value=="Saskatoon")
    {
        x.innerHTML= "Value = Saskatoon";
    }

    if (value=="Ottawa")
    {
        x.innerHTML= "Value = Ottawa";
    }
}

/* Task3.js - Add your Java Script Code Here */
var amount=0;

function totalAmt(value)
{
    var x= document.getElementById("problem");

    amount+= parseFloat(value);

    x.innerHTML= "Amount = $"+amount.toFixed(2);
    //console.log(value);
}

/* Task4.js - Add your Java Script Code Here */
function rollDice()
{
    var x= document.getElementById("problem");

    var a,b,avg=0;
    var i=1;
    x.innerHTML="";

    while (i<=3)
    {
        a= Math.ceil(Math.random()*6);
        b= Math.ceil(Math.random()*6);

        x.innerHTML+= a+" "+b;

        if (i<3)
        {
            x.innerHTML+= ", ";
        }
        i++;

        avg+= a+b;
        
    } 

    x.innerHTML+= "<br> Average = "+((avg/3).toFixed(2));
    
}

/* Task5.js - Add your Java Script Code Here */
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

/* Task6.js - Add your Java Script Code Here */
var i= 20;

function counter()
{
    var x= document.getElementById("problem");
    
    x.innerHTML= i;
    console.log(i);

    i--;    
    
    if (i<0)
    {
        x.innerHTML= "liftoff!";
    }
}
    