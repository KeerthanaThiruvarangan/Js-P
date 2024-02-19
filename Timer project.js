

function intro()
{
    let time=new Date();


    let hrs1=time.getHours();
    let min1=time.getMinutes();
    let sec=time.getSeconds();

    let AM=document.getElementById('am');
    AM=innerHTML=am;

    if(hrs1>=12)
    {
        AM.innerHTML="PM";
    }
    else{
        AM.innerHTML="AM";
    }

    if(hrs1>12)
    {
        hrs1-=12;
    }
     
    else {
        hrs1=''+12;
    }

    
    document.getElementById('hours1').innerHTML=hrs1
    document.getElementById('minutes1').innerHTML=min1
    document.getElementById('seconds').innerHTML=sec



}
setInterval(intro,1000)



// // setInterval((intro)=>
// // {

// // },1000)//    Doubt




// function In()
// {
//     let time=new Date();
//     let sec=time.getSeconds();

//     document.getElementById('jtimer').innerHTML= "00" + ":" + sec;
    
// }

// clear=setInterval(In,1000)

// function myPause()
// {
//     clearInterval(clear);
// }