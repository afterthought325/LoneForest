function httpGet(theUrl)  // TODO: I feel like we can probably find a better way to do this, but this does 'work' -TF
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function httpPost(url, params)
{
  var request = ajaxRequest();
  if (request != false)
  {
    request.open("POST", url, true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    request.send(params);
  }
  else
  {
    throw console.error("Unable to perform ajax request");
  }
}

function ajaxRequest()
{
  try // Non IE Browser?
  { var request = new XMLHttpRequest() }
  catch(e1)
  {
    try // IE 6+?
    { request = new ActiveXObject("Msxml2.XMLHTTP") }
    catch(e2)
    {
      try // IE 5?
      { request = new ActiveXObject("Microsoft.XMLHTTP") }
      catch(e3) // There is no AJAX Support
      {
        request = false
      }
    }
  }
  return request
}

function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toUTCString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}

function eraseCookie(name) {
    createCookie(name,"",-1);
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
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

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
