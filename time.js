

function calcdays(){
    var d1 = document.getElementById("old").value;
    var d2 = document.getElementById("now").value;
    const dateOne= new Date(d1);
    const dateTwo= new Date(d2);
    const time = Math.abs(dateTwo - dateOne);
    const days = Math.ceil(time / (1000*60*60*24));
    document.getElementById("output").innerHTML=days;
    over.className="show";
}
function calcmin(){
    var d1 = document.getElementById("old").value;
    var d2 = document.getElementById("now").value;
    const dateOne= new Date(d1);
    const dateTwo= new Date(d2);
    const time = Math.abs(dateTwo - dateOne);
    const days = Math.ceil(time / (1000*60));
    document.getElementById("output").innerHTML=days;
    over.className="show";
}
function calcsec(){
    var d1 = document.getElementById("old").value;
    var d2 = document.getElementById("now").value;
    const dateOne= new Date(d1);
    const dateTwo= new Date(d2);
    const time = Math.abs(dateTwo - dateOne);
    const days = Math.ceil(time / (1000));
    document.getElementById("output").innerHTML=days;
    over.className="show";
}
function hide(){
    var over = document.getElementById("over")
    over.className="hide";
}



