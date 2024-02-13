// Button "Click here"
const btn1 = document.getElementById("btn1");
btn1.addEventListener("click", function(e) {
    const name = prompt("What is your name?");
    console.log(name); // this prints the name entered in the console
    if (name != null) {
        document.body.innerHTML = "<h1>Welcome " + name + "!</h1>";
    }
});

// Button 2 "Download exe"
function downloadExe() {
    const downloadLink = 'https://drive.usercontent.google.com/download?id=1HXMNDmrmyx77N602ivgByzXZUhKf7Dom&export=download&authuser=0&confirm=t&uuid=d83a9921-88a2-4307-b065-fcaf264f08b5&at=APZUnTUayxCXHYIW9zwnGdixotJo%3A1707840156653';
    const link = document.createElement('a'); // this creates the download link
    link.href = downloadLink; // this creates the download link
    document.body.appendChild(link);
    link.click();

}
const btn2 = document.getElementById("btn2");
btn2.addEventListener("click", downloadExe);
document.body.appendChild(btn2);


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


