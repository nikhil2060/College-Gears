b=document.getElementById("dark")
b.addEventListener("click",function()
{
    document.querySelector("body").classList.add("dark-back")
    // b.style.color="white"
    for(var i=0;i<6;i++){
    document.getElementsByClassName("module")[i].style.boxShadow="none";
    }
    document.getElementById("light").style.color="white"

})
document.getElementById("light").addEventListener("click",function()
{
    document.querySelector("body").classList.remove("dark-back")
    for(var i=0;i<6;i++){
        document.getElementsByClassName("module")[i].removeAttribute("style");
        }
})
document.getElementsByClassName("softskill2-mod-1-1")[0].addEventListener("click",function(){
    document.getElementsByClassName("softskill2-vid")[0].setAttribute("src","https://www.youtube.com/embed/fAq_0McyjZI")
})

// module 2 softskills 2-----------------------------------------------------------------------------------------------

document.getElementsByClassName("softskill2-mod-2-1")[0].addEventListener("click",function(){
    document.getElementsByClassName("softskill2-vid")[0].setAttribute("src","https://www.youtube.com/embed/TdTFo5YwnoI")
})


// softskills 2 module 3 

document.getElementsByClassName("softskill2-mod-3-1")[0].addEventListener("click",function(){
    document.getElementsByClassName("softskill2-vid")[0].setAttribute("src","https://www.youtube.com/embed/2_5C1mmACaY")
})


// softskills 2 module 4

document.getElementsByClassName("softskill2-mod-4-1")[0].addEventListener("click",function(){
    document.getElementsByClassName("softskill2-vid")[0].setAttribute("src","https://www.youtube.com/embed/PL4kBl0VtP8")
})

// module 5 softskill2s 1

document.getElementsByClassName("softskill2-mod-5-1")[0].addEventListener("click",function(){
    document.getElementsByClassName("softskill2-vid")[0].setAttribute("src","https://www.youtube.com/embed/2_5C1mmACaY")
})
