const result = document.getElementById("result");

let 합쳐진거 = new Array;
let cheak;
let randomNum;

function changeQuiz() {
    const hiraCheck = document.getElementById("hiragana").checked;
    const kataCheck = document.getElementById("katakana").checked;
    const kanjiCheck = document.getElementById("kanji").checked;
    
    //type check
    if (document.getElementById("onlyjp").checked) { cheak = true; }
    else if (document.getElementById("onlypron").checked) { cheak = false; }
    else { cheak = Math.random() > 0.49999999999; }
    
    //japanese check
    if (hiraCheck) {
        합쳐진거 = [
            ...hiragana
        ];
    }
    else if (kataCheck) {
        합쳐진거 = [
            ...katakana
        ];
    }
    else if (kanjiCheck) {
        합쳐진거 = [
            ...grade_8
        ];
    }
    else {
        합쳐진거 = [
            ...hiragana,
            ...katakana
        ];
    }

    if(!kanjiCheck) {
        //takeum check
        const takeumCheck = document.getElementById("takeum").checked;
        if (takeumCheck) {
            if (hiraCheck) { 합쳐진거 = 합쳐진거.concat(hiratak); }
            else if (kataCheck) { 합쳐진거 = 합쳐진거.concat(katatak); }
            else { 합쳐진거 = 합쳐진거.concat(hiratak, katatak); }
        }
        //yoeum check
        const yoeumCheck = document.getElementById("yoeum").checked;
        if (yoeumCheck) {
            if (hiraCheck) { 합쳐진거 = 합쳐진거.concat(hirayoeum); }
            else if (kataCheck) { 합쳐진거 = 합쳐진거.concat(katayoeum); }
            else { 합쳐진거 = 합쳐진거.concat(hirayoeum, katayoeum); }
        }
        //yoeum and takeum check
        if (yoeumCheck && takeumCheck) {
            if (hiraCheck) { 합쳐진거 = 합쳐진거.concat(hirayotak); }
            else if (kataCheck) { 합쳐진거 = 합쳐진거.concat(katayotak); }
            else { 합쳐진거 = 합쳐진거.concat(hirayotak, katayotak); }
        }
    }

    randomNum = Math.floor(Math.random() * 합쳐진거.length);
    result.innerHTML = (cheak ? 합쳐진거[randomNum].w : 합쳐진거[randomNum].p) + '<span class="hidden"></span>';
    result.querySelector("span").innerText = cheak ? 합쳐진거[randomNum].p : 합쳐진거[randomNum].w;
}

function answer() {
    result.querySelector("span").classList.toggle("hidden");
}

function pressKey(event) {
    if (event.code === "Space") { changeQuiz(); }
    else if (event.code === "Enter") { answer(); }
}

changeQuiz();
document.addEventListener("keypress", pressKey);
