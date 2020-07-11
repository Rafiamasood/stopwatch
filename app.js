var stbutton; 
var flag = 0; 
var ms  = 0; 
var sec = 0 ;
var min = 0;
var interval; 
var ms_in_Html; 
var sec_in_Html; 
var min_in_Html; 

function start()
{

    stbutton = document.querySelector('button')
    stbutton.disabled = true;
    flag = 1 ; 
     console.log(document.getElementById('stbtn').innerHTML);
     if (stbutton.disabled === true)
     {
        var changecolor = document.getElementById('stbtn');
        changecolor.style.color = "red";
        changecolor.style.background = "grey";
    }

   interval = setInterval(startTimer,10);
}


function stop()
{
    clearInterval(interval);
    var button = document.getElementById('stopbtn')
    button.disabled = true;    
     console.log(document.getElementById('stopbtn').innerHTML);
     if (button.disabled === true)
     {
        var changecolor = document.getElementById('stopbtn');
        changecolor.style.color = "red";
        changecolor.style.background = "grey";
        if (flag === 1 )
        {
            stbutton.disabled = false;
            flag = 0;
            changecolor = document.getElementById('stbtn');
            changecolor.style.color ="rgba(255, 255, 255, 0.596)";
            changecolor.style.background = "rgba(245, 161, 123,0.5)";
            if (flag === 0 )
            {   button.disabled = false;
                changecolor = document.getElementById('stopbtn');
                changecolor.style.color ="rgba(255, 255, 255, 0.596)";
                changecolor.style.background = "rgba(245, 161, 123,0.5)";
                flag = 1; 
            }
        } 
     }
}



function startTimer()
{   
    ms++; 
    ms_in_Html = document.getElementById('ms');
    ms_in_Html.innerHTML = ms; 
    if (ms >=100 )
    {
        sec++;
        sec_in_Html = document.getElementById('sec');
        sec_in_Html.innerHTML = sec;
        ms = 0; 
    }
    else if ( sec >= 60 )
    {
        min++; 
        min_in_Html = document.getElementById('min');
        min_in_Html.innerHTML = min;
        sec = 0 ; 
    }

   


}

function reset()
{
    clearInterval(interval);
    ms =  0;
    sec = 0;
    min = 0; 
    ms_in_Html.innerHTML = ms;
    sec_in_Html.innerHTML = sec;
    min_in_Html.innerHTML = min;
 
}




