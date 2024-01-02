// Button "Click here"
const btn1 = document.getElementById("btn1");
btn1.addEventListener("click", function(e) {
    const name = prompt("What is your name?");
    console.log(name); // this prints the name entered in the console
    if (name != null) {
        document.body.innerHTML = "<h1>Welcome " + name + "!</h1>";
    }
});

// Button "Open Google in new tab"
function openGoogle() {
    window.open('https://www.google.com', '_blank');
}
const btn4 = document.getElementById("btn4");
btn4.addEventListener("click", openGoogle);
document.body.appendChild(btn4);

// Button "Youtube"
function openYoutube() {
    window.open('https://www.youtube.com', '_blank');
}
const btn5 = document.getElementById("btn5");
btn5.addEventListener("click", openYoutube);
document.body.appendChild(btn5);
