function change_background_color(){

    var red=Math.floor(Math.random()*256)+1;
    var green=Math.floor(Math.random()*256)+1;
    var blue=Math.floor(Math.random()*256)+1;

    document.body.style.backgroundColor="rgb(" + red + "," + green + "," + blue + ")";

    var rgb_text=document.getElementById("rgb_number");
    rgb_text.innerHTML="rgb(" + red + "," + green + "," + blue + ")";
}
