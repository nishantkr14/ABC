
function rand()
{
    randoma=Math.floor((Math.random()*6)+1);
    var b=document.getElementByID("imgg");
    if(randoma==1)
    {
        b.src="d1.png";
    }
    else if(randoma==2)
    {
        b.src="d2.png";
    }
   else if(randoma==3)
    {
        b.src="d3.png";
    }
else if(randoma==4)
    {
        b.src="d4.png";
    }
   else if(randoma==5)
    {
        b.src="d5.png";
    }
   else if(randoma==6)
    {
        b.src="d6.png";
    }
  
}
function numRand(y)
{
    rand();
    y.innerHTML=randoma;
    window.ra=randoma;
}

alert("Welcome!! Click okk to continue");
