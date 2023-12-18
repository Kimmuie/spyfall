//hide-unhide ig:kimmuie_ , ig:mozart_ko
document.getElementsByClassName("leftboxhide")[0].addEventListener("click", function () {
  var lbh = document.getElementsByClassName("leftboxhide")[0]; // Access the first element in the collection
  var items = document.getElementsByClassName("leftboxcontainer");

  if (lbh.textContent === "HIDE") {
    for (var i = 0; i < items.length; i++) {
      console.log("Hide Leftbox");
      items[i].style.transform = "translateX(-35dvh)";
    }
    lbh.textContent = "UNHIDE";
  } else if (lbh.textContent === "UNHIDE") {
    for (var i = 0; i < items.length; i++) {
      console.log("Unhide Leftbox");
      items[i].style.transform = "translateX(0%)";
    }
    lbh.textContent = "HIDE";
  }
});
  
//contactUXopen-close #ig:kimmuie_ , ig:mozart_ko
document.getElementsByClassName("leftboxbutton1")[0].addEventListener("click", function () {
  var items = document.getElementsByClassName("alertbox1");
  for (var i = 0; i < items.length; i++) {
    if (items[i].style.display === "none" || items[i].style.display === "") {
      var otherbox = document.getElementsByClassName("alertbox2");
      var guidebox = document.getElementsByClassName("guideboxinside");
      console.log("Popup contact");
      for (var h = 0; h < otherbox.length; h++) {
        if (otherbox[h].style.display === "block") {
          console.log("Popout donate");
          otherbox[h].style.animation = "pop-out 0.3s ease-in-out";
          otherbox[h].addEventListener("animationend", function animationEndHandler() {
            console.log("Popout leftboxbutton");
            this.style.display = "none";
            this.removeEventListener("animationend", animationEndHandler);
          });
        }
      }
      for (var u = 0; u < guidebox.length; u++) {
        if (guidebox[u].style.display === "block") {
          console.log("Popout guide");
          guidebox[u].style.animation = "pop-out 0.3s ease-in-out";
          guidebox[u].addEventListener("animationend", function animationEndHandler() {
            this.style.display = "none";
            this.removeEventListener("animationend", animationEndHandler);
          });
        }
      }
      items[i].style.display = "block";
      items[i].style.animation = "pop-in 1s ease-in-out";
      items[i].addEventListener("animationend", function animationEndHandler() {
        this.style.display = "block";
        this.removeEventListener("animationend", animationEndHandler);
      });
    } else {
      console.log("Popout contact");
      items[i].style.animation = "pop-out 0.3s ease-in-out";
      items[i].addEventListener("animationend", function animationEndHandler() {
        this.style.display = "none";
        this.removeEventListener("animationend", animationEndHandler);
      });
    }
  }
});

//donateUXopen-close #ig:kimmuie_ , ig:mozart_ko
document.getElementsByClassName("leftboxbutton2")[0].addEventListener("click", function () {
  var items = document.getElementsByClassName("alertbox2");

  for (var i = 0; i < items.length; i++) {
    if (items[i].style.display === "none" || items[i].style.display === "") {
      var otherbox = document.getElementsByClassName("alertbox1");
      var guidebox = document.getElementsByClassName("guideboxinside");
      console.log("Popup donate");
      for (var h = 0; h < otherbox.length; h++) {
        if (otherbox[h].style.display === "block") {
          console.log("Popout contact");
          otherbox[h].style.animation = "pop-out 0.3s ease-in-out";
          otherbox[h].addEventListener("animationend", function animationEndHandler() {
            this.style.display = "none";
            this.removeEventListener("animationend", animationEndHandler);
          });
        }
      }
      for (var u = 0; u < guidebox.length; u++) {
        if (guidebox[u].style.display === "block") {
          console.log("Popout guide");
          guidebox[u].style.animation = "pop-out 0.3s ease-in-out";
          guidebox[u].addEventListener("animationend", function animationEndHandler() {
            this.style.display = "none";
            this.removeEventListener("animationend", animationEndHandler);
          });
        }
      }
      items[i].style.display = "block";
      items[i].style.animation = "pop-in 1s ease-in-out";
      items[i].addEventListener("animationend", function animationEndHandler() {
        this.style.display = "block";
        this.removeEventListener("animationend", animationEndHandler);
      });
    } else if(items[i].style.display === "block"){
      console.log("Popout donate");
      items[i].style.animation = "pop-out 0.3s ease-in-out";
      items[i].addEventListener("animationend", function animationEndHandler() {
        this.style.display = "none";
        this.removeEventListener("animationend", animationEndHandler);
      });
    }
  }
});

//addbgandclosebutton #ig:kimmuie_ , ig:mozart_ko
var alertboxclose1 = document.getElementsByClassName("alertboxclose1")[0];
var alertboxclose2 = document.getElementsByClassName("alertboxclose2")[0];
var guideboxclose = document.getElementsByClassName("guideboxclose")[0];
var bg = document.getElementsByClassName("bg")[0];

function closealertbox1(){
  var items = document.getElementsByClassName("alertbox1");
  for (var j = 0; j < items.length; j++) {
    console.log("Popout contact");
    items[j].style.animation = "pop-out 0.3s ease-in-out";
    items[j].addEventListener("animationend", function animationEndHandler() {
      this.style.display = "none";
      this.removeEventListener("animationend", animationEndHandler);
    });
}}

function closealertbox2(){
  var items = document.getElementsByClassName("alertbox2");
  for (var j = 0; j < items.length; j++) {
    console.log("Popout donate");
    items[j].style.animation = "pop-out 0.3s ease-in-out";
    items[j].addEventListener("animationend", function animationEndHandler() {
      this.style.display = "none";
      this.removeEventListener("animationend", animationEndHandler);
    });
}}

function closeguidebox(){
  var items = document.getElementsByClassName("guideboxinside");
  for (var j = 0; j < items.length; j++) {
    console.log("Popout guide");
    items[j].style.animation = "pop-out 0.3s ease-in-out";
    items[j].addEventListener("animationend", function animationEndHandler() {
      this.style.display = "none";
      this.removeEventListener("animationend", animationEndHandler);
    });
}}

function closesoundbox(){
  var items = document.getElementsByClassName("soundbox");
  var fadeout1 = document.getElementsByClassName("soundboxonoff");
  var fadeout2 = document.getElementsByClassName("soundboxswitch");
  var fadeout3 = document.getElementsByClassName("soundboxslider");
  for (var i = 0; i < items.length; i++) {
    items[i].style.animation = "soundboxoff 0.5s ease-in-out normal";
    items[i].style.setProperty("--before-animation", "soundboxbeforeoff 0.5s ease-in-out normal");
    fadeout1[i].style.display = "none";
    fadeout2[i].style.display = "none";
    fadeout3[i].style.display = "none";
    items[i].addEventListener("animationend", function animationEndHandler() {
      this.style.display = "none";
      this.style.animation = "";
      this.style.setProperty("--before-animation", "");
      this.removeEventListener("animationend", animationEndHandler);
    });
  }
}

function closebottomrightbox(){
  var items = document.getElementsByClassName("bottomrightcode");
  for (var j = 0; j < items.length; j++) {
    console.log("Popout bottomrightcode");
    if (window.matchMedia("(max-height: 1400px) and (orientation: portrait)").matches) {
      items[j].style.top = "96dvh";
      items[j].style.height = "6dvh";
      items[j].style.setProperty("--before-BR-height", "8dvh");
    }else{
      items[j].style.top = "92dvh";
      items[j].style.height = "12dvh";
    }
    items[j].classList.remove("popup");
}}

alertboxclose1.addEventListener("click", closealertbox1);
bg.addEventListener("click", closealertbox1);
alertboxclose2.addEventListener("click", closealertbox2);
bg.addEventListener("click", closealertbox2);
guideboxclose.addEventListener("click", closeguidebox);
bg.addEventListener("click", closeguidebox);
bg.addEventListener("click", closesoundbox);
bg.addEventListener("click", closebottomrightbox);

//TruemoneyQRopen-close #ig:kimmuie_ , ig:mozart_ko
document.getElementsByClassName("alertboxcontactTM")[0].addEventListener("click", function () {
  var items = document.getElementsByClassName("alertboxQRcode");
  var itemsIMG = document.getElementsByClassName("alertboxQR");
  
  for (var i = 0; i < items.length; i++) {
    if (items[i].style.display === "none" || items[i].style.display === "") {
      console.log("Popdown TruemoneyQRCODE");
      items[i].style.animation = "pop-down 0.5s ease-in-out";
      items[i].style.display = "block";
      itemsIMG[i].src = "1TMQRcode.jpg";
      items[i].classList.replace('noqrcode', 'Truemoney');
    } else if (items[i].classList.contains("Promptpay")) {
      for (let j = 0; j < items.length; j++) {
        console.log("Popover PromptpayQRCODE(rapid)");
        items[j].style.animation = "pop-over 0.1s ease-in-out";
        items[j].classList.replace('Promptpay', 'Truemoney');
        items[j].addEventListener("animationend", function animationEndHandler() {
          this.style.display = "none";
          this.removeEventListener("animationend", animationEndHandler);
          console.log("Popdown TruemoneyQRCODE");
          items[j].style.animation = "pop-down 0.5s ease-in-out";
          items[j].style.display = "block";
          itemsIMG[j].src = "1TMQRcode.jpg";
        });
      }
    }else {
      for (let j = 0; j < items.length; j++) {
        console.log("Popover TruemoneyQRCODE");
        items[j].style.animation = "pop-over 0.5s ease-in-out";
        items[j].classList.replace('Truemoney', 'noqrcode');
        items[j].addEventListener("animationend", function animationEndHandler() {
          this.style.display = "none";
          this.removeEventListener("animationend", animationEndHandler);  
          itemsIMG[i].src = "";
        });
      }
    }
  }
});

//PropmptpayQRopen-close #ig:kimmuie_ , ig:mozart_ko
document.getElementsByClassName("alertboxcontactPM")[0].addEventListener("click", function () {
  var items = document.getElementsByClassName("alertboxQRcode");
  var itemsIMG = document.getElementsByClassName("alertboxQR");
  
  for (var i = 0; i < items.length; i++) {
    if (items[i].style.display === "none" || items[i].style.display === "") {
      console.log("Popdown PromptpayQRCODE");
      items[i].style.animation = "pop-down 0.5s ease-in-out";
      items[i].style.display = "block";
      itemsIMG[i].src = "1PMQRcode.jpg";
      items[i].classList.replace('noqrcode', 'Promptpay');
    } else if (items[i].classList.contains("Truemoney")) {
      for (let j = 0; j < items.length; j++) {
        console.log("Popover TruemoneyQRCODE(rapid)");
        items[j].style.animation = "pop-over 0.1s ease-in-out";
        items[j].classList.replace('Truemoney', 'Promptpay');
        items[j].addEventListener("animationend", function animationEndHandler() {
          this.style.display = "none";
          this.removeEventListener("animationend", animationEndHandler);
          console.log("Popdown PromptpayQRCODE");
          items[j].style.animation = "pop-down 0.5s ease-in-out";
          items[j].style.display = "block";
          itemsIMG[j].src = "1PMQRcode.jpg";
        });
      }
    } else {
      for (let j = 0; j < items.length; j++) {
        console.log("Popover PromptpayQRCODE");
        items[j].style.animation = "pop-over 0.5s ease-in-out";
        items[j].classList.replace('Promptpay', 'noqrcode');
        items[j].addEventListener("animationend", function animationEndHandler() {
          this.style.display = "none";
          this.removeEventListener("animationend", animationEndHandler);
          itemsIMG[j].src = "";
        });
      }
    }
  }
});

//setguidecontext #ig:kimmuie_ , ig:mozart_ko
var guideboxtext = document.getElementsByClassName("guideboxtext");
var originalGuideboxText = guideboxtext[0].getAttribute("data-default-content");
for (var i = 0; i < guideboxtext.length; i++) {
    guideboxtext[i].innerHTML = originalGuideboxText;
}

//guidechangelanguage #ig:kimmuie_ , ig:mozart_ko
function checkBoxChanged() {
  var checkBox = document.getElementsByClassName("checkbox");
  var guideboxinner = document.getElementsByClassName("guideboxinner");
  var guideboxinside = document.getElementsByClassName("guideboxinside");
  var guideboxclose = document.getElementsByClassName("guideboxclose");
  var guideboxswitch = document.getElementsByClassName("switch");
  for (var i = 0; i < checkBox.length; i++) {
    var currentRotation = getCurrentRotation(guideboxinner[i]);
    var newRotation = currentRotation + 180;
    if (checkBox[i].checked) {
      console.log("Guidebox is rotating");
      guideboxinner[i].style.transform = "rotateY(" + newRotation + "deg)";
      setTimeout(function () {
        console.log("Guidebox to Eng");
        for (var i = 0; i < guideboxinside.length; i++) {
        guideboxinside[i].style.borderRadius = "0dvh 6dvh 6dvh 6dvh";
        guideboxclose[i].style.left = "1dvh";
        guideboxclose[i].style.borderRadius = "0dvh 0dvh 3dvh 0dvh";
        guideboxclose[i].style.setProperty("--before-border-radius", "0dvh 0dvh 2dvh 0dvh");
        guideboxclose[i].style.setProperty("--after-border-radius", "0dvh 7dvh 7dvh 7dvh");
        guideboxclose[i].style.setProperty("--before-right", "1dvh");
        guideboxswitch[i].style.setProperty("--transform", "scaleX(-1)");
        guideboxtext[i].style.transform = "rotateY(180deg)";
        guideboxtext[i].innerHTML = "1. Each player will get 1 role, but the location will be the same for everyone.<br><br>2. The Spy must determine the location before time runs out to secure victory or conceal themselves to avoid being voted out after the time expires.<br><br>3. Start the question for searching suspect that can be spy, also the question must depend on location and role.<br><br>4. After being questioned, the person questioned becomes the next to ask, and this cycle continues until the time runs out or everyone is ready to vote.<br><br>5. Before the time expires, if the Spy knows the location, they can reveal themselves and answer the name of the location. If the answer is correct, the Spy wins.<br><br>6. When the time is up, all players must vote. If the vote is correct, all players win except the Spy. However, if the vote is incorrect, the Spy becomes the winner.";
        if (window.matchMedia("(max-height: 1400px) and (min-height: 951px) and (orientation: portrait)").matches) {
          guideboxswitch[i].style.left = "58.5dvh";
          guideboxtext[i].style.fontSize = "2.5dvh";//eng
        }else if (window.matchMedia("(max-height: 950px) and (orientation: portrait)").matches){
          guideboxswitch[i].style.left = "35dvh";
          guideboxtext[i].style.fontSize = "2dvh";
        }else{
          guideboxswitch[i].style.left = "69dvh";
          guideboxtext[i].style.fontSize = "2.5dvh";
        }
        }
      }, 290);
    } else {
      console.log("Guidebox is rotating");
      guideboxinner[i].style.transform = "rotateY(" + newRotation + "deg)";
      setTimeout(function () {
        console.log("Guidebox to Thai");
        for (var i = 0; i < guideboxinside.length; i++) {
        guideboxinside[i].style.borderRadius = "6dvh 0dvh 6dvh 6dvh";
        guideboxclose[i].style.left = "";
        guideboxclose[i].style.right = "1dvh";
        guideboxclose[i].style.borderRadius = "0dvh 0dvh 0dvh 3dvh";
        guideboxclose[i].style.setProperty("--before-border-radius", "0dvh 0dvh 0dvh 2dvh");
        guideboxclose[i].style.setProperty("--after-border-radius", "7dvh 0dvh 7dvh 7dvh");
        guideboxclose[i].style.setProperty("--before-right", "0dvh");
        guideboxswitch[i].style.left = "3dvh";
        guideboxswitch[i].style.setProperty("--transform", "scaleX(1)");
        guideboxtext[i].style.transform = "";
        guideboxtext[i].innerHTML = originalGuideboxText;
        guideboxswitch[i].style.left = "";
        if (window.matchMedia("(max-height: 1400px) and (min-height: 951px) and (orientation: portrait)").matches) {
          guideboxtext[i].style.fontSize = "3dvh";//thai
        }else if (window.matchMedia("(max-height: 950px) and (orientation: portrait)").matches){
          guideboxtext[i].style.fontSize = "2.4dvh";
        }else{
          guideboxtext[i].style.fontSize = "3.3dvh";
        }
    }
  }, 290);
    }
    }
}

//getoriginalrotationdegree #ig:kimmuie_ , ig:mozart_ko
function getCurrentRotation(element) {
  var transformValue = element.style.transform;
  var match = transformValue.match(/rotateY\(([-?\d]+)deg\)/);

  if (match && match[1]) {
    return parseFloat(match[1]);
  } else {
    return 0;
  }
}

//guideUXopen-close #ig:kimmuie_ , ig:mozart_ko
document.getElementsByClassName("toprightguidebutton")[0].addEventListener("click", function () {
  var items = document.getElementsByClassName("guideboxinside");

  for (var i = 0; i < items.length; i++) {
    if (items[i].style.display === "none" || items[i].style.display === "") {
      var otherbox = document.getElementsByClassName("alertbox");
      console.log("Popup guide");
      for (var h = 0; h < otherbox.length; h++) {
        if (otherbox[h].style.display === "block") {
          console.log("Popout leftboxbutton");
          otherbox[h].style.animation = "pop-out 0.3s ease-in-out";
          otherbox[h].addEventListener("animationend", function animationEndHandler() {
            this.style.display = "none";
            this.removeEventListener("animationend", animationEndHandler);
          });
        }
        items[i].style.display = "block";
        items[i].style.animation = "pop-in 1s ease-in-out";
        items[i].addEventListener("animationend", function animationEndHandler() {
          this.style.display = "block";
          this.removeEventListener("animationend", animationEndHandler);
        });
      }
    } else {
        console.log("Popout guide");
        items[i].style.animation = "pop-out 0.3s ease-in-out";
        items[i].addEventListener("animationend", function animationEndHandler() {
          this.style.display = "none";
          this.removeEventListener("animationend", animationEndHandler);
        });
      }
  }
});

//screensetter #ig:kimmuie_ , ig:mozart_ko
function updateLayout() {
  console.log("updatelayout")
  if (window.matchMedia("(max-height: 1400px) and (orientation: portrait)").matches) {
    var lbh = document.getElementsByClassName("leftboxhide")[0];
    var itemsLeftbox = document.getElementsByClassName("leftboxcontainer");
    for (var i = 0; i < itemsLeftbox.length; i++) {
      itemsLeftbox[i].style.transform = "translateX(-35dvh)";
    }
    lbh.textContent = "UNHIDE";
    
    var itemsMidbutton = document.getElementsByClassName("middlebutton");
    for (var y = 0; y < itemsMidbutton.length; y++) {
      itemsMidbutton[y].style.width = "40dvh";
      itemsMidbutton[y].style.fontSize = "4dvh";
      itemsMidbutton[y].style.height = "10dvh";
    }
    var itemsMidhead = document.getElementsByClassName("middlehead"); 
    for (var f = 0; f < itemsMidhead.length; f++) {
      itemsMidhead[f].style.top = "15dvh";
    }
    var itemsMidlogo = document.getElementsByClassName("middlelogo");
    for (var r = 0; r < itemsMidlogo.length; r++) {
      itemsMidlogo[r].style.top = "-39dvh";
      itemsMidlogo[r].style.height = "8dvh";
      itemsMidlogo[r].style.marginRight = "0dvh";
    }
    var itemsTR = document.getElementsByClassName("toprightbutton");
    for (var t = 0; t < itemsTR.length; t++) {
      itemsTR[t].style.top = "1dvh";
      itemsTR[t].style.right = "1dvh";
      itemsTR[t].style.height = "4dvh";
    }
    var itemsTRGuide = document.getElementsByClassName("toprightguidebutton");
    for (var g = 0; g < itemsTRGuide.length; g++) {
      itemsTRGuide[g].style.width = "12dvh";
      itemsTRGuide[g].style.marginRight = "14dvh";
      itemsTRGuide[g].style.fontSize = "2dvh";
    }
    var itemsTRBright = document.getElementsByClassName("toprightbrightbutton");
    for (var d = 0; d < itemsTRBright.length; d++) {
      itemsTRBright[d].style.width = "6dvh";
      itemsTRBright[d].style.marginRight = "7dvh";
    }
    var itemsTRSound = document.getElementsByClassName("toprightsoundbutton");
    for (var v = 0; v < itemsTRSound.length; v++) {
      itemsTRSound[v].style.width = "6dvh";
    }
    var itemsTRscale = document.getElementsByClassName("toprighticonscale");
    for (var e = 0; e < itemsTRscale.length; e++) {
      itemsTRscale[e].style.transform = "scale(var(--ggs, 0.8))";
    }
    var itemsTRscalemoon = document.getElementsByClassName("toprighticonscalemoon");
    for (var k = 0; k < itemsTRscalemoon.length; k++) {
      itemsTRscalemoon[k].style.transform = "rotate(-135deg) scale(var(--ggs, 0.8))";
    }
    var itemsBRcode = document.getElementsByClassName("bottomrightcode");
    for (var g = 0; g < itemsBRcode.length; g++) {
      itemsBRcode[g].style.top = "96dvh";
      itemsBRcode[g].style.width = "20dvh";
      itemsBRcode[g].style.height = "6dvh";
      itemsBRcode[g].style.borderRadius = "2dvh 2dvh 0dvh 0dvh";
      itemsBRcode[g].style.setProperty("--before-BR-fontsize", "1.5dvh");
      itemsBRcode[g].style.setProperty("--before-BR-padding", "1dvh");
    }
    var itemsBRicon = document.getElementsByClassName("bottomrightgithubicon");
    for (var l = 0; l < itemsBRicon.length; l++) {
      itemsBRicon[l].style.height = "6dvh";
      itemsBRicon[l].style.top = "4dvh";
    }
    var itemsBRtext = document.getElementsByClassName("bottomrightgithubtext");
    for (var m = 0; m < itemsBRtext.length; m++) {
      itemsBRtext[m].style.fontSize = "1.5dvh";
      itemsBRtext[m].style.top = "6.5vh";
    }
    var itemsSoundbox = document.getElementsByClassName("soundbox");
    var itemsSoundboxonoff = document.getElementsByClassName("soundboxonoff");
    var itemsSoundboxswitch = document.getElementsByClassName("soundboxswitch");
    for (var j = 0; j < itemsSoundbox.length; j++) {
      itemsSoundbox[j].style.top = "3.5dvh";
      itemsSoundbox[j].style.right = "1dvh";
      itemsSoundbox[j].style.width = "6dvh";
      itemsSoundboxonoff[j].style.padding = "0dvh 0dvh 0dvh 1dvh";
      itemsSoundboxswitch[j].style.left = "-1dvh";
    }
    var itemsSoundboxslider = document.getElementsByClassName("soundboxslider");
    for (var p = 0; p < itemsSoundboxslider.length; p++) {
      itemsSoundboxslider[p].style.left = "-7dvh";
    }
    var itemsRedborderBR = document.getElementsByClassName("redborderbottomright");
    for (var b = 0; b < itemsRedborderBR.length; b++) {
      itemsRedborderBR[b].style.setProperty("--before-BR-top", "0.5dvh");
      itemsRedborderBR[b].style.setProperty("--before-BR-left", "0.5dvh");      
      itemsRedborderBR[b].style.setProperty("--before-BR-right", "0.5dvh");
    }
    var itemsRedborderSB = document.getElementsByClassName("redbordersoundbox");
    for (var s = 0; s < itemsRedborderSB.length; s++) {
      itemsRedborderSB[s].style.setProperty("--before-SB-top", "0.5dvh");
      itemsRedborderSB[s].style.setProperty("--before-SB-left", "0.5dvh");      
      itemsRedborderSB[s].style.setProperty("--before-SB-right", "0.5dvh");
      itemsRedborderSB[s].style.setProperty("--before-SB-bottom", "0.5dvh");
    }
    
    var checkBox = document.getElementsByClassName("checkbox");
    var guideboxtext = document.getElementsByClassName("guideboxtext");
    var guideboxswitch = document.getElementsByClassName("switch");
      for (var i = 0; i < checkBox.length; i++) {
          for (var i = 0; i < guideboxtext.length; i++) {
              if (checkBox[i].checked) {
                if (window.matchMedia("(max-height: 1400px) and (min-height: 951px) and (orientation: portrait)").matches) {
                  guideboxtext[i].style.fontSize = "2.5dvh"; // ENG
                  guideboxswitch[i].style.left = "58.5dvh";
                }
                if (window.matchMedia("(max-height: 950px) and (orientation: portrait)").matches) {
                  guideboxtext[i].style.fontSize = "2dvh"; // ENG
                  guideboxswitch[i].style.left = "35dvh";
                }
              } else {
                if (window.matchMedia("(max-height: 1400px) and (min-height: 951px) and (orientation: portrait)").matches) {
                  guideboxtext[i].style.fontSize = "3dvh"; // THAI
                }
                else if (window.matchMedia("(max-height: 950px) and (orientation: portrait)").matches) {
                  guideboxtext[i].style.fontSize = "2.4dvh"; // THAI
                }
              }
          }
        }
    if (window.matchMedia("(max-height: 950px) and (orientation: portrait)").matches) {
        var itemsMidbutton = document.getElementsByClassName("middlebutton");
        var itemsJoinbutton = document.getElementsByClassName("joinbutton");
        var itemsOfflinebutton = document.getElementsByClassName("offlinebutton");
    
        for (var h = 0; h < itemsMidbutton.length; h++) {
            itemsJoinbutton[h].style.top = "48dvh";
            itemsOfflinebutton[h].style.top = "61dvh";
        }
    }
    //elseeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
  } else if (window.matchMedia("(max-width: 1400px) and (orientation: landscape)").matches){
    var lbh = document.getElementsByClassName("leftboxhide")[0];
    var itemsLeftbox = document.getElementsByClassName("leftboxcontainer");
    for (var i = 0; i < itemsLeftbox.length; i++) {
      itemsLeftbox[i].style.transform = "translateX(0dvh)";
    }
    lbh.textContent = "HIDE";
    
    var itemsMidbutton = document.getElementsByClassName("middlebutton");
    for (var y = 0; y < itemsMidbutton.length; y++) {
      itemsMidbutton[y].style.width = "60dvh";
      itemsMidbutton[y].style.fontSize = "6dvh";
      itemsMidbutton[y].style.height = "13dvh";
    }
    var itemsMidhead = document.getElementsByClassName("middlehead"); 
    for (var f = 0; f < itemsMidhead.length; f++) {
      itemsMidhead[f].style.top = "";
    }
    var itemsMidlogo = document.getElementsByClassName("middlelogo");
    for (var r = 0; r < itemsMidlogo.length; r++) {
      itemsMidlogo[r].style.top = "-38dvh";
      itemsMidlogo[r].style.height = "13dvh";
      itemsMidlogo[r].style.marginRight = "45dvh";
    }
    var itemsTR = document.getElementsByClassName("toprightbutton");
    for (var t = 0; t < itemsTR.length; t++) {
      itemsTR[t].style.top = "1dvh";
      itemsTR[t].style.right = "2dvh";
      itemsTR[t].style.height = "6dvh";
    }
    var itemsTRGuide = document.getElementsByClassName("toprightguidebutton");
    for (var g = 0; g < itemsTRGuide.length; g++) {
      itemsTRGuide[g].style.width = "25dvh";
      itemsTRGuide[g].style.marginRight = "26dvh";
      itemsTRGuide[g].style.fontSize = "3dvh";
    }
    var itemsTRBright = document.getElementsByClassName("toprightbrightbutton");
    for (var d = 0; d < itemsTRBright.length; d++) {
      itemsTRBright[d].style.width = "12dvh";
      itemsTRBright[d].style.marginRight = "13dvh";
    }
    var itemsTRSound = document.getElementsByClassName("toprightsoundbutton");
    for (var v = 0; v < itemsTRSound.length; v++) {
      itemsTRSound[v].style.width = "12dvh";
    }
    var itemsTRscale = document.getElementsByClassName("toprighticonscale");
    for (var e = 0; e < itemsTRscale.length; e++) {
      itemsTRscale[e].style.transform = "scale(var(--ggs, 1))";
    }
    var itemsTRscalemoon = document.getElementsByClassName("toprighticonscalemoon");
    for (var k = 0; k < itemsTRscalemoon.length; k++) {
      itemsTRscalemoon[k].style.transform = "rotate(-135deg) scale(var(--ggs, 1))";
    }
    var itemsBRcode = document.getElementsByClassName("bottomrightcode");
    for (var g = 0; g < itemsBRcode.length; g++) {
      itemsBRcode[g].style.top = "92dvh";
      itemsBRcode[g].style.width = "39dvh";
      itemsBRcode[g].style.height = "12dvh";
      itemsBRcode[g].style.borderRadius = "6dvh 6dvh 0dvh 0dvh";
      itemsBRcode[g].style.setProperty("--before-BR-fontsize", "3dvh");
      itemsBRcode[g].style.setProperty("--before-BR-padding", "2dvh 0svh 0svh 2svh");
    }
    var itemsBRicon = document.getElementsByClassName("bottomrightgithubicon");
    for (var l = 0; l < itemsBRicon.length; l++) {
      itemsBRicon[l].style.height = "10dvh";
      itemsBRicon[l].style.top = "10dvh";
    }
    var itemsBRtext = document.getElementsByClassName("bottomrightgithubtext");
    for (var m = 0; m < itemsBRtext.length; m++) {
      itemsBRtext[m].style.fontSize = "2.7dvh";
      itemsBRtext[m].style.top = "13vh";
    }
    var itemsSoundbox = document.getElementsByClassName("soundbox");
    var itemsSoundboxonoff = document.getElementsByClassName("soundboxonoff");
    var itemsSoundboxswitch = document.getElementsByClassName("soundboxswitch");
    for (var j = 0; j < itemsSoundbox.length; j++) {
      itemsSoundbox[j].style.top = "5dvh";
      itemsSoundbox[j].style.right = "3dvh";
      itemsSoundbox[j].style.width = "10dvh";
      itemsSoundboxonoff[j].style.padding = "0dvh 0dvh 2.7dvh 2.7dvh";
      itemsSoundboxswitch[j].style.left = "1dvh";
    }
    var itemsSoundboxslider = document.getElementsByClassName("soundboxslider");
    for (var p = 0; p < itemsSoundboxslider.length; p++) {
      itemsSoundboxslider[p].style.left = "-5dvh";
    }
    var itemsRedborderBR = document.getElementsByClassName("redborderbottomright");
    for (var b = 0; b < itemsRedborderBR.length; b++) {
      itemsRedborderBR[b].style.setProperty("--before-BR-top", "1dvh");
      itemsRedborderBR[b].style.setProperty("--before-BR-left", "1dvh");      
      itemsRedborderBR[b].style.setProperty("--before-BR-right", "1dvh");
    }
    var itemsRedborderSB = document.getElementsByClassName("redbordersoundbox");
    for (var s = 0; s < itemsRedborderSB.length; s++) {
      itemsRedborderSB[s].style.setProperty("--before-SB-top", "1dvh");
      itemsRedborderSB[s].style.setProperty("--before-SB-left", "1dvh");      
      itemsRedborderSB[s].style.setProperty("--before-SB-right", "1dvh");
      itemsRedborderSB[s].style.setProperty("--before-SB-bottom", "1dvh");
    }
    
    var checkBox = document.getElementsByClassName("checkbox");
    var guideboxtext = document.getElementsByClassName("guideboxtext");
    var guideboxswitch = document.getElementsByClassName("switch");
      for (var i = 0; i < checkBox.length; i++) {
          for (var i = 0; i < guideboxtext.length; i++) {
              if (checkBox[i].checked) {
                  guideboxtext[i].style.fontSize = "2.5dvh"; // ENG
                  guideboxswitch[i].style.left = "69dvh";
                
              } else {
                  guideboxtext[i].style.fontSize = "3.3dvh"; // THAI
              }
          }
        }
      var itemsMidbutton = document.getElementsByClassName("middlebutton");
      var itemsJoinbutton = document.getElementsByClassName("joinbutton");
      var itemsOfflinebutton = document.getElementsByClassName("offlinebutton");
      for (var h = 0; h < itemsMidbutton.length; h++) {
          itemsJoinbutton[h].style.top = "52.5dvh";
          itemsOfflinebutton[h].style.top = "70dvh";
      }
  }
}
updateLayout();

window.addEventListener('resize', function () {
  updateLayout();
});

//soundboxUXopen-close #ig:kimmuie_ , ig:mozart_ko
document.getElementsByClassName("toprightsoundbutton")[0].addEventListener("click", function () {
  var items = document.getElementsByClassName("soundbox");
  var fadeout1 = document.getElementsByClassName("soundboxonoff");
  var fadeout2 = document.getElementsByClassName("soundboxswitch");
  var fadeout3 = document.getElementsByClassName("soundboxslider");

  for (var i = 0; i < items.length; i++) {
    if (items[i].style.display === "none" || items[i].style.display === "") {
      console.log("Seek Soundbox");
      items[i].style.display = "block";
      items[i].style.animation = "soundboxoff 0.5s ease-in-out reverse";
      items[i].style.setProperty("--before-animation", "soundboxbeforeoff 0.5s ease-in-out reverse");
      fadeout1[i].style.animation = "fadein 0.2s ease-in-out";
      fadeout2[i].style.animation = "fadein 0.2s ease-in-out";
      fadeout3[i].style.animation = "fadein 0.2s ease-in-out";
      items[i].addEventListener("animationend", function animationEndHandler() {
        for (var j = 0; j < fadeout1.length; j++) {
          fadeout1[j].style.display = "block";
          fadeout2[j].style.display = "block";
          fadeout3[j].style.display = "block";
        }
        this.style.animation = "";
        this.style.setProperty("--before-animation", "");
        this.removeEventListener("animationend", animationEndHandler);
      });
    } else if (items[i].style.display === "block") {
      console.log("Hide Soundbox");
      closesoundbox()
    }
  }
});

//changetheme #ig:kimmuie_ , ig:mozart_ko
document.getElementsByClassName("toprightbrightbutton")[0].addEventListener("click", function () {
  var sun = document.getElementsByClassName("gg-sun");
  for (var i = 0; i < sun.length; i++) {
    if (sun[i].style.display === "block" || sun[i].style.display === "") {
      console.log("Turn Dark");
      
      var itemsSun = document.getElementsByClassName("gg-sun");
      for (var j = 0; j < itemsSun.length; j++) {
        itemsSun[j].style.display = "none";
      }
      var itemsMoon = document.getElementsByClassName("gg-moon");
      for (var k = 0; k < itemsMoon.length; k++) {
        itemsMoon[k].style.display = "block";
      }
      var itemsFont = document.getElementsByClassName("changefont");
      for (var l = 0; l < itemsFont.length; l++) {
        itemsFont[l].style.setProperty("--before-font","white");
      }
      var itemsDiv = document.getElementsByClassName("changediv");
      for (var d = 0; d < itemsDiv.length; d++) {
        itemsDiv[d].style.setProperty("--before-backgroundchange","linear-gradient(to bottom, #272829, #61677A, #272829)");
      }
      var itemsDivbeforesp = document.getElementsByClassName("changedivsp");
      for (var s = 0; s < itemsDivbeforesp.length; s++) {
        itemsDivbeforesp[s].style.setProperty("--before-backgroundchangesp1","linear-gradient(to bottom, #61677A, #272829)");
        itemsDivbeforesp[s].style.setProperty("--before-backgroundchangesp2","linear-gradient(to bottom, #61677A, #272829)");
      }
      var itemsDivsmol = document.getElementsByClassName("changedivsmol");
      for (var x = 0; x < itemsDivsmol.length; x++) {
        itemsDivsmol[x].style.setProperty("--before-backgroundchangesmol","#272829");
      }
      var itemsGif = document.getElementsByClassName("changegif");
      for (var v = 0; v < itemsGif.length; v++) {
        itemsGif[v].style.backgroundImage = "url(./1BGblack.gif)";
      }
      //elseeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    } else if (sun[i].style.display === "none") {
      console.log("Turn Bright");
      var itemsSun = document.getElementsByClassName("gg-sun");
      for (var j = 0; j < itemsSun.length; j++) {
        itemsSun[j].style.display = "block";
      }
      var itemsMoon = document.getElementsByClassName("gg-moon");
      for (var k = 0; k < itemsMoon.length; k++) {
        itemsMoon[k].style.display = "none";
      }
      var itemsFont = document.getElementsByClassName("changefont");
      for (var l = 0; l < itemsFont.length; l++) {
        itemsFont[l].style.setProperty("--before-font","black");
      }
      var itemsDiv = document.getElementsByClassName("changediv");
      for (var d = 0; d < itemsDiv.length; d++) {
        itemsDiv[d].style.setProperty("--before-backgroundchange","linear-gradient(to bottom, #6C737E, #CFD2CF, #6C737E)");
      }
      var itemsDivbeforesp = document.getElementsByClassName("changedivsp");
      for (var s = 0; s < itemsDivbeforesp.length; s++) {
        itemsDivbeforesp[s].style.setProperty("--before-backgroundchangesp1","linear-gradient(to bottom, #CFD2CF, #6C737E)");
        itemsDivbeforesp[s].style.setProperty("--before-backgroundchangesp2","linear-gradient(to bottom, #CFD2CF, #6C737E)");
      }
      var itemsDivsmol = document.getElementsByClassName("changedivsmol");
      for (var x = 0; x < itemsDivsmol.length; x++) {
        itemsDivsmol[x].style.setProperty("--before-backgroundchangesmol","#6C737E");
      }
      var itemsGif = document.getElementsByClassName("changegif");
      for (var v = 0; v < itemsGif.length; v++) {
        itemsGif[v].style.backgroundImage = "url(./1BGwhite.gif)";
      }
    }
  }
});

//BRcodeUXopen-close #ig:kimmuie_ , ig:mozart_ko
document.getElementsByClassName("bottomrightcode")[0].addEventListener("click", function () {
  var items = document.getElementsByClassName("bottomrightcode");
  for (var i = 0; i < items.length; i++) {
    var hasPopupClass = items[i].classList.contains("popup");
    if (!hasPopupClass) {
      console.log("Popup bottomrightcode");
      if (window.matchMedia("(max-height: 1400px) and (orientation: portrait)").matches) {
        items[i].style.top = "90dvh";
        items[i].style.height = "10dvh";
        items[i].style.setProperty("--before-BR-height", "8dvh");
      }else{
        items[i].style.top = "80dvh";
        items[i].style.height = "20dvh";
      }
      
      items[i].classList.add("popup");
    } else if(hasPopupClass){
      console.log("Popout bottomrightcode");
      closebottomrightbox()
    }
  }
});
