var colors = new Array("CC3300","669900","FF6699");
var colors1 = new Array("CC0066","CCCC00","CC3300");
var colors2 = new Array("FF9933","CC0033","FF6633");
var colors3 = new Array("00CCCC","FF9900","CC3300");
var colors4 = new Array("CC3300", "FF9900", "0000CC");
var aColor;  
var aColor1;
var aColor2;
var aColor3;
var aColor4;
function loadText()
{
alert(1);
 aColor = colors[Math.floor(Math.random()*colors.length)];
 aColor1 = colors1[Math.floor(Math.random()*colors.length)];
 aColor2 = colors2[Math.floor(Math.random()*colors.length)];
 aColor3 = colors3[Math.floor(Math.random()*colors.length)];
 aColor4 = colors3[Math.floor(Math.random()*colors.length)];
document.getElementById("textDiv").style.color="#"+aColor;
document.getElementById("textDiv1").style.color="#"+aColor1;
document.getElementById("textDiv2").style.color="#"+aColor2;
document.getElementById("textDiv3").style.color="#"+aColor3;
document.getElementById("textDiv4").style.color="#"+aColor4;
setTimeout("loadText()",500);
}

function playPauseHLXD() {
   var musicHMJZ = document.getElementById('musicHMJZ');
    var musicHLXD = document.getElementById('musicHLXD');
    var musicSKBT = document.getElementById('musicSKBT');
    var musicHDL = document.getElementById('musicHDL');
    var musicCJML = document.getElementById('musicCJML');
    var musicSJL = document.getElementById('musicSJL');
     var musicDHXY = document.getElementById('musicDHXY');
     var musicSDYXZ = document.getElementById('musicSDYXZ');
       var musicTLBB = document.getElementById('musicTLBB');
    if (musicHLXD.paused){
        musicHLXD.play();
        musicHMJZ.pause();
        musicSKBT.pause();
        musicHDL.pause();
        musicCJML.pause();
         musicSJL.pause();
         musicDHXY.pause();
          musicSDYXZ.pause();
             musicTLBB.pause();
    }
    else{
        musicHLXD.pause();
    }
}

function playPauseHMJZ() {
   var musicHMJZ = document.getElementById('musicHMJZ');
    var musicHLXD = document.getElementById('musicHLXD');
    var musicSKBT = document.getElementById('musicSKBT');
    var musicHDL = document.getElementById('musicHDL');
    var musicCJML = document.getElementById('musicCJML');
    var musicSJL = document.getElementById('musicSJL');
     var musicDHXY = document.getElementById('musicDHXY');
     var musicSDYXZ = document.getElementById('musicSDYXZ');
       var musicTLBB = document.getElementById('musicTLBB');
    if (musicHMJZ.paused){
        musicHMJZ.play();
        musicHLXD.pause();
        musicSKBT.pause();
        musicHDL.pause();
        musicCJML.pause();
         musicSJL.pause();
         musicDHXY.pause();
          musicSDYXZ.pause();
             musicTLBB.pause();
    }
    else{
        musicHMJZ.pause();
    }
}

function playPauseSKBT() {
   var musicHMJZ = document.getElementById('musicHMJZ');
    var musicHLXD = document.getElementById('musicHLXD');
    var musicSKBT = document.getElementById('musicSKBT');
    var musicHDL = document.getElementById('musicHDL');
    var musicCJML = document.getElementById('musicCJML');
    var musicSJL = document.getElementById('musicSJL');
     var musicDHXY = document.getElementById('musicDHXY');
     var musicSDYXZ = document.getElementById('musicSDYXZ');
       var musicTLBB = document.getElementById('musicTLBB');
    if (musicSKBT.paused){
        musicSKBT.play();
        musicHLXD.pause();
        musicHMJZ.pause();
        musicHDL.pause();
        musicCJML.pause();
         musicSJL.pause();
         musicDHXY.pause();
          musicSDYXZ.pause();
             musicTLBB.pause();
    }
    else{
        musicSKBT.pause();
    }
}

function playPauseHDL() {
   var musicHMJZ = document.getElementById('musicHMJZ');
    var musicHLXD = document.getElementById('musicHLXD');
    var musicSKBT = document.getElementById('musicSKBT');
    var musicHDL = document.getElementById('musicHDL');
    var musicCJML = document.getElementById('musicCJML');
    var musicSJL = document.getElementById('musicSJL');
     var musicDHXY = document.getElementById('musicDHXY');
     var musicSDYXZ = document.getElementById('musicSDYXZ');
       var musicTLBB = document.getElementById('musicTLBB');
    if (musicHDL.paused){
        musicSKBT.pause();
        musicHLXD.pause();
        musicHMJZ.pause();
        musicCJML.pause();
         musicSJL.pause();
         musicDHXY.pause();
          musicSDYXZ.pause();
             musicTLBB.pause();
        musicHDL.play();
    }
    else{
        musicHDL.pause();
    }
}

function playPauseCJML() {
    var musicHMJZ = document.getElementById('musicHMJZ');
    var musicHLXD = document.getElementById('musicHLXD');
    var musicSKBT = document.getElementById('musicSKBT');
    var musicHDL = document.getElementById('musicHDL');
    var musicCJML = document.getElementById('musicCJML');
    var musicSJL = document.getElementById('musicSJL');
     var musicDHXY = document.getElementById('musicDHXY');
     var musicSDYXZ = document.getElementById('musicSDYXZ');
       var musicTLBB = document.getElementById('musicTLBB');
    if (musicCJML.paused){
        musicSKBT.pause();
        musicHLXD.pause();
        musicHMJZ.pause();
        musicHDL.pause();
         musicSJL.pause();
         musicDHXY.pause();
          musicSDYXZ.pause();
             musicTLBB.pause();
        musicCJML.play();
    }
    else{
        musicCJML.pause();
    }
}

function playPauseSJL() {
   var musicHMJZ = document.getElementById('musicHMJZ');
    var musicHLXD = document.getElementById('musicHLXD');
    var musicSKBT = document.getElementById('musicSKBT');
    var musicHDL = document.getElementById('musicHDL');
    var musicCJML = document.getElementById('musicCJML');
    var musicSJL = document.getElementById('musicSJL');
     var musicDHXY = document.getElementById('musicDHXY');
     var musicSDYXZ = document.getElementById('musicSDYXZ');
       var musicTLBB = document.getElementById('musicTLBB');
    if (musicSJL.paused){
        musicSKBT.pause();
        musicHLXD.pause();
        musicHMJZ.pause();
        musicHDL.pause();
        musicCJML.pause();
        musicDHXY.pause();
         musicSDYXZ.pause();
            musicTLBB.pause();
        musicSJL.play();
    }
    else{
        musicSJL.pause();
    }
}

function playPauseDHXY() {
   var musicHMJZ = document.getElementById('musicHMJZ');
    var musicHLXD = document.getElementById('musicHLXD');
    var musicSKBT = document.getElementById('musicSKBT');
    var musicHDL = document.getElementById('musicHDL');
    var musicCJML = document.getElementById('musicCJML');
    var musicSJL = document.getElementById('musicSJL');
     var musicDHXY = document.getElementById('musicDHXY');
     var musicSDYXZ = document.getElementById('musicSDYXZ');
       var musicTLBB = document.getElementById('musicTLBB');
    if (musicDHXY.paused){
        musicSKBT.pause();
        musicHLXD.pause();
        musicHMJZ.pause();
        musicHDL.pause();
        musicCJML.pause();
        musicSJL.pause();
         musicSDYXZ.pause();
            musicTLBB.pause();
        musicDHXY.play();
    }
    else{
        musicDHXY.pause();
    }
}

function playPauseSDYXZ() {
   var musicHMJZ = document.getElementById('musicHMJZ');
    var musicHLXD = document.getElementById('musicHLXD');
    var musicSKBT = document.getElementById('musicSKBT');
    var musicHDL = document.getElementById('musicHDL');
    var musicCJML = document.getElementById('musicCJML');
    var musicSJL = document.getElementById('musicSJL');
     var musicDHXY = document.getElementById('musicDHXY');
     var musicSDYXZ = document.getElementById('musicSDYXZ');
       var musicTLBB = document.getElementById('musicTLBB');
    if (musicSDYXZ.paused){
        musicSKBT.pause();
        musicHLXD.pause();
        musicHMJZ.pause();
        musicHDL.pause();
        musicCJML.pause();
        musicSJL.pause();
        musicDHXY.pause();
           musicTLBB.pause();
        musicSDYXZ.play();
    }
    else{
        musicSDYXZ.pause();
    }
}

function playPauseTLBB() {
    var musicHMJZ = document.getElementById('musicHMJZ');
    var musicHLXD = document.getElementById('musicHLXD');
    var musicSKBT = document.getElementById('musicSKBT');
    var musicHDL = document.getElementById('musicHDL');
    var musicCJML = document.getElementById('musicCJML');
    var musicSJL = document.getElementById('musicSJL');
     var musicDHXY = document.getElementById('musicDHXY');
     var musicSDYXZ = document.getElementById('musicSDYXZ');
       var musicTLBB = document.getElementById('musicTLBB');
    if (musicTLBB.paused){
        musicSKBT.pause();
        musicHLXD.pause();
        musicHMJZ.pause();
        musicHDL.pause();
        musicCJML.pause();
        musicSJL.pause();
        musicDHXY.pause();
        musicSDYXZ.pause();
        musicTLBB.play();
    }
    else{
        musicTLBB.pause();
    }
}



  window.addEventListener("load", function()
{
  document.getElementById("music_btnHMJZ").addEventListener("click", playPauseHMJZ, false);
}, false);

  window.addEventListener("load", function()
{
  document.getElementById("music_btnHLXD").addEventListener("click", playPauseHLXD, false);
}, false);

  window.addEventListener("load", function()
{
  document.getElementById("music_btnSKBT").addEventListener("click", playPauseSKBT, false);
}, false);

  window.addEventListener("load", function()
{
  document.getElementById("music_btnHDL").addEventListener("click", playPauseHDL, false);
}, false);

  window.addEventListener("load", function()
{
  document.getElementById("music_btnCJML").addEventListener("click", playPauseCJML, false);
}, false);

  window.addEventListener("load", function()
{
  document.getElementById("music_btnSJL").addEventListener("click", playPauseSJL, false);
}, false);

  window.addEventListener("load", function()
{
  document.getElementById("music_btnDHXY").addEventListener("click", playPauseDHXY, false);
}, false);

  window.addEventListener("load", function()
{
  document.getElementById("music_btnSDYXZ").addEventListener("click", playPauseSDYXZ, false);
}, false);

  window.addEventListener("load", function()
{
  document.getElementById("music_btnTLBB").addEventListener("click", playPauseTLBB, false);
}, false);


