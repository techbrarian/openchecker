//Bengtson-Fu!!!
//created by Jason Bengtson, MLIS, MA
//available under an MIT open-source license . . . let's share nicely!!
//This is my Kung-Fu
//This code is replicated in the mobile site. 
//I experimented with a common source for holidays, but had no server-side script to parse it at HSLIC
//each year holidays must be hard coded in hte main page and the mobile site



var listo = document.getElementsByTagName('li');
for(var x = 0; x > listo.length; x++){

listo[x].addEventListener("touchstart", "function(){this.className = 'hover';}", false);


}



//to make the is the library open check feature work
var d = new Date();
var monthofyear=(d.getMonth());
var dayofmonth=(d.getDate());
var dayofweek=(d.getDay());
var hourofday=(d.getHours());
var minutesofday=(d.getMinutes());
var isit="";
var until=11;

function opencheck()
{

isit="<strong style='display:inline'>OPEN";
//outlier switch--checks for holidays--must be adjusted yearly count months 0-11
//outcomes depend on the value of the register variable
//1= 7am-6pm   2=930am-6pm   3=12pm-6pm   anything else=closed

if (monthofyear==0)
{
    if (dayofmonth==21)
    {var register=4;
    otheropen(register);}
    
else {
regdays();
}
    }
    
else    if (monthofyear==4)
{
    if (dayofmonth==26)
    {var register=3;
    otheropen(register);}
    else if (dayofmonth==27)
    {var register=4;
    otheropen(register);}
else {
regdays();
}
    }
    
else if (monthofyear==6)
{
    if (dayofmonth==3)
    {var register=1;
    otheropen(register);}
    else if (dayofmonth==4)
    {var register=4;
    otheropen(register);}
else {regdays();}
    }
else if (monthofyear==8)
{
    if (dayofmonth==2)
    {var register=4;
    otheropen(register);}
else {regdays();}
    }
else if (monthofyear==10)
{
    if (dayofmonth==27)
    {var register=1;
    otheropen(register);}
    else if (dayofmonth==28)
    {var register=4;
    otheropen(register);}
    else if (dayofmonth==29)
    {var register=2;
    otheropen(register);}
else {regdays();}
    }
else if (monthofyear==11)
{
    if (dayofmonth>20)
    {var register=4;
    otheropen(register);}
else {regdays();}
    }   
else
{
    
    regdays();
    

}

}



function regdays()
{
//performs the open check against our regular schedule

switch (dayofweek)
{
case 0:
    if (hourofday>=23)
    {isit="<strong style='display:inline'>CLOSED Until 7AM</strong>";}
if (hourofday<12)
    {isit="<strong style='display:inline'>CLOSED Until 12PM</strong>";}

    break;

case 1:
    if (hourofday>=23||hourofday<7)
    {isit="<strong style='display:inline'>CLOSED Until 7AM</strong>";}
    break;

case 2:
    if (hourofday>=23||hourofday<7)
    {isit="<strong style='display:inline'>CLOSED Until 7AM</strong>";}

    break;

case 3:
    if (hourofday>=23||hourofday<7)
    {isit="<strong style='display:inline'>CLOSED Until 7AM</strong>";}
    break;

case 4:
    if (hourofday>=23||hourofday<7)
    {isit="<strong style='display:inline'>CLOSED Until 7AM</strong>";}

    break;

case 5:
    if (hourofday>=18||hourofday<7)
    {isit="<strong style='display:inline'>CLOSED Until 9:30AM</strong>";}
if (hourofday<18||hourofday>=7)
{until=6;}

    break;

case 6:
    if (hourofday>=18)
    {isit="<strong style='display:inline'>CLOSED Until 12PM</strong>";}
if ((hourofday<9)||((hourofday==9)&&(minutesofday<30)))
    {isit="<strong style='display:inline'>CLOSED Until 9:30AM</strong>";}

if (((hourofday<18)&&(hourofday>9))||((hourofday<18)&&(hourofday==9&&minutesofday>30)))
{until=6;}
    break;
    
}

if (isit.indexOf("OPEN")!=-1)
{
isit=isit+"<strong style='display:inline'> Until "+until+"PM</strong>";
}
//the commented out features below are used for troubleshooting and are left in place so they can be easily reactivated if a problem
//presents itself
//var coolit=dayofweek+"|"+hourofday+"|"+minutesofday+"|"+dayofmonth+"|"+monthofyear+"|"+"reg";
document.getElementById("morph").innerHTML=isit;
//document.getElementById("morph").innerHTML=until;
}

//Bengtson-Fu!!!
//created by Jason Bengtson, MLIS, MA

function otheropen(register)
{
//this function contains the hour and minute ranges for our nonstandard, nonholiday schedule times
if (register==1)
{
    
    if ((hourofday>18)||(hourofday<7))
    {isit="<strong style='display:inline'>CLOSED";}
    else
    {until=6;}
        }
else if (register==2)
{
    
    if ((hourofday>18)||(hourofday<9&&minutesofday<30))
    {isit="<strong style='display:inline'>CLOSED";}
    else
    {until=6;}
    }
else if (register==3)
{
    
    if ((hourofday>18)||(hourofday<12))
    {isit="<strong style='display:inline'>CLOSED";}
    else
    {until=6;}
        }
else
{
    
isit="<strong style='display:inline'>CLOSED";
    

}


if (isit.indexOf("OPEN")!=-1)
{

isit=isit+" Until "+until+"PM</strong>";

}

document.getElementById("morph").innerHTML=isit;

}
