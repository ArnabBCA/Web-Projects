function startTime() 
{
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =h+":"+m;
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
    var d=(a.getDate());
    var day = days[a.getDay()];
    document.getElementById("month").innerHTML=day+", "+m+" "+d;
}

function showdiv()
{
    document.getElementById("message").style.visibility="visible";
    document.getElementById("message").style.opacity='1';
}
setTimeout("showdiv()",10000)
function insta()
{
    document.getElementById("instagram").style.visibility="visible";
    document.getElementById("instagram").style.opacity='1';
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
        document.getElementById("dynamic").style.height='150px';
        document.getElementById("dynamic").style.width='275px';
        document.getElementById("dynamic").style.borderRadius='35px';
        document.getElementById("dynamic").style.boxShadow='rgba(0, 0, 0, 0.4) 0px 30px 90px';

        document.getElementById("poster").style.visibility='visible';
        document.getElementById("poster").style.opacity='1';
        document.getElementById("poster").style.height='64px';
        document.getElementById("poster").style.width='64px';
        document.getElementById("poster").style.borderRadius='24px';
        document.getElementById("poster").style.left='3.5%';
        document.getElementById("poster").style.top='6.5%';

        document.getElementById("title").style.visibility='visible';
        document.getElementById("title").style.opacity='1';
        document.getElementById("title").style.left='30%';
        document.getElementById("title").style.top='14%';

        document.getElementById("artist").style.visibility='visible';
        document.getElementById("artist").style.opacity='60%';
        document.getElementById("artist").style.left='30%';
        document.getElementById("artist").style.top='30%';

        document.getElementById("duration").style.visibility='visible';
        document.getElementById("duration").style.opacity='1';
        document.getElementById("duration").style.width='180px';
        document.getElementById("progress").style.visibility='visible';
        document.getElementById("progress").style.opacity='1';
        
        document.getElementById("play").style.visibility='visible';
        document.getElementById("play").style.opacity='1';
        document.getElementById("play").style.top='66%';
        document.getElementById("play").style.height='43px';

        document.getElementById("previous").style.visibility='visible';
        document.getElementById("previous").style.opacity='1';
        document.getElementById("previous").style.top='71%';
        document.getElementById("previous").style.height='30px';

        document.getElementById("next").style.visibility='visible';
        document.getElementById("next").style.opacity='1';
        document.getElementById("next").style.top='71%';
        document.getElementById("next").style.height='30px';

        document.getElementById("musiclength").style.visibility='visible';
        document.getElementById("musiclength").style.opacity='60%';

        document.getElementById("musicstart").style.visibility='visible';
        document.getElementById("musicstart").style.opacity='60%';
    }
    else
    {
        document.getElementById("play").style.visibility='hidden';
        document.getElementById("play").style.opacity='0';

        document.getElementById("previous").style.visibility='hidden';
        document.getElementById("previous").style.opacity='0';

        document.getElementById("next").style.visibility='hidden';
        document.getElementById("next").style.opacity='0';

        document.getElementById("poster").style.visibility='hidden';
        document.getElementById("poster").style.height='20px';
        document.getElementById("poster").style.width='20px';
        document.getElementById("poster").style.opacity='0';

        document.getElementById("title").style.visibility='hidden';
        document.getElementById("title").style.opacity='0';

        document.getElementById("artist").style.visibility='visible';
        document.getElementById("artist").style.opacity='0%';

        document.getElementById("duration").style.visibility='hidden';
        document.getElementById("duration").style.opacity='0';
        document.getElementById("duration").style.width='180px';

        document.getElementById("progress").style.visibility='hidden';
        document.getElementById("progress").style.opacity='0';

        document.getElementById("musiclength").style.visibility='hidden';
        document.getElementById("musiclength").style.opacity='0';

        document.getElementById("musicstart").style.visibility='hidden';
        document.getElementById("musicstart").style.opacity='0';
        musicstatus();
    }
});

var musicon=0;

var length=0;

function play()
{
    let displayImage = document.getElementById('play');
    if(displayImage.src.match('Icons/play-fill.svg'))
    {
        displayImage.src='Icons/pause-fill.svg';
        document.getElementById('music').play();
        document.getElementById("wave").style.visibility='visible';
        
        music.ontimeupdate=function(e)
        {
            var length = document.getElementById("music").duration;
            document.getElementById("musiclength").innerHTML =(Math.floor(length)/60).toFixed(2);
            if(music.currentTime==music.duration)
            {
                displayImage.src='Icons/play-fill.svg';
            }

            var s = parseInt(music.currentTime % 60);
            if (s < 10) s = '0' + s;
            var m = parseInt((music.currentTime / 60) % 60);
            document.getElementById("musicstart").innerHTML = (m+":"+s);
            
            var progress=document.getElementById('progress');
            progress.style.width=Math.floor(music.currentTime*100/music.duration)+"%";     
        }
        musicon=1;
    }
    else
    {
        document.getElementById("wave").style.visibility='hidden';
        
        displayImage.src='Icons/play-fill.svg';
        document.getElementById("music").pause();

        musicon=0;
    }
}

function musicstatus()
{
    if(musicon==1)
    {
        document.getElementById("dynamic").style.height='26px';
        document.getElementById("dynamic").style.width='150px';
        
        document.getElementById("poster").style.visibility='visible';
        document.getElementById("poster").style.height='21px';
        document.getElementById("poster").style.width='21px';
        document.getElementById("poster").style.opacity='1';
        document.getElementById("poster").style.borderRadius='7px';
        document.getElementById("poster").style.top='10%';

        document.getElementById("duration").style.width='30px';     
    }
    else if(musicon==0)
    {
        document.getElementById("dynamic").style.height='26px';
        document.getElementById("dynamic").style.width='90px';
        document.getElementById("duration").style.width='30px';

        document.getElementById("wave").style.visibility='hidden';
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

(function($, window, document, undefined) {
    var isTouch = 'ontouchstart' in window,
        eStart = isTouch ? 'touchstart' : 'mousedown',
        eMove = isTouch ? 'touchmove' : 'mousemove',
        eEnd = isTouch ? 'touchend' : 'mouseup',
        eCancel = isTouch ? 'touchcancel' : 'mouseup',
        canPlayType = function(file) {
            var audioElement = document.createElement('audio');
            var audioElement = document.createElement('music');
        };
});


