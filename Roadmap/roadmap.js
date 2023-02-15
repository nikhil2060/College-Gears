var len = document.querySelectorAll(".box li").length;
for (var i = 0; i < len; i++) {
    document.querySelectorAll(".box li")[i].addEventListener("click", function () {
        var s = this.innerHTML;
        document.querySelector("#" + s).classList.add("min-box-visible");
        for (var i = 0; i < document.querySelectorAll(".b").length; i++)
            document.querySelectorAll(".b")[i].classList.remove("box");
    })
}
for (var i = 0; i < document.querySelectorAll(".icon").length; i++) {
    document.querySelectorAll(".icon")[i].addEventListener("click", function () {
        for (var i = 0; i < document.querySelectorAll(".b").length; i++)
            document.querySelectorAll(".b")[i].classList.add("box");
        document.querySelector(".min-box-visible").classList.remove("min-box-visible");
    })
}