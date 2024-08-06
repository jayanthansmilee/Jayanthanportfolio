// Get elements
const audio = document.getElementById("audioPlayer");
const loader = document.getElementById("preloader");
const emptyArea = document.getElementById("emptyarea");
const mobileTogglemenu = document.getElementById("mobiletogglemenu");
const mybutton = document.getElementById("backtotopbutton");

// Functions
function settingToggle() {
    document.getElementById("setting-container").classList.toggle("settingactivate");
    document.getElementById("visualmodetogglebuttoncontainer").classList.toggle("visualmodeshow");
    document.getElementById("soundtogglebuttoncontainer").classList.toggle("soundmodeshow");
}

function playPause() {
    const soundSwitch = document.getElementById("switchforsound");
    soundSwitch.checked ? audio.play() : audio.pause();
}

function visualMode() {
    document.body.classList.toggle("light-mode");
    document.querySelectorAll(".needtobeinvert").forEach(e => e.classList.toggle("invertapplied"));
}

function hamburgerMenu() {
    document.body.classList.toggle("stopscrolling");
    mobileTogglemenu.classList.toggle("show-toggle-menu");
    document.getElementById("burger-bar1").classList.toggle("hamburger-animation1");
    document.getElementById("burger-bar2").classList.toggle("hamburger-animation2");
    document.getElementById("burger-bar3").classList.toggle("hamburger-animation3");
}

function hideMenuByLi() {
    document.body.classList.toggle("stopscrolling");
    mobileTogglemenu.classList.remove("show-toggle-menu");
    document.getElementById("burger-bar1").classList.remove("hamburger-animation1");
    document.getElementById("burger-bar2").classList.remove("hamburger-animation2");
    document.getElementById("burger-bar3").classList.remove("hamburger-animation3");
}

function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function mouseMove(e) {
    const pupilStartPoint = -10;
    const pupilRangeX = 20;
    const pupilRangeY = 15;
    const mouseXStartPoint = 0;
    const mouseXEndPoint = window.innerWidth;
    const mouseYEndPoint = window.innerHeight;

    const currentXPosition = e.clientX - mouseXStartPoint;
    const fracXValue = currentXPosition / (mouseXEndPoint - mouseXStartPoint);
    const currentYPosition = e.clientY;
    const fracYValue = currentYPosition / mouseYEndPoint;

    const t = pupilStartPoint + fracXValue * pupilRangeX;
    const o = pupilStartPoint + fracYValue * pupilRangeY;

    Array.from(document.getElementsByClassName("footer-pupil")).forEach(e => {
        e.style.transform = `translate(${t}px, ${o}px)`;
    });
}

function windowResize() {
    mouseXEndPoint = window.innerWidth;
    mouseYEndPoint = window.innerHeight;
}

// Event listeners
window.addEventListener("load", () => {
    loader.style.display = "none";
    document.querySelector(".hey").classList.add("popup");
});

window.addEventListener("scroll", () => {
    let currentSectionId = "";
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200 && pageYOffset < sectionTop + section.clientHeight) {
            currentSectionId = section.getAttribute("id");
        }
    });

    const navLi = document.querySelectorAll(".navbar .navbar-tabs .navbar-tabs-ul li");
    const mobilenavLi = document.querySelectorAll(".mobiletogglemenu .mobile-navbar-tabs-ul li");
    mobilenavLi.forEach(li => {
        li.classList.toggle("activeThismobiletab", li.classList.contains(currentSectionId));
    });
    navLi.forEach(li => {
        li.classList.toggle("activeThistab", li.classList.contains(currentSectionId));
    });
});

window.addEventListener("mousemove", mouseMove);
window.addEventListener("resize", windowResize);

document.addEventListener("contextmenu", e => {
    if (e.target.nodeName === "IMG") {
        e.preventDefault();
    }
}, false);

window.onscroll = scrollFunction;

// Back to top button
mybutton.addEventListener("click", scrollToTop);

// Console log message
console.log("%c Designed and Developed by Vinod Jangid ", "background-image: linear-gradient(90deg,#8000ff,#6bc5f8); color: white;font-weight:900;font-size:1rem; padding:20px;");
