var refreshid = "refreshdiv";
var interval = 5; // In seconds
var url = "icestats.php";

var getHttpRequest = function () {
  var httpRequest = false;

  if (window.XMLHttpRequest) { // Mozilla, Safari,...
    httpRequest = new XMLHttpRequest();
    if (httpRequest.overrideMimeType) {
      httpRequest.overrideMimeType('text/xml');
    }
  }
  else if (window.ActiveXObject) { // IE
    try {
      httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
    }
    catch (e) {
      try {
        httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
      }
      catch (e) {}
    }
  }

  if (!httpRequest) {
    alert('You cannot use AJAX with this browser.');
    return false;
  }

  return httpRequest;
}

var xhr = getHttpRequest()

var refresh = function () {
  xhr.open('GET', url, true);
  xhr.setRequestHeader('X-Requested-With', 'xmlhttprequest');
  xhr.send();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
          document.getElementById(refreshid).innerHTML = xhr.responseText;
      } else {
          document.getElementById(refreshid).innerHTML = "Error";
      }
    }
  }
  setTimeout(refresh, interval*1000);
}

// Uncomment the following line if the title takes 5 seconds to show, I had this problem with JPlayer
//setTimeout(refresh, 150);
