b=document.getElementById("dark")
b.addEventListener("click",function()
{
    document.querySelector("body").classList.add("dark-back")
    // b.style.color="white"
    document.getElementById("light").style.color="white"
    document.querySelector("samp").innerHTML="Light mode"

})
document.getElementById("light").addEventListener("click",function()
{
    document.querySelector("body").classList.remove("dark-back")
    document.querySelector("samp").innerHTML="Dark mode"
})