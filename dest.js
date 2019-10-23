    window.addEventListener("DOMContentLoaded", function(e) {

    var slider = document.getElementById("slider");
    var fadeComplete = function(e) { slider.appendChild(arr[0]); };
    var arr = slider.getElementsByTagName("a");
    for(var i=0; i < arr.length; i++) {
      arr[i].addEventListener("animationend", fadeComplete, false);
    }

  }, false);
  
  function fontFunction1()
{
  document.getElementById("font14").style.fontSize="small";
  document.getElementById("font15").style.fontSize="small";
  document.getElementById("font16").style.fontSize="small";

}
function fontFunction2()
{
  document.getElementById("font14").style.fontSize="large";
  document.getElementById("font15").style.fontSize="large";
  document.getElementById("font16").style.fontSize="large";  
}
function fontFunction3()
{
  document.getElementById("font14").style.fontSize="x-large";
  document.getElementById("font15").style.fontSize="x-large";
  document.getElementById("font16").style.fontSize="x-large";
}



function fontFunctionA1()
{
  document.getElementById("f1").style.fontSize="small";
  document.getElementById("f2").style.fontSize="small";
  document.getElementById("f3").style.fontSize="small";
  document.getElementById("f4").style.fontSize="small";
  document.getElementById("f5").style.fontSize="small";
  document.getElementById("f6").style.fontSize="small";
  document.getElementById("f7").style.fontSize="small";
  document.getElementById("f8").style.fontSize="small";
  document.getElementById("f9").style.fontSize="small";
  document.getElementById("f10").style.fontSize="small";  
}
function fontFunctionA2()
{
  document.getElementById("f1").style.fontSize="large";
  document.getElementById("f2").style.fontSize="large";
  document.getElementById("f3").style.fontSize="large";
  document.getElementById("f4").style.fontSize="large";
  document.getElementById("f5").style.fontSize="large";
  document.getElementById("f6").style.fontSize="large";
  document.getElementById("f7").style.fontSize="large";
  document.getElementById("f8").style.fontSize="large";
  document.getElementById("f9").style.fontSize="large";
  document.getElementById("f10").style.fontSize="large";
}
function fontFunctionA3()
{
  document.getElementById("f1").style.fontSize="x-large";
  document.getElementById("f2").style.fontSize="x-large";
  document.getElementById("f3").style.fontSize="x-large"; 
  document.getElementById("f4").style.fontSize="x-large";
  document.getElementById("f5").style.fontSize="x-large";
  document.getElementById("f6").style.fontSize="x-large";
  document.getElementById("f7").style.fontSize="x-large";
  document.getElementById("f8").style.fontSize="x-large";
  document.getElementById("f9").style.fontSize="x-large";
  document.getElementById("f10").style.fontSize="x-large";
}