window.onload = function() {
    var a = prompt("Enter a time in second");
    var b = a;
    var t = setInterval(() => {
        var s = document.getElementById("circle");
        s.style.strokeDashoffset = -(450 * a) / b;
        a = a < 10 ? '0' + a : a;
        document.getElementById("so").innerHTML = a;
        console.log(a);
        setTimeout(() => {
            s.style.transition = "2s";
        }, 10);
        a--;
        if (a == -1) {
            clearInterval(t);
        }
    }, 1000);
};