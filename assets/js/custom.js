var length=2;
var reddotat=0;
var path=Array(0,1,2);
var keyval=39;
$(document).ready(function(){    

    bodyfunc();
    // headfunc();
    randomreddot();
    keypress();
});
function randomreddot()
{
    $(".reddot").removeClass("reddot");
    var a= parseInt(Math.random()*100);
    if(a<10)
    var s="#0"+a+" > div";
    else
    var s="#"+a+" > div";
    reddotat=a;
    $(s).addClass("reddot");
    // alert(s);
}
function keypress()
{
    $(document).on("keydown",logkey);
}
function logkey(e){
    key=e.keyCode;

    if((key==37)&&(keyval!=39))
    {
        keyval=key;
    }
    else if((key==38)&&(keyval!=40))
    {
        keyval=key;
    }
    else if((key==39)&&(keyval!=37))
    {
        keyval=key;
    }
    else if((key==40)&&(keyval!=38))
    {
        keyval=key;
    }
}
function headfunc()
{
    var head=path[length];
    var val=0;
    var checkh=parseInt(path[length]/10)*10;
    var checkleft=checkh+9;
    if(reddotat==head)
    {
        length++;
        randomreddot();
    }
    else
    {
        path.shift();
    }
    if(keyval==37)
    {
        val=-1;
    }
    else if(keyval==38)
    {
        val=-10;
    }
    else if(keyval==39)
    {
        val=1;
    }
    else if(keyval==40)
    {
        val=10;
    }
    head+=val;
    if(((keyval==37)||(keyval==38))&&(head<0))head+=100;
    else if(((keyval==40)||(keyval==39))&&(head>99))head-=100;
    else if((keyval==37)&&(head<checkh))
    {
        head=checkh+9;
    }
    else if((keyval==39)&&(head>checkleft))
    {
        head=checkleft-9;
    }
    if(path.includes(head))
    {
        alert(length+" ");
        clearInterval(interval1);
        clearInterval(interval2);
    }
    // console.log("qqq",path);
    
    path.push(head);
    if(head<10)
    var s="#0"+head+" > div";
    else
    var s="#"+head+" > div";
    $(s).addClass("head");
}
setTimeout(headfunc, 1000);
var interval1 =setInterval(headfunc, 100);
var interval2 =setInterval(bodyfunc, 100);
function bodyfunc()
{
    $(".bodyly").removeClass("bodyly");
    $(".head").removeClass("head");
    $.each(path,function(key,i){
        // console.assert((i>0),"i>0");
        // console.log(path);
        // console.dir(path);
        if(i<10)
            var t="#0"+i+" > div";
        else
            var t="#"+i+" > div";
        if(path.length-1==key)
        {
            $(t).addClass("head");
        }
        else
        {
            $(t).addClass("bodyly");
        }
        
    });
   

}

var functionvaria=function()
{
    k=0;
}
// console.time("app start"); 
// console.error("warning message");
// console.group("Level 2 Header");
// console.log("Level 2");
// console.group();
// console.log("Level 3");
// console.warn("More of level 3");
// console.groupEnd();
// console.log("Back to level 2");
// console.groupEnd();
// console.debug("Back to the outer level");
// console.count(path);
// console.count(path);
// console.count(path);
// console.count(path);
// console.count(path);
// console.count(path);
// console.count(path);
// console.count(path);
// console.count(path);
// console.count(path);
// console.count(path);
// console.count(path);
// console.count(path);
// console.count(path);
// console.count(path);
// console.count();
// console.timeEnd("app start");