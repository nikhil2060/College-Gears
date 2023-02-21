function containsUppercase(str) {
    return /[A-Z]/.test(str);
}
function containsOnlyNumbers(str) {
    return /^\d+$/.test(str);
  }
a=document.getElementsByClassName("signup-btn")
a[0].addEventListener("click",function()
{
 uname=document.getElementById("uname").value
 passcode=document.getElementById("passcode").value
 mails=document.getElementById("mails").value
 phone=document.getElementById("phone").value
 if(containsUppercase(uname)==false)
 {
    document.getElementsByClassName("warn_user")[0].innerHTML="*you have to select atleast one Upper character"
    document.getElementsByClassName("warn_user")[0].classList.add("warn");
 }
 else{
    document.getElementsByClassName("warn_user")[0].innerHTML=""
 }

 if(containsUppercase(passcode)==false)
 {
    document.getElementsByClassName("warn_passcode")[0].innerHTML="*select atleast 1 Upper character"
    document.getElementsByClassName("warn_passcode")[0].classList.add("warn");
 }
 else{
    document.getElementsByClassName("warn_user")[0].innerHTML=""
 }

 if(containsOnlyNumbers(phone)==false)
 {
    document.getElementsByClassName("warn_phone")[0].innerHTML="*contact number must contain digits only"
    document.getElementsByClassName("warn_phone")[0].classList.add("warn");
 }

 else if(phone.length<10 || phone.length>10)
 {
    document.getElementsByClassName("warn_phone")[0].innerHTML="*length should be 10 only"
    document.getElementsByClassName("warn_phone")[0].classList.add("warn");
 }

 else{
    document.getElementsByClassName("warn_user")[0].innerHTML=""
 }
 
});