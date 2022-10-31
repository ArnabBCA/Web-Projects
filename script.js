function startTime() 
{
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =  h + ":" + m;
    setTimeout(startTime, 1000);
}
function checkTime(i) 
{
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

function myDate() 
{
    var a = new Date();
    var month = new Array();
    var days = new Array();
    
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    
    
    days[0] = "Sunday";
    days[1] = "Monday";
    days[2] = "Tuesday";
    days[3] = "Wednesday";
    days[4] = "Thursday";
    days[5] = "Saturday";
    
    var m = month[a.getMonth()];
    var d=(a.getUTCDate()+1);
    var day = days[a.getDay()];

    document.getElementById("month").innerHTML = day+", "+m+" "+d;
}



function showdiv()
{
    document.getElementById("message").style.visibility="visible";
}
setTimeout("showdiv()",10000)
function insta()
{
    document.getElementById("instagram").style.visibility="visible";
}
setTimeout("insta()",20000)
function clear()
{
    document.getElementById("clear").style.visibility="visible";
    
}
setTimeout("clear()",20000)

function messageclear()
{
    document.getElementById("message").style.transform='translate(110%)'
    document.getElementById("message").style.transition='transform 1.5s';
    document.getElementById("message").style.transitionDelay='.4s';

    document.getElementById("instagram").style.transform='translate(110%)'
    document.getElementById("instagram").style.transition='transform 1.5s';
    document.getElementById("instagram").style.transitionDelay='.2s';

    document.getElementById("clear").style.transform='translate(300px)'
    document.getElementById("clear").style.transition='transform 1.5s';
}


window.addEventListener("click", function(e) 
{
    if (document.getElementById('dynamic').contains(e.target))
    {
        document.getElementById("dynamic").style.height='170px';
        document.getElementById("dynamic").style.width='317px';
        document.getElementById("dynamic").style.borderRadius='35px';
        document.getElementById("dynamic").style.boxShadow='rgba(0, 0, 0, 0.4) 0px 30px 90px';

        document.getElementById("poster").style.visibility='visible';
        document.getElementById("poster").style.height='75px';
        document.getElementById("poster").style.width='75px';
        document.getElementById("poster").style.borderRadius='25px';
        document.getElementById("poster").style.left='3%';
        document.getElementById("poster").style.top='6%';
        
        document.getElementById("play").style.visibility='visible';
        document.getElementById("play").style.top='60%';
        document.getElementById("play").style.height='50px';
    }
    else
    {
        document.getElementById("play").style.visibility='hidden';
        document.getElementById("poster").style.visibility='hidden';
        musicstatus();
    }
});

var musicon=0;
function play()
{
    let displayImage = document.getElementById('play');
    if(displayImage.src.match('Icons/play-fill.svg'))
    {
        displayImage.src='Icons/pause-fill.svg';
        musicon=1;
    }
    else
    {
        displayImage.src='Icons/play-fill.svg';
        musicon=0;
    }
}

function musicstatus()
{
    if(musicon==1)
    {
        document.getElementById("dynamic").style.height='30px';
        document.getElementById("dynamic").style.width='170px';


        document.getElementById("poster").style.visibility='visible';
        document.getElementById("poster").style.height='25px';
        document.getElementById("poster").style.width='25px';
        document.getElementById("poster").style.borderRadius='10px';
        document.getElementById("poster").style.top='7%';
    }
    else if(musicon==0)
    {
        document.getElementById("dynamic").style.height='30px';
        document.getElementById("dynamic").style.width='100px';
    }
}

function invertflash() 
{
    var x = document.getElementById('flash');
    if (x.style.filter == "invert(0)") 
    {
        x.style.filter = "invert(1)";
    } 
    else 
    {
        x.style.filter = "invert(0)";
    }
}
function invertcamera() 
{
    var y = document.getElementById('camera');
    if (y.style.filter == "invert(0)") 
    {
        y.style.filter = "invert(1)";
    } 
    else 
    {
        y.style.filter = "invert(0)";
    }
}