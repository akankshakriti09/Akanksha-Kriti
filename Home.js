
var slideIndex,slides,dots,captionText;
function initGallery(){
    slideIndex = 0;
    slides=document.getElementsByClassName("imageHolder");
    slides[slideIndex].style.opacity=1;

    captionText=document.querySelector(".captionTextHolder .captionText");
    captionText.innerText=slides[slideIndex].querySelector(".captionText").innerText;

    //disable nextPrevBtn if slide count is one
    if(slides.length<2){
        var nextPrevBtns=document.querySelector(".leftArrow,.rightArrow");
        nextPrevBtns.style.display="none";
        for (i = 0; i < nextPrevBtn.length; i++) {
            nextPrevBtn[i].style.display="none";
        }
    }

    //add dots
    dots=[];
    var dotsContainer=document.getElementById("dotsContainer"),i;
    for (i = 0; i < slides.length; i++) {
        var dot=document.createElement("span");
        dot.classList.add("dots");
        dotsContainer.append(dot);
        dot.setAttribute("onclick","moveSlide("+i+")");
        dots.push(dot);
    }
    dots[slideIndex].classList.add("active");
}
initGallery();
function plusSlides(n) {
    moveSlide(slideIndex+n);
}
function moveSlide(n){
    var i;
    var current,next;
    var moveSlideAnimClass={
          forCurrent:"",
          forNext:""
    };
    var slideTextAnimClass;
    if(n>slideIndex) {
        if(n >= slides.length){n=0;}
        moveSlideAnimClass.forCurrent="moveLeftCurrentSlide";
        moveSlideAnimClass.forNext="moveLeftNextSlide";
        slideTextAnimClass="slideTextFromTop";
    }else if(n<slideIndex){
        if(n<0){n=slides.length-1;}
        moveSlideAnimClass.forCurrent="moveRightCurrentSlide";
        moveSlideAnimClass.forNext="moveRightPrevSlide";
        slideTextAnimClass="slideTextFromBottom";
    }

    if(n!=slideIndex){
        next = slides[n];
        current=slides[slideIndex];
        for (i = 0; i < slides.length; i++) {
            slides[i].className = "imageHolder";
            slides[i].style.opacity=0;
            dots[i].classList.remove("active");
        }
        current.classList.add(moveSlideAnimClass.forCurrent);
        next.classList.add(moveSlideAnimClass.forNext);
        dots[n].classList.add("active");
        slideIndex=n;
    }

}
var timer=null;
function setTimer(){
    timer=setInterval(function() {
        plusSlides(1) ;
    },3000);
}
setTimer();
function playPauseSlides() {
    var playPauseBtn=document.getElementById("playpauseBtn");
    if(timer==null){
        setTimer();
        playPauseBtn.style.backgroundPositionY="0px"
    }else{
        clearInterval(timer);
        timer=null;
        playPauseBtn.style.backgroundPositionY="-33px"
    }
}


function fontFunction1()
{
  document.getElementById("fontID1").style.fontSize="small";
  document.getElementById("fontID2").style.fontSize="small";
  document.getElementById("fontID3").style.fontSize="small";
  document.getElementById("fontID4").style.fontSize="small";
  document.getElementById("fontID5").style.fontSize="small";
  document.getElementById("font").style.fontSize="small";
  document.getElementById("font1").style.fontSize="small";
  document.getElementById("font2").style.fontSize="small";
  document.getElementById("font3").style.fontSize="small";
  document.getElementById("font4").style.fontSize="small";
  document.getElementById("font5").style.fontSize="small";
  document.getElementById("font6").style.fontSize="small";
  document.getElementById("font7").style.fontSize="small";
  document.getElementById("font8").style.fontSize="small";
  document.getElementById("font9").style.fontSize="small";
  document.getElementById("f10").style.fontSize="small";
  document.getElementById("font11").style.fontSize="small";
  document.getElementById("font12").style.fontSize="small";
  document.getElementById("font13").style.fontSize="small";
  document.getElementById("fontId").style.fontSize="small";
}
function fontFunction2()
{
  document.getElementById("fontID1").style.fontSize="large";
  document.getElementById("fontID2").style.fontSize="large";
  document.getElementById("fontID3").style.fontSize="large";
  document.getElementById("fontID4").style.fontSize="large";
  document.getElementById("fontID5").style.fontSize="large";
  document.getElementById("font").style.fontSize="large";
  document.getElementById("font1").style.fontSize="large";
  document.getElementById("font2").style.fontSize="large";
  document.getElementById("font3").style.fontSize="large";
  document.getElementById("font4").style.fontSize="large";
  document.getElementById("font5").style.fontSize="large";
  document.getElementById("font6").style.fontSize="large";
  document.getElementById("font7").style.fontSize="large";
  document.getElementById("font8").style.fontSize="large";
  document.getElementById("font9").style.fontSize="large";
  document.getElementById("font10").style.fontSize="large";
  document.getElementById("font11").style.fontSize="large";
  document.getElementById("font12").style.fontSize="large";
  document.getElementById("font13").style.fontSize="large";
  document.getElementById("fontId").style.fontSize="large";
}
function fontFunction3()
{
  document.getElementById("fontID1").style.fontSize="x-large";
  document.getElementById("fontID2").style.fontSize="x-large";
  document.getElementById("fontID3").style.fontSize="x-large";
  document.getElementById("fontID4").style.fontSize="x-large";
  document.getElementById("fontID5").style.fontSize="x-large";
  document.getElementById("font").style.fontSize="x-large";
  document.getElementById("font1").style.fontSize="x-large";
  document.getElementById("font2").style.fontSize="x-large";
  document.getElementById("font3").style.fontSize="x-large";
  document.getElementById("font4").style.fontSize="x-large";
  document.getElementById("font5").style.fontSize="x-large";
  document.getElementById("font6").style.fontSize="x-large";
  document.getElementById("font7").style.fontSize="x-large";
  document.getElementById("font8").style.fontSize="x-large";
  document.getElementById("font9").style.fontSize="x-large";
  document.getElementById("font10").style.fontSize="x-large";
  document.getElementById("font11").style.fontSize="x-large";
  document.getElementById("font12").style.fontSize="x-large";
  document.getElementById("font13").style.fontSize="x-large";
  document.getElementById("fontId").style.fontSize="x-large";
}



