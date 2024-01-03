function setStyles(selector, styles) {
  var elements = document.getElementsByClassName(selector);
  for (var i = 0; i < elements.length; i++) {
    Object.assign(elements[i].style, styles);
  }
}

function setProperty(selector, styles) {
  var elements = document.getElementsByClassName(selector);
  for (var i = 0; i < elements.length; i++) {
    var style = elements[i].style;
    for (var property in styles) {
      style.setProperty(property, styles[property]);
    }
  }
}

function setInnerHTML(selector, innerHTML) {
  var elements = document.getElementsByClassName(selector);
  for (var i = 0; i < elements.length; i++) {
    elements[i].innerHTML = innerHTML;
  }
}


function setImage(selector, src) {
  var elements = document.getElementsByClassName(selector);
  for (var i = 0; i < elements.length; i++) {
    elements[i].src = src;
  }
}


var audiopu = document.getElementById("Soundpopup");

//leftboxUXopen-close ***ig:kimmuie_  ig:mozart_ko***
document.getElementsByClassName("leftboxhide")[0].addEventListener("click", function () {
  var lbh = document.getElementsByClassName("leftboxhide")[0];

  if (lbh.textContent === "HIDE") {
      console.log("Hide Leftbox");
      setStyles("leftbox", { left: "-35dvh" });
      setStyles("leftboxhide", { left: "3dvh" });
    lbh.textContent = "UNHIDE";
    audiopu.play();
  } else if (lbh.textContent === "UNHIDE") {
      console.log("Unhide Leftbox");
      setStyles("leftbox", { left: "0dvh" });
      setStyles("leftboxhide", { left: "38dvh" });
    lbh.textContent = "HIDE";
    audiopu.play();
  }
});
  
//contactUXopen-close ***ig:kimmuie_  ig:mozart_ko***
document.getElementsByClassName("leftboxbutton1")[0].addEventListener("click", function () {
  var items = document.getElementsByClassName("alertbox1");
  for (var i = 0; i < items.length; i++) {
    if (items[i].style.display === "none" || items[i].style.display === "") {
      var alertbox2 = document.getElementsByClassName("alertbox2");
      if (alertbox2.length > 0 && alertbox2[0].style.display === "block") {
        console.log("Hide donate");
        setStyles("alertbox2", { animation: "pop-out 0.3s ease-in-out" });
        alertbox2[0].addEventListener("animationend", function animationEndHandler() {
          this.style.display = "none";
          this.removeEventListener("animationend", animationEndHandler);
        });
      }
      var guideboxinside = document.getElementsByClassName("guideboxinside");
      if (guideboxinside.length > 0 && guideboxinside[0].style.display === "block") {
        console.log("Hide guide");
        setStyles("guideboxinside", { animation: "pop-out 0.3s ease-in-out" });
        guideboxinside[0].addEventListener("animationend", function animationEndHandler() {
          this.style.display = "none";
          this.removeEventListener("animationend", animationEndHandler);
        });
      }
      console.log("Show contact");
      audiopu.play();
      items[i].style.display = "block";
      items[i].style.animation = "pop-in 1s ease-in-out";
      items[i].addEventListener("animationend", function animationEndHandler() {
        this.style.display = "block";
        this.removeEventListener("animationend", animationEndHandler);
      });
    } else {
      console.log("Hide contact");
      items[i].style.animation = "pop-out 0.3s ease-in-out";
      items[i].addEventListener("animationend", function animationEndHandler() {
        this.style.display = "none";
        this.removeEventListener("animationend", animationEndHandler);
      });
    }
  }
});

//donateUXopen-close ***ig:kimmuie_  ig:mozart_ko***
document.getElementsByClassName("leftboxbutton2")[0].addEventListener("click", function () {
  var items = document.getElementsByClassName("alertbox2");
  for (var i = 0; i < items.length; i++) {
    if (items[i].style.display === "none" || items[i].style.display === "") {
      var alertbox1 = document.getElementsByClassName("alertbox1");
      if (alertbox1.length > 0 && alertbox1[0].style.display === "block") {
        console.log("Hide contact");
        setStyles("alertbox1", { animation: "pop-out 0.3s ease-in-out" });
        alertbox1[0].addEventListener("animationend", function animationEndHandler() {
          this.style.display = "none";
          this.removeEventListener("animationend", animationEndHandler);
        });
      }
      var guideboxinside = document.getElementsByClassName("guideboxinside");
      if (guideboxinside.length > 0 && guideboxinside[0].style.display === "block") {
        console.log("Hide guide");
        setStyles("guideboxinside", { animation: "pop-out 0.3s ease-in-out" });
        guideboxinside[0].addEventListener("animationend", function animationEndHandler() {
          this.style.display = "none";
          this.removeEventListener("animationend", animationEndHandler);
        });
      }
      console.log("Show donate");
      audiopu.play();
      items[i].style.display = "block";
      items[i].style.animation = "pop-in 1s ease-in-out";
      items[i].addEventListener("animationend", function animationEndHandler() {
        this.style.display = "block";
        this.removeEventListener("animationend", animationEndHandler);
      });
    } else {
      console.log("Hide donate");
      items[i].style.animation = "pop-out 0.3s ease-in-out";
      items[i].addEventListener("animationend", function animationEndHandler() {
        this.style.display = "none";
        this.removeEventListener("animationend", animationEndHandler);
      });
    }
  }
});

//guideUXopen-close ***ig:kimmuie_  ig:mozart_ko***
document.getElementsByClassName("toprightguidebutton")[0].addEventListener("click", function () {
  var items = document.getElementsByClassName("guideboxinside");
  for (var i = 0; i < items.length; i++) {
    if (items[i].style.display === "none" || items[i].style.display === "") {
      var alertbox1 = document.getElementsByClassName("alertbox1");
      if (alertbox1.length > 0 && alertbox1[0].style.display === "block") {
        console.log("Hide contact");
        setStyles("alertbox1", { animation: "pop-out 0.3s ease-in-out" });
        alertbox1[0].addEventListener("animationend", function animationEndHandler() {
          this.style.display = "none";
          this.removeEventListener("animationend", animationEndHandler);
        });
      }
      var alertbox2 = document.getElementsByClassName("alertbox2");
      if (alertbox2.length > 0 && alertbox2[0].style.display === "block") {
        console.log("Hide donate");
        setStyles("alertbox2", { animation: "pop-out 0.3s ease-in-out" });
        alertbox2[0].addEventListener("animationend", function animationEndHandler() {
          this.style.display = "none";
          this.removeEventListener("animationend", animationEndHandler);
        });
      }
      console.log("Show guide");
      audiopu.play();
      items[i].style.display = "block";
      items[i].style.animation = "pop-in 1s ease-in-out";
      items[i].addEventListener("animationend", function animationEndHandler() {
        this.style.display = "block";
        this.removeEventListener("animationend", animationEndHandler);
      });
    } else {
      console.log("Hide guide");
      items[i].style.animation = "pop-out 0.3s ease-in-out";
      items[i].addEventListener("animationend", function animationEndHandler() {
        this.style.display = "none";
        this.removeEventListener("animationend", animationEndHandler);
      });
    }
  }
});

//soundboxUXopen-close ***ig:kimmuie_  ig:mozart_ko***
document.getElementsByClassName("toprightsoundbutton")[0].addEventListener("click", function () {
  var items = document.getElementsByClassName("soundbox");

  for (var i = 0; i < items.length; i++) {
    if (items[i].style.display === "none" || items[i].style.display === "") {
      audiopu.play();
      console.log("Seek Soundbox");
      setStyles("soundbox", { display: "block" ,animation: "soundboxoff 0.5s ease-in-out reverse" });
      setStyles("soundbox", { "--before-animation": "soundboxbeforeoff 0.5s ease-in-out reverse" });
      items[i].addEventListener("animationend", function animationEndHandler() {
        this.style.animation = "";
      setStyles("soundboxonoff", { display: "block" , animation: "fadein 0.2s ease-in-out" });
      setStyles("soundboxswitch", { display: "block" , animation: "fadein 0.2s ease-in-out" });
      setStyles("soundboxslider", { display: "block" , animation: "fadein 0.2s ease-in-out" });
        this.removeEventListener("animationend", animationEndHandler);
      });
    } else {
      closesoundbox()
    }
  }
});

//BRcodeUXopen-close ***ig:kimmuie_  ig:mozart_ko***
document.getElementsByClassName("bottomrightcode")[0].addEventListener("click", function () {
  var items = document.getElementsByClassName("bottomrightcode");
  for (var i = 0; i < items.length; i++) {
    var hasPopupClass = items[i].classList.contains("popup");
    if (!hasPopupClass) {
      console.log("Show bottomrightcode");
      if (window.matchMedia("(max-height: 1400px) and (orientation: portrait)").matches) {
        setStyles("bottomrightcode", { top: "90dvh", height: "10dvh" });
        setProperty("bottomrightcode", { "--before-BR-height": "8dvh" });
      } else {
        setStyles("bottomrightcode", { top: "80dvh", height: "20dvh" });
      }
      items[i].classList.add("popup");
    } else if (hasPopupClass) {
      closebottomrightbox();
    }
  }
});

//addBGandClosebutton ***ig:kimmuie_  ig:mozart_ko***
var alertboxclose1 = document.getElementsByClassName("alertboxclose1")[0];
var alertboxclose2 = document.getElementsByClassName("alertboxclose2")[0];
var guideboxclose = document.getElementsByClassName("guideboxclose")[0];
var backgroundclose = document.getElementsByClassName("bg")[0];

function closecontactbox(){
    setStyles("alertbox1", { animation: "pop-out 0.3s ease-in-out" });
    var items = document.getElementsByClassName("alertbox1")[0];
    items.addEventListener("animationend", function animationEndHandler() {
      console.log("Hide contact");
      this.style.display = "none";
      this.removeEventListener("animationend", animationEndHandler);
    });
}

function closedonatebox(){
    setStyles("alertbox2", { animation: "pop-out 0.3s ease-in-out" });
    var items = document.getElementsByClassName("alertbox2")[0];
    items.addEventListener("animationend", function animationEndHandler() {
      console.log("Hide donate");
      this.style.display = "none";
      this.removeEventListener("animationend", animationEndHandler);
    });
}

function closeguidebox(){
    setStyles("guideboxinside", { animation: "pop-out 0.3s ease-in-out" });
    var items = document.getElementsByClassName("guideboxinside")[0];
    items.addEventListener("animationend", function animationEndHandler() {
      console.log("Hide guide");
      this.style.display = "none";
      this.removeEventListener("animationend", animationEndHandler);
    });
}

function closesoundbox(){
  var items = document.getElementsByClassName("soundbox");
  for (var i = 0; i < items.length; i++) {
    if  (items[i].style.display === "none" || items[i].style.display === "") {
    }else{
      console.log("Hide soundbox");
      setStyles("soundbox", { animation : "soundboxoff 0.5s ease-in-out normal" });
      setProperty("soundbox" , {"--before-animation": "soundboxbeforeoff 0.5s ease-in-out normal"});
      setStyles("soundboxonoff", { display: "none" });
      setStyles("soundboxswitch", { display: "none" });
      setStyles("soundboxslider", { display: "none" });
      items[i].addEventListener("animationend", function animationEndHandler() {
      this.style.display = "none";
      this.removeEventListener("animationend", animationEndHandler);
      });
    }
  }
}

function closebottomrightbox(){
    if (window.matchMedia("(max-height: 1400px) and (orientation: portrait)").matches) {
      setStyles("bottomrightcode", { top: "96dvh", height: "6dvh" });
      setProperty("bottomrightcode", {"--before-BR-height": "8dvh"});
    }else{
      setStyles("bottomrightcode", { top: "92dvh", height: "12dvh" });
    }
    var items = document.getElementsByClassName("bottomrightcode")[0];
    items.classList.remove("popup");
}

alertboxclose1.addEventListener("click", closecontactbox);
backgroundclose.addEventListener("click", closecontactbox);
alertboxclose2.addEventListener("click", closedonatebox);
backgroundclose.addEventListener("click", closedonatebox);
guideboxclose.addEventListener("click", closeguidebox);
backgroundclose.addEventListener("click", closeguidebox);
backgroundclose.addEventListener("click", closesoundbox);
backgroundclose.addEventListener("click", closebottomrightbox);

//TruemoneyQRopen-close ***ig:kimmuie_  ig:mozart_ko***
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

//PropmptpayQRopen-close ***ig:kimmuie_  ig:mozart_ko***
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

//setguidecontext ***ig:kimmuie_  ig:mozart_ko***
var guideboxtext = document.getElementsByClassName("guideboxtext");
var originalGuideboxText = guideboxtext[0].getAttribute("data-default-content");
for (var i = 0; i < guideboxtext.length; i++) {
    guideboxtext[i].innerHTML = originalGuideboxText;
}

//guidechangelanguage ***ig:kimmuie_  ig:mozart_ko***
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

//getoriginalrotationdegree ***ig:kimmuie_  ig:mozart_ko***
function getCurrentRotation(element) {
  var transformValue = element.style.transform;
  var match = transformValue.match(/rotateY\(([-?\d]+)deg\)/);

  if (match && match[1]) {
    return parseFloat(match[1]);
  } else {
    return 0;
  }
}

//homeicon  ***ig:kimmuie_  ig:mozart_ko***
document.getElementsByClassName("homeicon")[0].addEventListener("click", function () {
  var userWantsToGoBack = confirm("Do you want to return to the main menu?");
  if (userWantsToGoBack) {
    location.reload();
  }
});

//listicon  ***ig:kimmuie_  ig:mozart_ko***
document.getElementsByClassName("listicon")[0].addEventListener("click", function () {
  setStyles("listicon", { display:"none"});
  setStyles("offlinebox", { display:"block"});
  setStyles("offlinemenu", { height: "130dvh" });
  setStyles("packet", { display:"none", top:"95dvh"});
  setStyles("card", { display:"none",});
  var audiopu = document.getElementById("Soundpopup");
  audiopu.play()
});

//screensetter ***ig:kimmuie_  ig:mozart_ko***
  function updateLayout() {
    console.log("updatelayout");
    
    var lbh = document.getElementsByClassName("leftboxhide")[0];
    if (window.matchMedia("(max-height: 1400px) and (orientation: portrait)").matches) {
      lbh.textContent = "UNHIDE";
      setStyles("leftbox", { left: "-35dvh" });
      setStyles("leftboxhide", { left: "3dvh" });
      setStyles("middlebutton", { width: "40dvh", height: "10dvh", fontSize: "4dvh" });
      setStyles("unavailable", { fontSize: "2dvh" });
      setStyles("middlehead", { top: "15dvh" });
      setStyles("middlelogo", { top: "-39dvh", height: "8dvh", marginRight: "0dvh" });
      setStyles("toprightbutton", { right: "1dvh", height: "4dvh" });
      setStyles("toprightguidebutton", { width: "12dvh", marginRight: "14dvh", fontSize: "2dvh" });
      setStyles("toprightbrightbutton", { width: "6dvh", marginRight: "7dvh" });
      setStyles("toprightsoundbutton", { width: "6dvh" });
      setStyles("toprighticonscale", { transform: "scale(var(--ggs, 0.8))" });
      setStyles("toprighticonscalemoon", { transform: "rotate(-135deg) scale(var(--ggs, 0.8))" });
      setStyles("bottomrightcode", { top: "96dvh", width: "20dvh", height: "6dvh", borderRadius: "2dvh 2dvh 0dvh 0dvh"});
      setProperty("bottomrightcode", {"--before-BR-fontsize": "1.5dvh","--before-BR-padding": "1dvh" });
      setStyles("bottomrightgithubicon", { height: "6dvh", top: "4dvh" });
      setStyles("bottomrightgithubtext", { fontSize: "1.5dvh", top: "6.5vh" });
      setStyles("soundbox", { top: "3.5dvh", right: "1dvh", width: "6dvh" });
      setStyles("soundboxonoff", { padding: "0dvh 0dvh 0dvh 1dvh" });
      setStyles("soundboxswitch", { left: "-1dvh" });
      setStyles("soundboxslider", { left: "-7dvh" });
      setStyles("BGicon", { right: "1dvh" , height: "5dvh"});
      setProperty("redborderbottomright", {
        "--before-BR-top": "0.5dvh",
        "--before-BR-left": "0.5dvh",
        "--before-BR-right": "0.5dvh"
      });
  
      setProperty("redbordersoundbox", {
        "--before-SB-top": "0.5dvh",
        "--before-SB-left": "0.5dvh",
        "--before-SB-right": "0.5dvh",
        "--before-SB-bottom": "0.5dvh"
      });
  
      var checkBox = document.getElementsByClassName("checkbox");
      for (var i = 0; i < checkBox.length; i++) {
          if (checkBox[i].checked) {
            if (window.matchMedia("(max-height: 1400px) and (min-height: 951px) and (orientation: portrait)").matches) {
              setStyles("guideboxtext", { fontSize: "2.5dvh" }); // ENG
              setStyles("guideboxswitch", { left: "58.5dvh" });
            }
            if (window.matchMedia("(max-height: 950px) and (orientation: portrait)").matches) {
              setStyles("guideboxtext", { fontSize: "2dvh" }); // ENG
              setStyles("guideboxswitch", { left: "35dvh" });
            }
          } else {
            if (window.matchMedia("(max-height: 1400px) and (min-height: 951px) and (orientation: portrait)").matches) {
              setStyles("guideboxtext", { fontSize: "3dvh" }); // THAI
              setStyles("guideboxswitch", { left: "3dvh" });
            } else if (window.matchMedia("(max-height: 950px) and (orientation: portrait)").matches) {
              setStyles("guideboxtext", { fontSize: "2.4dvh" }); // THAI
              setStyles("guideboxswitch", { left: "3dvh" });
            }
        }
      }
      if (window.matchMedia("(max-height: 950px) and (orientation: portrait)").matches) {
        setStyles("offlinebox", { width: "35dvh" });
        setStyles("offlineheader", { fontSize: "5dvh" , marginLeft: "5dvh"});
        setStyles("nameInput", { width: "21.5dvh" });
        setStyles("Input", { width: "29dvh" });
        setStyles("offlinestartbutton", { marginLeft: "2.5dvh" });
        setStyles("nameDisplay", { left: "35dvh" });
      }
      //elseeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    } else if (window.matchMedia("(max-width: 1400px) and (orientation: landscape)").matches) {
      lbh.textContent = "HIDE";
      setStyles("leftbox", { left: "0dvh" });
      setStyles("leftboxhide", { left: "38dvh" });
      setStyles("middlebutton", { width: "60dvh", height: "13dvh", fontSize: "6dvh" });
      setStyles("unavailable", { fontSize: "3dvh" });
      setStyles("middlehead", { top: "" });
      setStyles("middlelogo", { top: "-38dvh", height: "13dvh", marginRight: "45dvh" });
      setStyles("toprightbutton", { right: "2dvh", height: "6dvh" });
      setStyles("toprightguidebutton", { width: "25dvh", marginRight: "26dvh", fontSize: "3dvh" });
      setStyles("toprightbrightbutton", { width: "12dvh", marginRight: "13dvh" });
      setStyles("toprightsoundbutton", { width: "12dvh" });
      setStyles("toprighticonscale", { transform: "scale(var(--ggs, 1))" });
      setStyles("toprighticonscalemoon", { transform: "rotate(-135deg) scale(var(--ggs, 1))" });
      setStyles("bottomrightcode", { top: "92dvh", width: "39dvh", height: "12dvh", borderRadius: "6dvh 6dvh 0dvh 0dvh"});
      setProperty("bottomrightcode", {
        "--before-BR-fontsize": "3dvh",
        "--before-BR-padding": "2dvh 0dvh 0dvh 2dvh" });
      setStyles("bottomrightgithubicon", { height: "10dvh", top: "10dvh" });
      setStyles("bottomrightgithubtext", { fontSize: "2.7dvh", top: "13vh" });
      setStyles("soundbox", { top: "5dvh", right: "3dvh", width: "10dvh" });
      setStyles("soundboxonoff", { padding: "0dvh 0dvh 2.7dvh 2.7dvh" });
      setStyles("soundboxswitch", { left: "1dvh" });
      setStyles("soundboxslider", { left: "-5dvh" });
      setStyles("BGicon", { right: "4dvh" , height: "7dvh"});
      setProperty("redborderbottomright", {
        "--before-BR-top": "1dvh",
        "--before-BR-left": "1dvh",
        "--before-BR-right": "1dvh"
      });
  
      setProperty("redbordersoundbox", {
        "--before-SB-top": "1dvh",
        "--before-SB-left": "1dvh",
        "--before-SB-right": "1dvh",
        "--before-SB-bottom": "1dvh"
      });
  
      var checkBox = document.getElementsByClassName("checkbox");
      for (var i = 0; i < checkBox.length; i++) {
          if (checkBox[i].checked) {
              setStyles("guideboxtext", { fontSize: "2.5dvh" }); // ENG
              setStyles("guideboxswitch", { left: "69dvh" });
          } else {
              setStyles("guideboxtext", { fontSize: "3.3dvh" }); // THAI
              setStyles("guideboxswitch", { left: "3dvh" });
        }
      }
      setStyles("offlinebox", { width: "50dvh" });
      setStyles("offlineheader", { fontSize: "6dvh" , marginLeft: "10dvh"});
      setStyles("nameInput", { width: "36dvh" });
      setStyles("Input", { width: "44dvh" });
      setStyles("offlinestartbutton", { marginLeft: "10dvh" });
      setStyles("nameDisplay", { left: "49.9dvh" });
    }
  }
updateLayout();

window.addEventListener("resize", function () {
  updateLayout();
});

//changetheme ***ig:kimmuie_  ig:mozart_ko***
document.getElementsByClassName("toprightbrightbutton")[0].addEventListener("click", function () {
  var sun = document.getElementsByClassName("gg-sun");
  for (var i = 0; i < sun.length; i++) {
    if (sun[i].style.display === "block" || sun[i].style.display === "") {
      console.log("Turn Dark");
      setStyles("gg-sun", { display: "none" });
      setStyles("gg-moon", { display: "block" });
      setProperty("changefont", { "--before-font": "white" });
      setProperty("changediv", { "--before-backgroundchange": "linear-gradient(to bottom, #272829, #61677A, #272829)" });
      setProperty("changedivsp", { "--before-backgroundchangesp1": "linear-gradient(to bottom, #61677A, #272829)", "--before-backgroundchangesp2": "linear-gradient(to bottom, #61677A, #272829)" });
      setProperty("changedivsmol", { "--before-backgroundchangesmol": "#272829" });
      setStyles("changegif", { backgroundImage: "url(./1BGblack.gif)" });
    } else if (sun[i].style.display === "none") {
      console.log("Turn Bright");
      setStyles("gg-sun", { display: "block" });
      setStyles("gg-moon", { display: "none" });
      setProperty("changefont", { "--before-font": "black" });
      setProperty("changediv", { "--before-backgroundchange": "linear-gradient(to bottom, #6C737E, #CFD2CF, #6C737E)" });
      setProperty("changedivsp", { "--before-backgroundchangesp1": "linear-gradient(to bottom, #CFD2CF, #6C737E)", "--before-backgroundchangesp2": "linear-gradient(to bottom, #CFD2CF, #6C737E)" });
      setProperty("changedivsmol", { "--before-backgroundchangesmol": "#6C737E" });
      setStyles("changegif", { backgroundImage: "url(./1BGwhite.gif)" });
    }
  }
});

//sound ***ig:kimmuie_  ig:mozart_ko***
document.addEventListener('DOMContentLoaded', function () {
  var logowiggle = document.getElementsByClassName("logowiggle");
  var body = document.getElementsByClassName("body");
  var addsoundbutton = document.getElementsByClassName("addsoundbutton");
  var audiologo = document.getElementById("Soundsneeze");
  var audiobg = document.getElementById("Soundbackground");
  var audiobt = document.getElementById("Soundbutton");
  var audiopu = document.getElementById("Soundpopup");
  var soundswitch = document.getElementsByClassName("soundboxswitchbox");
  var soundslider = document.getElementsByClassName("soundboxslider");

  for (var i = 0; i < soundslider.length; i++) {
    soundslider[i].addEventListener("change", function () {
      audiobg.volume = this.value;
      audiologo.volume = this.value;
      audiobt.volume = this.value;
      audiopu.volume = this.value;
    });
  }

  for (var i = 0; i < soundswitch.length; i++) {
    soundswitch[i].addEventListener('change', function () {
      if (this.checked) {
        console.log("Soundmute");
        audiobg.muted = true;
        audiologo.muted = true;
        audiobt.muted = true;
        audiopu.muted = true;
      } else {
        console.log("Soundon");
        audiobg.play();
        audiologo.muted = false;
        audiobt.muted = false;
        audiopu.muted = false;
      }
    });
  }

  function handleVisibilityChange() {
    if (document.visibilityState === "hidden") {
      console.log("Tab Switched Soundoff");
      audiobg.pause();
    } else {
      console.log("Tab Switched Soundon");
      audiobg.play();
    }
}
document.addEventListener("visibilitychange", handleVisibilityChange);

  for (var i = 0; i < body.length; i++) {
    body[i].addEventListener("mouseenter", function () {
      console.log("Soundbody");
      audiobg.play();
    });
  }

  for (var i = 0; i < addsoundbutton.length; i++) {
    addsoundbutton[i].addEventListener("mouseenter", function () {
      console.log("Soundbutton");
      audiobt.play();
    });
  }

  for (var i = 0; i < logowiggle.length; i++) {
    logowiggle[i].addEventListener("click", function () {
      console.log("Soundsneeze");
      audiologo.play();
      this.style.animation = "none";
      void this.offsetWidth;
      this.style.animation = "wiggle 1s ease-in-out";
    });
  }
});

document.getElementsByClassName("offlinebutton")[0].addEventListener("click", function () {
  var audiopu = document.getElementById("Soundpopup");
  setStyles("middlebuttoncontainer", { display: "none" });
  setStyles("offlinemenu", { height: "130dvh" });
  setStyles("offlinebox", { display:"block"});
  setStyles("homeicon", { display:"block"});
  audiopu.play();
})

var displayedNames = [];

    function displayAndClear() {
      var nameInput = document.querySelector(".nameInput").value;
      var items = document.querySelector(".offlinebox");
      items.style.transform = "translateX(-20%)";
      
      if (displayedNames.length < 15) {
        if (nameInput.trim() !== "") {
          if (nameInput.length <= 18) {
            var nextNumber = findNextNumber();

            displayedNames.push({ number: nextNumber, name: nameInput });
            displayedNames.sort(function (a, b) {
              return a.number - b.number;
            });

            document.querySelector(".nameInput").value = "";
            displayNames();
            var items = document.querySelector(".nameDisplay");
            items.style.display = "block";
          } else {
            alert("Please enter a name with 18 characters or fewer.");
          }
        } else {
          alert("Please enter a name before adding.");
        }
      } else {
        alert("You have reached the limit of 15 players.");
      }
    }

    function removeName(number) {
      displayedNames = displayedNames.filter(function (item) {
        return item.number !== number;
      });
    
      displayedNames.forEach(function (item, index) {
        item.number = index + 1;
      });
    
      displayNames();
    
      // Check if displayedNames is empty, and if true, reset translateX to 0
      if (displayedNames.length === 0) {
        var items = document.querySelector(".offlinebox");
        items.style.transform = "translateX(0)";
      } else {
        // If there are still names, set translateX to -20%
        var items = document.querySelector(".offlinebox");
        items.style.transform = "translateX(-20%)";
      }
    }

    function displayNames() {
      var nameDisplay = document.querySelector(".nameDisplay");
      nameDisplay.innerHTML = "";

      displayedNames.forEach(function (item) {
        var nameParagraph = document.createElement("p");
        nameParagraph.textContent = item.number + ". " + item.name;
        nameParagraph.classList.add("paragraph-gap");
        nameParagraph.classList.add("deletenamehover");
        nameParagraph.classList.add("nameborderlist");

        nameParagraph.addEventListener("click", function () {
          removeName(item.number);
        });

        nameDisplay.appendChild(nameParagraph);
      });
    }

    function findNextNumber() {
      var usedNumbers = displayedNames.map(function (item) {
        return item.number;
      });

      for (var i = 1; i <= displayedNames.length + 1; i++) {
        if (!usedNumbers.includes(i)) {
          return i;
        }
      }
    }

function movepacket() {
  console.log("movepacket called")
  var audiopk = document.getElementById("Soundpacket");
  setStyles("packettop", { transform:"translateX(300%)"});
  setStyles("listicon", { display:"none"});
  audiopk.play()
  setTimeout(function (){
    setStyles("nameshown", { top:"175dvh"});  
    setStyles("packetbot", { transform:"translateY(100%)"});
    setStyles("card", { display:"block"});
    setStyles("nextbutton", { display:"block"});
    setTimeout(function (){
      setStyles("nameshown", { display:"none",});
      setStyles("packet", { display:"none",});
      setStyles("packettop", { transform:"translateX(0%)"});
      setStyles("packetbot", { transform:"translateY(0%)"});
      setTimeout(function (){
        setStyles("nextbutton", { top:"50dvh"});
      },500);
    },900);
  },700);
}

function startGame() {
  if (displayedNames.length < 3) {
      alert("You need at least 3 players to start the game.");
  } else if (displayedNames.length >= 3) {
    
    const selectedValue = document.getElementById("spySelector").value;
    let randomSpyIndex1;
    let randomSpyIndex2;
    
    if (selectedValue === "twospy") {
      randomSpyIndex1 = Math.floor(Math.random() * displayedNames.length);
    
      do {
        randomSpyIndex2 = Math.floor(Math.random() * displayedNames.length);
      } while (randomSpyIndex2 === randomSpyIndex1);
    } else if (selectedValue === "onespy") {
      randomSpyIndex1 = Math.floor(Math.random() * displayedNames.length);
      randomSpyIndex2 = undefined;
    }

    setStyles("offlinebox", { display:"none"});
    setStyles("lds-dual-ring", { display:"block"});
    setStyles("packet", { display:"block"});
    setStyles("nameshown", { display:"block"});  
    setTimeout(function () {
    setStyles("lds-dual-ring", { display:"none"});
    setStyles("packet", { top:"18dvh"});
    setStyles("listicon", { display:"block"});
    setStyles("offlinemenu", { height: "270dvh" });
    setStyles("nameshown", { top:"80dvh"});   
      const place = [ "<br>Hospital",
                      "<br>School",
                      "<br>Space Station",
                      "<br>Bank",
                      "<br>Supermarket",
                      "<br>Beach"];
      const randomPlace = Math.floor(Math.random() * place.length);
      const chosenPlace = place[randomPlace];

      let role;
      switch (chosenPlace) {
        case "<br>Hospital":
            role = Hospitalrole;
            Cardimage = "zHospital.png";
            break;
    
        case "<br>School":
            role = Schoolrole;
            Cardimage = "zSchool.png";
            break;
    
        case "<br>Space Station":
            role = SpaceStationrole;
            Cardimage = "zSpacestation.png";
            break;
    
        case "<br>Bank":
            role = Bankrole;
            Cardimage = "zBank.png";
            break;
    
        case "<br>Supermarket":
            role = SupermarketRole;
            Cardimage = "zSupermarket.png";
            break;
    
        case "<br>Beach":
            role = Beachrole;
            Cardimage = "zBeach.png";
            break;
      }

      const randomRole = Math.floor(Math.random() * role.length);
      const chosenRole = role[randomRole];
      role.splice(randomRole, 1);
      let currentIdx = 0;
      var currentPlayer = displayedNames[currentIdx].name;
      var currentNumber = 1;
      
      if (currentIdx === randomSpyIndex1 || currentIdx === randomSpyIndex2) {
        setStyles("card-front__tp", { background:"linear-gradient(to bottom, black, grey)"});
        setStyles("nextbutton", { color:"black"});
        setInnerHTML("nameshown", currentNumber + ". " + currentPlayer);
        setInnerHTML("Cardplayer", currentNumber + ". " + currentPlayer);
        setInnerHTML("Cardrole", "Spy");
        setInnerHTML("Cardplace", "");
        setInnerHTML("Carddescription", "Defend your role if suspected, guess the location wisely.<br><br>ป้องกันบทบาทของคุณหากมีข้อสงสัย เดาสถานที่อย่างมีเหตุผล");
        setImage("Cardimage", "1CardSpy.png");
      } else {
        setInnerHTML("nameshown", currentNumber + ". " + currentPlayer);
        setInnerHTML("Cardplayer", currentNumber + ". " + currentPlayer);
        setInnerHTML("Cardrole", chosenRole.roleused + chosenRole.thairoleused);
        setInnerHTML("Cardplace", chosenPlace);
        setInnerHTML("Carddescription", chosenRole.roledescriptionused);
        setImage("Cardimage", Cardimage);
      }
      document.getElementsByClassName("nextbutton")[0].addEventListener("click", function () {
        setStyles("card-front__tp", { background:"linear-gradient(to bottom, #750E21, #FF4949)"});
        setStyles("nextbutton", { color:"#FF4949"});
        setStyles("nextbutton", { top:"42dvh"});
        setStyles("card", { display:"none"});
        setStyles("nextbutton", { display:"none"});
        setStyles("packet", { display:"block", top:"100dvh"});
        setStyles("nameshown", { display:"block",});  
        setTimeout(function (){
          setStyles("packet", { top:"18dvh"});
          setStyles("nameshown", { top:"80dvh"});  
        },1000);
        console.log("nextplayer")
        currentIdx += 1;
        var currentPlayer = displayedNames[currentIdx].name;
        currentNumber += 1;
        const randomRole = Math.floor(Math.random() * role.length);
        const chosenRole = role[randomRole];
        role.splice(randomRole, 1);
        if (currentIdx === displayedNames.length - 1) {
          setInnerHTML("nextbutton", "Start Timer");
        }        
        if (currentIdx === randomSpyIndex1 || currentIdx === randomSpyIndex2) {
          setStyles("card-front__tp", { background:"linear-gradient(to bottom, black, grey)"});
          setStyles("nextbutton", { color:"black"});
          setInnerHTML("nameshown", currentNumber + ". " + currentPlayer);
          setInnerHTML("Cardplayer", currentNumber + ". " + currentPlayer);
          setInnerHTML("Cardrole", "Spy");
          setInnerHTML("Cardplace", "");
          setInnerHTML("Carddescription", "Defend your role if suspected, guess the location wisely.<br><br>ป้องกันบทบาทของคุณหากมีข้อสงสัย เดาสถานที่อย่างมีเหตุผล");
          setImage("Cardimage", "1CardSpy.png");
        } else {
          setInnerHTML("nameshown", currentNumber + ". " + currentPlayer);
          setInnerHTML("Cardplayer", currentNumber + ". " + currentPlayer);
          setInnerHTML("Cardrole", chosenRole.roleused + chosenRole.thairoleused);
          setInnerHTML("Cardplace", chosenPlace);
          setInnerHTML("Carddescription", chosenRole.roledescriptionused);
          setImage("Cardimage", Cardimage);
        }
      })
    }, 1000);
  }
}

const Hospitalrole = [
    {roleused: 'Doctor', thairoleused: '<br>(แพทย์)', roledescriptionused: 'Medical professionals who diagnose and treat patients.<br>ผู้เชี่ยวชาญด้านการแพทย์ที่รักษาโรคและบาดเจ็บของผู้ป่วย'},
    {roleused: 'Nurse', thairoleused: '<br>(พยาบาล)', roledescriptionused: 'Healthcare providers who care for patients and assist doctors.<br><br>ผู้ดูแลผู้ป่วยและให้การช่วยเหลือแก่แพทย์ในการดูแลสุขภาพ'},
    {roleused: 'Patient', thairoleused: '<br>(ผู้ป่วย)', roledescriptionused: 'Individuals receiving medical treatment or care.<br><br>บุคคลที่รับการรักษาเนื่องจากมีอาการป่วยหรือบาดเจ็บ'},
    {roleused: 'Surgeon', thairoleused: '<br>(หมอผ่าตัด)', roledescriptionused: 'Doctors specialized in surgical procedures.<br><br>แพทย์ที่ดำเนินการผ่าตัดเพื่อรักษาโรคหรือบาดเจ็บ'},
    {roleused: 'Anesthesiologist', thairoleused: '<br>(แพทย์ดมยาสลบ)', roledescriptionused: 'Medical experts in administering anesthesia.<br><br>ผู้เชี่ยวชาญด้านการให้ยาชนิดลดความรู้สึกในผู้ป่วยในขณะที่ผ่าตัดหรือกระบวนการทางการแพทย์'},
    {roleused: 'Radiologist', thairoleused: '<br>(แพทย์รังสี)', roledescriptionused: 'Physicians interpreting medical imaging.<br><br>แพทย์ที่ใช้รังสีเพื่อวินิจฉัยโรคและสถานะสุขภาพของผู้ป่วย'},
    {roleused: 'Pharmacist', thairoleused: '<br>(เภสัชกร)', roledescriptionused: 'Professionals dispensing medications.<br><br>ผู้ให้ยาและให้คำแนะนำเกี่ยวกับการใช้ยาในผู้ป่วย'},
    {roleused: 'Paramedic', thairoleused: '<br>(ผู้ช่วยแพทย์)', roledescriptionused: 'First responders providing emergency medical care.<br><br>ผู้ให้บริการการดูแลระหว่างการขนส่งผู้ป่วยหรืออุบัติเหตุ'},
    {roleused: 'Lab Technician', thairoleused: '<br>(ช่างสิ่ววิทยา)', roledescriptionused: 'Experts conducting medical tests.<br><br>ทำงานในห้องปฏิบัติการเพื่อวิเคราะห์ตัวอย่างทางการแพทย์'},
    {roleused: 'Hospital Director', thairoleused: '<br>(ผู้อำนวยการโรงพยาบาล)', roledescriptionused: 'Administrators overseeing hospital operations.<br><br>ผู้บริหารหรือผู้ดูแลการทำงานของโรงพยาบาล'},
    {roleused: 'Janitor', thairoleused: '<br>(คนทำความสะอาด)', roledescriptionused: 'Individuals maintaining hospital cleanliness.<br><br>คนทำความสะอาดและบำรุงรักษาความสะอาดในโรงพยาบาล'},
    {roleused: 'Security Guard', thairoleused: '<br>(ยาม)', roledescriptionused: 'Personnel ensuring hospital security.<br><br>คนรักษาความปลอดภัยในโรงพยาบาล'},
    {roleused: 'Medical Student', thairoleused: '<br>(นักศึกษาแพทยศาสตร์)', roledescriptionused: 'Students studying medicine.<br><br>คนที่กำลังเรียนรู้เกี่ยวกับการแพทย์'},
    {roleused: 'Hospital Volunteer', thairoleused: '<br>(อาสาสมัครโรงพยาบาล)', roledescriptionused: 'Volunteers assisting in hospital tasks.<br><br>คนที่ทำงานเป็นอาสาสมัครในโรงพยาบาลเพื่อช่วยเหลือผู้ป่วย'},
    {roleused: 'Physical Therapist', thairoleused: '<br>(นักกายภาพบำบัด)', roledescriptionused: 'Specialists in physical rehabilitation.<br><br>ช่วยผู้ป่วยกู้คืนสุขภาพและความสามารถทางกาย'},
    {roleused: 'Psychologist', thairoleused: '<br>(นักจิตวิทยา)', roledescriptionused: 'Professionals specializing in psychology.<br><br>ผู้เชี่ยวชาญในด้านจิตวิทยาและการสัมผัส'},
    {roleused: 'Cafeteria Cook', thairoleused: '<br>(กุ๊กโรงอาหาร)', roledescriptionused: 'Staff preparing hospital meals.<br><br>ทำอาหารในโรงพยาบาล'},
    {roleused: 'Visitor', thairoleused: '<br>(ผู้เยี่ยมชม)', roledescriptionused: 'Individuals coming to see patients.<br><br>คนที่มาเยี่ยมผู้ป่วยในโรงพยาบาล'},
    {roleused: 'Chaplain', thairoleused: '<br>(นักบวช)', roledescriptionused: 'Spiritual advisors offering support.<br><br>บุคคลที่ให้คำปรึกษาทางศาสนาและสอนคุณค่าทางจิตใจในโรงพยาบาล'},
    {roleused: 'Ambulance Driver', thairoleused: '<br>(คนขับรถพยาบาล)', roledescriptionused: 'Drivers of medical transport vehicles.<br><br>คนที่ขับรถพยาบาลเพื่อนำผู้ป่วยไปยังโรงพยาบาลหรือสถานที่การแพทย์'},
];     

const Schoolrole = [
    {roleused: 'Teacher', thairoleused: '<br>(ครู)', roledescriptionused: 'Educators who guide students learning and critical thinking. ผู้สอนและให้คำแนะนำในการเรียนรู้แก่นักเรียน'},
    {roleused: 'Student', thairoleused: '<br>(นักเรียน)', roledescriptionused: 'The learners in a school environment. ผู้เรียนในโรงเรียน'},
    {roleused: 'Principal', thairoleused: '<br>(ผู้อำนวยการ)', roledescriptionused: 'School top administrator and visionary leader. ผู้บริหารโรงเรียน'},
    {roleused: 'Cafeteria Cook', thairoleused: '<br>(กุ๊กโรงอาหาร)', roledescriptionused: 'Prepares school meals for students. ทำอาหารในโรงเรียน' },
    {roleused: 'Janitor', thairoleused: '<br>(คนทำความสะอาด)', roledescriptionused: 'Maintains school cleanliness and hygiene. คนทำความสะอาดและบำรุงรักษาความสะอาดในโรงเรียน' },
    {roleused: 'School Nurse', thairoleused: '<br>(พยาบาลโรงเรียน)', roledescriptionused: 'Provides healthcare and first aid in school. ให้บริการดูแลสุขภาพในโรงเรียน' },
    {roleused: 'Librarian', thairoleused: '<br>(บรรณารักษ์)', roledescriptionused: 'Manages the school library and resources. ดูแลห้องสมุดและหนังสือในโรงเรียน'},
    {roleused: 'Parent', thairoleused: '<br>(ผู้ปกครอง)', roledescriptionused: 'Supports students educational journey. บุคคลที่มีนักเรียนในโรงเรียน'},
    {roleused: 'Guard', thairoleused: '<br>(ยาม)', roledescriptionused: 'Ensures school security. รักษาความปลอดภัยในโรงเรียน' },
    {roleused: 'Bus Driver', thairoleused: '<br>(คนขับรถโรงเรียน)', roledescriptionused: 'Safely transports students. ทำหน้าที่ขนนักเรียนไป-กลับจากโรงเรียน'},
    {roleused: 'Counselor Teacher', thairoleused: '<br>(ครูแนะแนว)', roledescriptionused: 'Offers guidance and counseling. ให้คำปรึกษาและแนะนำนักเรียนในด้านการเรียน'},
    {roleused: 'Biology Teacher', thairoleused: '<br>(ครูชีวะ)', roledescriptionused: 'Teaches biology concepts. สอนเนื้อหาทางชีววิทยาให้นักเรียน'},
    {roleused: 'Physic Teacher', thairoleused: '<br>(ครูฟิสิกส์)', roledescriptionused: 'Imparts physics knowledge. สอนเนื้อหาทางฟิสิกส์ให้นักเรียน' },
    {roleused: 'Chemistry Teacher', thairoleused: '<br>(ครูเคมี)', roledescriptionused: 'Educates about chemistry. สอนเนื้อหาทางเคมีให้นักเรียน' },
    {roleused: 'Art Teacher', thairoleused: '<br>(ครูศิลปะ)', roledescriptionused: 'Nurtures artistic creativity. สอนเนื้อหาทางศิลปะให้นักเรียน' },
    {roleused: 'Music Teacher', thairoleused: '<br>(ครูดนตรี)', roledescriptionused: 'Instructs in music and rhythm. สอนเนื้อหาทางดนตรีให้นักเรียน' },
    {roleused: 'PE Teacher', thairoleused: '<br>(ครูพละ)', roledescriptionused: 'Promotes physical fitness. สอนเนื้อหาทางพละให้นักเรียน' },
    {roleused: 'Math Teacher', thairoleused: '<br>(ครูคณิตศาสตร์)', roledescriptionused: 'Teaches math and problem-solving. สอนเนื้อหาทางคณิตให้นักเรียน' },
    {roleused: 'History Teacher', thairoleused: '<br>(ครูประวัติศาสตร์)', roledescriptionused: 'Teaches the past. สอนเนื้อหาทางประวัติศาสตร์ให้นักเรียน' },
    {roleused: 'Computer Teacher', thairoleused: '<br>(ครูคอมพิวเตอร์)', roledescriptionused: 'Teaches technology and coding. สอนเนื้อหาทางคอมพิวเตอร์ให้นักเรียน' },
];                            

const SpaceStationrole = [
    {roleused: 'Astronaut', thairoleused: '<br>(นักบินอวกาศ)', roledescriptionused: 'Individuals trained to travel into space and perform various activities there. ผู้ที่ได้รับการฝึกอบรมเพื่อเดินทางไปยังอวกาศเพื่อดำเนินกิจกรรมต่าง ๆ ในอวกาศ'},
    {roleused: 'Mission Commander', thairoleused: '<br>(ผู้บังคับการภารกิจ)', roledescriptionused: 'Responsible for leading and overseeing space missions. ผิดชอบในการนำและกำกับภารกิจอวกาศ'},
    {roleused: 'Alien', thairoleused: '<br>(เอเลี่ยน)', roledescriptionused: 'Extraterrestrial life forms from outside Earth. สิ่งมีชีวิตนอกโลก'},
    {roleused: 'Astrobiologist', thairoleused: '<br>(นักชีวศาสตร์อวกาศ)', roledescriptionused: 'Scientists who study extraterrestrial life and environments on other celestial bodies. ศึกษาชีวิตนอกโลกและสภาวะสภาพแวดล้อมที่สว่างอย่างอุดมสมบูรณ์บนดาวอื่น ๆ'},
    {roleused: 'Space Scientist', thairoleused: '<br>(นักวิทยาศาสตร์อวกาศ)', roledescriptionused: 'Researchers who study space-related phenomena and celestial bodies. วิจัยและทดลองทางดาราศาสตร์ที่เกี่ยวข้องกับอวกาศและสวรรค์ทางดาราศาสตร์อื่น ๆ'},
    {roleused: 'Payload Specialist', thairoleused: '<br>(นักวิชาการเครื่องบรรจุ)', roledescriptionused: 'Professionals responsible for managing and operating scientific experiments and equipment on spacecraft. รับผิดชอบการจัดการและการทำงานกับการทดลองและอุปกรณ์วิทยาศาสตร์บนยานอวกาศ'},
    {roleused: 'Communicationist', thairoleused: '<br>(เจ้าหน้าที่สื่อสาร)', roledescriptionused: 'Responsible for maintaining and controlling communications during space missions. รับผิดชอบในการรักษาสื่อสารและควบคุมการสื่อสารในภารกิจอวกาศ'},
    {roleused: 'Mission Operator', thairoleused: '<br>(ผู้ควบคุมการภารกิจ)', roledescriptionused: 'Responsible for managing various operations during space missions. รับผิดชอบในการดำเนินการต่าง ๆ ในภารกิจอวกาศ'},
    {roleused: 'Medical Officer', thairoleused: '<br>(เจ้าหน้าที่แพทย์)', roledescriptionused: 'Professionals responsible for the health and well-being of astronauts and mission personnel. รับผิดชอบดูแลสุขภาพของนักบินและภารกิจ'},
    {roleused: 'Biomedical Scientist', thairoleused: '<br>(นักวิทยาศาสตร์ชีวแพทย์)', roledescriptionused: ' Scientists specializing in medical and health-related research in space and celestial environments. ศึกษาการแพทย์และสุขภาพในอวกาศและสวรรค์'},
    {roleused: 'Astrophysicist', thairoleused: '<br>(นักฟิสิกส์ดาราศาสตร์)', roledescriptionused: 'Scientists who study astrophysics, the physics of celestial bodies and the universe. ศึกษาดาราศาสตร์และกฎกลึงทางฟิสิกส์ที่มีผลต่ออวกาศและวิวัฒนาการของดวงดาว'},
    {roleused: 'Space Engineer', thairoleused: '<br>(วิศวกรอวกาศ)', roledescriptionused: 'Engineers who design and build spacecraft and related equipment. ออกแบบและสร้างอุปกรณ์และยานอวกาศ'},
    {roleused: 'Navigation Specialist', thairoleused: '<br>(นักชี้นำ)', roledescriptionused: 'Experts in guiding spacecraft to their intended destinations in space. นำทางในอวกาศเพื่อให้ยานอวกาศเดินทางไปยังจุดที่ต้องการ'},
    {roleused: 'Space Psychologist', thairoleused: '<br>(นักจิตวิทยาอวกาศ)', roledescriptionused: 'Cares for astronauts mental health. ศึกษาสุขภาพจิตของนักบินในอวกาศ'},
    {roleused: 'Supply Officer', thairoleused: '<br>(เจ้าหน้าที่คลังของ)', roledescriptionused: 'Manages mission supplies and equipment. จัดหาพัสดุในอวกาศเพื่อรองรับภารกิจ'},
    {roleused: 'Astrogeologist', thairoleused: '<br>(นักธรณีวิทยาดาราศาสตร์)', roledescriptionused: 'Studies celestial bodies geology. ศึกษาสภาพธรณีวิทยาของดวงดาวและสวรรค์'},
    {roleused: 'Flight Surgeon', thairoleused: '<br>(แพทย์ดูแลอวกาศ)', roledescriptionused: 'Monitors astronaut health in space. ดูแลสุขภาพของนักบินในอวกาศและบริเวณด้วย'},
    {roleused: 'Space Chef', thairoleused: '<br>(เชฟอวกาศ)', roledescriptionused: 'Prepares meals for space missions. รับผิดชอบการเตรียมอาหารในสถานที่ที่ไม่มีแร่และโปรตีนในอวกาศ'},
    {roleused: 'Space Tourist', thairoleused: '<br>(นักท่องเที่ยวอวกาศ)', roledescriptionused: 'Enjoys recreational space travel. เดินทางไปยังอวกาศเพื่อสัมผัสประสบการณ์ไม่เหมือนใคร'},
    {roleused: 'Space Station Janitor', thairoleused: '<br>(ภารโรงสถานีอวกาศ)', roledescriptionused: 'Maintains space station cleanliness. ดูแลความสะอาดในสถานีอวกาศและรักษาสภาพแวดล้อมในระบบปิด'},
];

const Bankrole = [
    {roleused: 'Bank Teller', thairoleused: '<br>(พนักงานสาขาธนาคาร)', roledescriptionused: 'Responsible for assisting bank customers with their financial transactions. รับผิดชอบในการช่วยลูกค้าธนาคารในการทำธุรกรรมทางการเงินของพวกเขา'},
    {roleused: 'Loan Officer', thairoleused: '<br>(เจ้าหน้าที่อนุมัติสินเชื่อ)', roledescriptionused: 'Evaluates and approves loan applications for individuals and businesses. ประเมินและอนุมัติการสมัครสินเชื่อสำหรับบุคคลและธุรกิจ'},
    {roleused: 'Branch Manager', thairoleused: '<br>(ผู้จัดการสาขาธนาคาร)', roledescriptionused: 'Manages the daily operations of a bank branch. จัดการกับการดำเนินงานประจำวันของสาขาธนาคาร'},
    {roleused: 'Financial Advisor', thairoleused: '<br>(ที่ปรึกษาทางการเงิน)', roledescriptionused: 'Provides financial advice and investment recommendations to clients. ให้คำแนะนำทางการเงินและข้อเสนอแนะในการลงทุนแก่ลูกค้า'},
    {roleused: 'Credit Analyst', thairoleused: '<br>(นักวิเคราะห์เครดิต)', roledescriptionused: 'Analyzes the creditworthiness of individuals and businesses. วิเคราะห์ความคุ้มครองในการให้สินเชื่อแก่บุคคลและธุรกิจ'},
    {roleused: 'Bank Auditor', thairoleused: '<br>(ผู้ตรวจสอบธนาคาร)', roledescriptionused: 'Conducts internal audits to ensure compliance and financial accuracy. ดำเนินการตรวจสอบภายในเพื่อให้มั่นใจในการปฏิบัติตามกฏระเบียบและความถูกต้องทางการเงิน'},
    {roleused: 'Investment Banker', thairoleused: '<br>(นักลงทุนธนาคาร)', roledescriptionused: 'Manages financial transactions for corporate clients and offers investment advice. จัดการธุรกรรมทางการเงินสำหรับลูกค้าบริษัทและให้คำแนะนำในการลงทุน'},
    {roleused: 'Mortgage Broker', thairoleused: '<br>(โบรกเกอร์สินเชื่อบ้าน)', roledescriptionused: 'Helps individuals find and secure mortgage loans. ช่วยให้บุคคลค้นหาและรับสินเชื่อจดจำนอง'},
    {roleused: 'Financial Analyst', thairoleused: '<br>(นักวิเคราะห์การเงิน)', roledescriptionused: 'Analyzes financial data and provides insights for investment decisions. วิเคราะห์ข้อมูลการเงินและให้ข้อมูลเชิงลึกสำหรับการตัดสินใจในการลงทุน'},
    {roleused: 'Security Guard', thairoleused: '<br>(ยาม)', roledescriptionused: 'Ensures the safety and security of a bank premises and customers. รักษาความปลอดภัยและความมั่นคงของที่ตั้งและลูกค้าของธนาคาร'},
    {roleused: 'Treasury Analyst', thairoleused: '<br>(นักวิเคราะห์สินทรัพย์)', roledescriptionused: 'Manages a company financial assets and cash flow. จัดการทรัพยากรการเงินและกระแสเงินสดของบริษัท'},
    {roleused: 'Commercial Banker', thairoleused: '<br>(นักธุรกิจธนาคาร)', roledescriptionused: 'Provides financial services and loans to businesses. ให้บริการทางการเงินและสินเชื่อแก่ธุรกิจ'},
    {roleused: 'Financial Planner', thairoleused: '<br>(นักวางแผนการเงิน)', roledescriptionused: 'Helps individuals and businesses create financial plans and achieve financial goals. ช่วยให้บุคคลและธุรกิจสร้างแผนการเงินและบรรลุเป้าหมายทางการเงิน'},
    {roleused: 'Credit Manager', thairoleused: '<br>(ผู้จัดการแผนกเครดิต)', roledescriptionused: 'Manages a company credit policies and evaluates credit risks. จัดการนโยบายเครดิตของบริษัทและประเมินความเสี่ยงทางเครดิต'},
    {roleused: 'Depositor', thairoleused: '<br>(ผู้ฝากเงิน)', roledescriptionused: 'Individuals or businesses that deposit money into a bank. บุคคลหรือธุรกิจที่ฝากเงินในธนาคาร'},
    {roleused: 'Branch Administrator', thairoleused: '<br>(ผู้ดูแลสาขา)', roledescriptionused: 'Responsible for administrative tasks within a bank branch. รับผิดชอบงานด้านการบริหารที่สาขาธนาคาร'},
    {roleused: 'Investment Analyst', thairoleused: '<br>(นักวิเคราะห์การลงทุน)', roledescriptionused: 'Analyzes investments and provides recommendations for portfolio management. วิเคราะห์การลงทุนและให้ข้อเสนอแนะในการบริหารพอร์ตการลงทุน'},
    {roleused: 'Millionaire', thairoleused: '<br>(เศรษฐี)', roledescriptionused: 'A person with a net worth of one million or more. บุคคลที่มีสุทธินิยมเป็นหนึ่งล้านหรือมากกว่า'},
    {roleused: 'Risk Analyst', thairoleused: '<br>(นักวิเคราะห์ความเสี่ยง)', roledescriptionused: 'Assesses and manages risks associated with financial activities. ประเมินและจัดการความเสี่ยงที่เกี่ยวข้องกับกิจกรรมทางการเงิน'},
    {roleused: 'Financial Controller', thairoleused: '<br>(ผู้ควบคุมการเงิน)', roledescriptionused: 'Oversees a company financial operations and reporting. ควบคุมกิจกรรมทางการเงินและรายงานของบริษัท'},
];

const SupermarketRole = [
    {roleused: 'Cashier', thairoleused: '<br>(พนักงานเก็บเงิน)', roledescriptionused: 'Cashiers handle customer payments at checkout. พนักงานรับเงินจ่ายเงินให้กับลูกค้าที่จุดจ่ายเงิน'},
    {roleused: 'Store Manager', thairoleused: '<br>(ผู้จัดการร้านสุขภัณฑ์)', roledescriptionused: 'Store Managers oversee daily store operations. ผู้จัดการร้านค้าควบคุมการดำเนินงานประจำวันของร้าน'},
    {roleused: 'Stock Clerk', thairoleused: '<br>(พนักงานเก็บรายการสินค้า)', roledescriptionused: 'Stock Clerks manage inventory and restocking. พนักงานจัดเก็บคลังสินค้าจัดการสินค้าในคลังและการเติมสินค้า'},
    {roleused: 'Customer Service', thairoleused: '<br>(ตัวแทนบริการลูกค้า)', roledescriptionused: 'Customer Service assists and supports customers. บริการลูกค้าให้ความช่วยเหลือและสนับสนุนลูกค้า'},
    {roleused: 'Deli Worker', thairoleused: '<br>(พนักงานร้านของสด)', roledescriptionused: 'Deli Workers prepare and serve deli items. พนักงานร้านอาหารที่เตรียมและเสิร์ฟอาหารอาหารบริเวณร้านอาหาร'},
    {roleused: 'Bakery Staff', thairoleused: '<br>(พนักงานร้านเบเกอรี่)', roledescriptionused: 'Bakery Staff work in the bakery department. พนักงานขนมปังทำงานในแผนกขนมปัง'},
    {roleused: 'Butcher', thairoleused: '<br>(พนักงานร้านเนื้อสัตว์)', roledescriptionused: 'Butchers prepare and sell meat products. พ่อครัวเตรียมและขายผลิตภัณฑ์เนื้อสัตว์'},
    {roleused: 'Store Cleaner', thairoleused: '<br>(พนักงานทำความสะอาดร้าน)', roledescriptionused: 'Store Cleaners maintain store cleanliness. พนักงานทำความสะอาดร้านค้ารักษาร้านค้าให้สะอาด'},
    {roleused: 'Shelf Stocker', thairoleused: '<br>(พนักงานเตรียมสินค้าใส่ชั้น)', roledescriptionused: 'Shelf Stockers replenish product shelves. พนักงานเติมสินค้าลงบนชั้น'},
    {roleused: 'Security Guard', thairoleused: '<br>(ยาม)', roledescriptionused: 'Security Guards ensure store security. พนักงานรักษาความปลอดภัยในร้านค้า'},
    {roleused: 'Cashier Supervisor', thairoleused: '<br>(ผู้ควบคุมงานเก็บเงิน)', roledescriptionused: 'Cashier Supervisors oversee cashier teams. ผู้ควบคุมแผนกการจ่ายเงินควบคุมทีมพนักงานจ่ายเงิน'},
    {roleused: 'Service Manager', thairoleused: '<br>(ผู้จัดการบริการลูกค้า)', roledescriptionused: 'Service Managers manage customer service. ผู้จัดการบริการจัดการบริการลูกค้า'},
    {roleused: 'Grocery Manager', thairoleused: '<br>(ผู้จัดการแผนกซื้อของชำ)', roledescriptionused: 'Grocery Managers oversee grocery departments. ผู้จัดการซุปเปอร์มาร์เก็ตควบคุมแผนกของซุปเปอร์มาร์เก็ต'},
    {roleused: 'Cashier Assistant', thairoleused: '<br>(ผู้ช่วยเหลือพนักงานเก็บเงิน)', roledescriptionused: 'Cashier Assistants support cashiers. ผู้ช่วยจ่ายเงินสนับสนุนพนักงานจ่ายเงิน'},
    {roleused: 'Customer', thairoleused: '<br>(ลูกค้า)', roledescriptionused: 'Customers shop and purchase items. ลูกค้าเข้ามาช้อปปิ้งและซื้อสินค้า'},
    {roleused: 'Bakery Assistant', thairoleused: '<br>(ผู้ช่วยเหลือพนักงานร้านเบเกอรี่)', roledescriptionused: 'Bakery Assistants support bakery staff. ผู้ช่วยทำขนมปังสนับสนุนพนักงานขนมปัง'},
    {roleused: 'Dairy Clerk', thairoleused: '<br>(พนักงานผลิตภัณฑ์นม)', roledescriptionused: 'Dairy Clerks handle dairy products. พนักงานแผนกนมดูแลสินค้านม'},
    {roleused: 'Cart Collector', thairoleused: '<br>(พนักงานรวบรวมรถเข็นสินค้า)', roledescriptionused: 'Cart Collectors gather shopping carts. พนักงานเก็บรถเข็นช็อปปิ้งรถเข็นรวบรวมรถเข็นช็อปปิ้ง'},
    {roleused: 'Store Greeter', thairoleused: '<br>(พนักงานต้อนรับลูกค้า)', roledescriptionused: 'Store Greeters welcome customers. พนักงานต้อนรับลูกค้าในร้านค้า'},
    {roleused: 'Supermarket Dog', thairoleused: '<br>(หมาหน้าร้านค้า)', roledescriptionused: 'Supermarket Dogs are friendly in front stores. หมาหน้าร้านค้าเพื่อความเป็นมิตรในร้านค้า'},
];

const Beachrole = [
    {roleused: 'Lifeguard', thairoleused: '<br>(นักดูแลชายหาด)', roledescriptionused: 'Ensures beach safety and responds to emergencies. รักษาความปลอดภัยในชายหาดและตอบสนองกรณีฉุกเฉิน'},
    {roleused: 'Surfer', thairoleused: '<br>(นักโต้คลื่น)', roledescriptionused: 'Rides ocean waves using surfboards. ขี่คลื่นทะเลด้วยบอร์ดเซิร์ฟ'},
    {roleused: 'Beach Cleaner', thairoleused: '<br>(พนักงานทำความสะอาดชายหาด)', roledescriptionused: 'Maintains beach cleanliness. รักษาความสะอาดชายหาด'},
    {roleused: 'Beach Photographer', thairoleused: '<br>(ช่างภาพชายหาด)', roledescriptionused: 'Captures moments at the beach. ถ่ายรูปช็อตและฉากต่าง ๆ ที่ชายหาดเพื่อให้บริการถ่ายภาพแก่คนที่มาชายหาด'},
    {roleused: 'Beach Vendor', thairoleused: '<br>(พ่อค้าแม่ค้าชายหาด)', roledescriptionused: 'Sells products and services on the beach. ขายสินค้าและบริการบนชายหาด'},
    {roleused: 'Beachgoer', thairoleused: '<br>(คนไปชายหาด)', roledescriptionused: 'Visits the beach for relaxation. มาชายหาดเพื่อผ่อนคลาย'},
    {roleused: 'Beach Bartender', thairoleused: '<br>(บาร์เทนเดอร์ชายหาด)', roledescriptionused: 'Serves drinks at beachside bars. ทำงานที่บาร์ติดชายหาดโดยให้บริการเครื่องดื่มและค็อกเทลแก่ผู้มาชายหาด'},
    {roleused: 'Beach Volleyball Player', thairoleused: '<br>(นักเล่นวอลเลย์บอลชายหาด)', roledescriptionused: 'Participate in beach volleyball matches and tournaments on the sand. นักเล่นวอลเลย์บอลชายหาดร่วมงานแข่งวอลเลย์บอลชายหาดและทัวร์นาเมนต์บนทราย'},
    {roleused: 'Beach DJ', thairoleused: '<br>(ดีเจชายหาด)', roledescriptionused: 'Provide music and entertainment on the beach, creating a lively atmosphere. ให้บริการดนตรีและความบันเทิงบนชายหาดเพื่อสร้างบรรยากาศเต็มไปด้วยความสนุกสนาน'},
    {roleused: 'Yoga Instructor', thairoleused: '<br>(ครูสอนโยคะชายหาด)', roledescriptionused: 'Lead yoga sessions on the beach, promoting relaxation and fitness. นำเซสชันโยคะบนชายหาดเพื่อส่งเสริมความผ่อนคลายและสุขภาพ'},
    {roleused: 'Party Planner', thairoleused: '<br>(ผู้วางแผนปาร์ตี้ชายหาด)', roledescriptionused: 'Organize and manage beach parties and events. วางแผนปาร์ตี้ชายหาดจัดการและบริหารงานปาร์ตี้และกิจกรรมบนชายหาด'},
    {roleused: 'Beachcomber', thairoleused: '<br>(คนเดินชายหาด)', roledescriptionused: 'Individuals who search for seashells and treasures on the beach. ผู้ที่ค้นหาหอยทะเลและของมีค่าต่าง ๆ บนชายหาด'},
    {roleused: 'Cabana Attendant', thairoleused: '<br>(พนักงานรับใช้คาบานาชายหาด)', roledescriptionused: 'Assist visitors with renting and setting up cabanas on the beach. ช่วยเยี่ยมชมในการเช่าและตั้งคาบานาบนชายหาด'},
    {roleused: 'Umbrella Rental', thairoleused: '<br>(บริการเช่าร่มชายหาด)', roledescriptionused: 'Provides the service of renting umbrellas to beachgoers for shade. บริการเช่าร่มชายหาดให้คนที่มาชายหาดเพื่อร่มเงา'},
    {roleused: 'Resort Manager', thairoleused: '<br>(ผู้จัดการรีสอร์ทชายหาด)', roledescriptionused: 'Oversee the operations and management of beachfront resorts. ควบคุมการดำเนินงานประจำวันและประสบการณ์ของแขกในรีสอร์ทริมชายหาด'},
    {roleused: 'Beach Property Owner', thairoleused: '<br>(เจ้าของที่ดินชายหาด)', roledescriptionused: 'Responsible for owning and managing beachfront properties. บุคคลที่เคยทำการลงทุนในที่ดินบริเวณชายหาดและเป็นเจ้าของสิทธิในพื้นที่นี้'},
    {roleused: 'Volleyball Coach', thairoleused: '<br>(โค้ชวอลเลย์บอลชายหาด)', roledescriptionused: 'Instructs and trains individuals or teams in the sport of beach volleyball. ครูที่สอนและแนะนำการเล่นวอลเลย์บอลชายหาดให้ผู้เรียน'},
    {roleused: 'Beach Dog', thairoleused: '<br>(หมาชายหาด)', roledescriptionused: 'Friendly canine companions enjoying the beach atmosphere. หมาที่มีโอกาสสนุกกับชายหาดและคนๆ รอบข้างในบรรยากาศแห่งการพักผ่อนแบบอิสระบนชายหาด'},
    {roleused: 'Bikini Girl', thairoleused: '<br>(สาวบิกินี่)', roledescriptionused: 'Individuals wearing stylish swimwear, adding to the beach vibe. ผู้หญิงที่เลือกสวมใส่ชุดว่ายน้ำและพร้อมสนุกกับทะเลและดวงอาทิตย์ที่ชายหาด'},
    {roleused: 'Drowning Person', thairoleused: '<br>(คนจมน้ำ)', roledescriptionused: 'Individuals in distress and needing immediate rescue assistance in the water. บุคคลที่ต้องการความช่วยเหลือหรือการกู้ชีวิตเมื่อตกลงน้ำในทะเลหรือสระว่ายน้ำ'},
];

const ChurchRole = []
const ForestRole = []
const PoliceStationRole = []
