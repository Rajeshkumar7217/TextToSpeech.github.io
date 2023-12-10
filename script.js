const speakBtn = document.querySelector("#playBtn");
const query = document.querySelector("#text");

speakBtn.addEventListener("click",edit);
 
function edit() {
    const speech = new SpeechSynthesisUtterance (query.value);
    speechSynthesis.speak(speech);



}
