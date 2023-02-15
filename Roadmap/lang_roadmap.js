var j = 0;
var len = document.querySelectorAll(".btn").length;
for (var i = 0; i < len; i++) {
    document.querySelectorAll(".btn")[i].addEventListener("click", function() {
        document.querySelectorAll(".box")[j].style.visibility = "visible";
        j++;
    })
}
