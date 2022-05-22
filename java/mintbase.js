 document.addEventListener("DOMContentLoaded", function(){
     
    var fadeComplete = function (e) { StaticRange.appendChild(arr[0]);};

    var stage = document.getElementsByClassName("Animatedimages");
    var arr = stage.getElementsByTagName("animate");
    for(var i=0; i < arr.length; i++) 
    {
       arr[i].addEventListener("animationend", fadeComplete, false);
    }
 },false);