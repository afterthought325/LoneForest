function httpGet(theUrl)  // TODO: I feel like we can probably find a better way to do this, but this does 'work' -TF
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}



function w3_open() {
  document.getElementById("main").style.marginLeft = "200px";
  document.getElementById("mySidebar").style.width = "200px";
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("openNav").style.display = 'none';
}
function w3_close() {
  document.getElementById("main").style.marginLeft = "0%";
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("openNav").style.display = "inline-block";
}


