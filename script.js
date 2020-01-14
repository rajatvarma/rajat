var isDark = false;

function switchTheme() {
    isDark = !isDark
    let root = document.documentElement;
    console.log(isDark);
    var body = document.getElementsByTagName("body");
    var aboutArea = document.getElementsByClassName("about")
    var themeSwitchButton = document.getElementById("themeSwitcherButton");
    if (isDark == true) {
        document.documentElement.style.setProperty('--primary',  '#56C3F2');
        body[0].style.backgroundColor = "var(--dark-bg)";
        aboutArea[0].style.color = "var(--primary)";
        themeSwitchButton.innerHTML = "<img src='imgs/moon.svg'>";       
    }

    else if (isDark == false) {
        document.documentElement.style.setProperty('--primary',  '#3AB9EF');
        body[0].style.backgroundColor = "var(--light-bg)";
        aboutArea[0].style.color = "var(--primary)";
        themeSwitchButton.innerHTML = "<img src='imgs/sun.svg'>";
    }
}

function linksPosition(){
    console.log("Activated");
    if (window.screen.width < 1000) {
        document.getElementById("personalize").innerHTML = "above";
    }

    else {
        document.getElementById("personalize").innerHTML = "beside";
    }
}

switchTheme();

