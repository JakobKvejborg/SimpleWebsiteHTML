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
    const downloadLink = 'https://drive.usercontent.google.com/download?id=1It32jZqvxr1g0mJzP2zP94J1yB6H9Bqd&export=download&authuser=0&confirm=t&uuid=46b559c2-2450-46f8-8f5c-cbdf8319e2b4&at=APZUnTXBDnEBqQuofAiXdTEK1jcv%3A1707841378186';
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


