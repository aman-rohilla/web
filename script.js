function centre()
{
    var div = document.getElementById("div");
    var dh = div.offsetHeight;
    var wh = window.innerHeight;
    var margin_top = (wh - dh - 2)/2;

    document.querySelector(':root').style.setProperty('--margin-top', margin_top.toString()+"px");
}