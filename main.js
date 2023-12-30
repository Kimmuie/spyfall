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
      setStyles("nameborderlist", { background: "linear-gradient(to right,  #272829, #61677A)" });
    } else if (sun[i].style.display === "none") {
      console.log("Turn Bright");
      setStyles("gg-sun", { display: "block" });
      setStyles("gg-moon", { display: "none" });
      setProperty("changefont", { "--before-font": "black" });
      setProperty("changediv", { "--before-backgroundchange": "linear-gradient(to bottom, #6C737E, #CFD2CF, #6C737E)" });
      setProperty("changedivsp", { "--before-backgroundchangesp1": "linear-gradient(to bottom, #CFD2CF, #6C737E)", "--before-backgroundchangesp2": "linear-gradient(to bottom, #CFD2CF, #6C737E)" });
      setProperty("changedivsmol", { "--before-backgroundchangesmol": "#6C737E" });
      setStyles("changegif", { backgroundImage: "url(./1BGwhite.gif)" });
      setStyles("nameborderlist", { background: "linear-gradient(to right, #6C737E, #CFD2CF)" });
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
          if (nameInput.length <= 20) {
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
            alert("Please enter a name with 20 characters or fewer.");
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

function startGame() {
  if (displayedNames.length < 3) {
      alert("You need at least 3 players to start the game.");
  } else if (displayedNames.length >= 3) {
    setStyles("offlinebox", { display:"none"});
  }
}
