function appear() {
    var a = document.getElementsByClassName("pop-up");
        a[0].style.display = "block";
        bdy();
}

function bdy()
{
    var b = document.getElementById("con")
    b.style.filter = "blur(10px)";
    console.log(b);
}

function exit()
{
    var a = document.getElementsByClassName("pop-up");
        a[0].style.display = "none";
        var b = document.getElementById("con")
        b.style.filter = "blur(0px)";
}