///// BOM 
let page = document.querySelector("#demo");
//console.log(page);

////  innerWidth
let pageWidth = window.innerWidth;
//console.log(pageWidth);


////   innerHeight
let pageHeight = window.innerHeight;
//console.log(pageHeight);
page.innerHTML += "Page width : " + pageWidth + " " + "Page height : " + pageHeight ;


//////  screen.width screen.height
page.innerHTML += "<br><br>" + "Screen width : " + screen.width + " " + "Screen height : " + screen.height ;
// console.log(screen.width);  // 1536
// console.log(screen.height); // 864


//////  screen.colorDepth screen.pixelDepth
page.innerHTML += "<br><br>" + "Screen width : " + screen.colorDepth + " " + "Screen height : " + screen.pixelDepth ;
// console.log(screen.colorDepth);
// console.log(screen.pixelDepth);


//////  window.location
page.innerHTML +=" <hr> " + "<br>" + "Window Location: " +
window.location + " " + "<br><br>" + "Window Location.href: " + 
window.location.href + "<br><br>" + "Window Location.hostname: " + 
window.location.hostname + "<br><br>" + "Window Location.protocol: " + 
window.location.protocol + "<br><br>" + "Window Location.pathname: " +
window.location.pathname + "<br><br>" + "Window Location.port: "+ 
window.location.port;
// console.log(window.location);
// console.log(window.location.href);
// console.log(window.location.hostname);
// console.log(window.location.protocol);

//////  window.history
let btn1 = document.getElementById("BtnBack");
//console.log(btn1);
btn1.onclick = function(){
    window.history.back()
};

let btn2 = document.getElementById("BtnForward");
btn2.onclick = function(){
    window.history.forward()
};
// console.log(btn2);



//////  window.navigator
page.innerHTML += "<hr>" + "<br><br>" + "Navigator cookie: " +
navigator.cookieEnabled + " " + "<br><br>" + "userAgent : " + 
navigator.userAgent + "<br><br>" + "Language :" + 
navigator.language + "<br><br>" + "navigator online : " + 
navigator.onLine;

// console.log(navigator.cookieEnabled);
// console.log(navigator.userAgent);
// console.log(navigator.language);
// console.log(navigator.onLine);


///// Timing Events

//   setTimeout()
setTimeout(()=>{alert("Thanks for waiting")} ,5000);

//   setTimeInterval()
let timeShow = document.querySelector("#Time");
//console.log(timeShow);

setInterval(()=>{timeShow.innerHTML = Date()},1000)