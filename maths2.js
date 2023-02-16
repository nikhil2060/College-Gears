b=document.getElementById("dark")
b.addEventListener("click",function()
{
    document.querySelector("body").classList.add("dark-back")
    // b.style.color="white"
    for(var i=0;i<62;i++){
        document.getElementsByClassName("module")[i].style.boxShadow="none";
        }
    document.getElementById("light").style.color="white"

})
document.getElementById("light").addEventListener("click",function()
{
    document.querySelector("body").classList.remove("dark-back")
    for(var i=0;i<62;i++){
        document.getElementsByClassName("module")[i].removeAttribute("style");
        }
})