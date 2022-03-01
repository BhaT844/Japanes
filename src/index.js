const result = document.getElementById("result");

let 합쳐진거 = Array;
let cheak;
let randomNum;

const changeQuiz = () => {
    const hiraCheck = document.getElementById("hiragana").checked;
    const kataCheck = document.getElementById("katakana").checked;
    const kanjiCheck = document.getElementById("kanji").checked;
    
    //type check
    if (document.getElementById("onlyjp").checked) {
        cheak = true;
    } else if (document.getElementById("onlypron").checked) {
        cheak = false;
    } else {
        cheak = Math.random() > 0.45;
    }
    
    //japanese check
    if (hiraCheck) {
        합쳐진거 = [
            ...hiragana
        ];
    } else if (kataCheck) {
        합쳐진거 = [
            ...katakana
        ];
    } else if (kanjiCheck) {
        /*추후 한자 추가*/
    } else {
        합쳐진거 = [
            ...hiragana,
            ...katakana
        ];
    }

    //takeum check
    const takeumCheck = document.getElementById("tak").checked;
    if (takeumCheck && hiraCheck) {
        합쳐진거 = [
            ...합쳐진거,
            ...hiratak
        ];
    } else if (takeumCheck && kataCheck) {
        합쳐진거 = [
            ...합쳐진거,
            ...katatak
        ];
    } else if (takeumCheck) {
        합쳐진거 = [
            ...합쳐진거,
            ...hiratak,
            ...katatak
        ];
    }
    //yoeum check
    const yoeumCheck = document.getElementById("yoeum").checked;
    if (yoeumCheck && hiraCheck) {
        합쳐진거 = [
            ...합쳐진거,
            ...hirayoeum
        ];
    } else if (yoeumCheck && kataCheck) {
        합쳐진거 = [
            ...합쳐진거,
            ...katayoeum
        ];
    } else if (yoeumCheck) {
        합쳐진거 = [
            ...합쳐진거,
            ...hirayoeum,
            ...katayoeum
        ];
    }
    //yotak check
    if (yoeumCheck && takeumCheck && hiraCheck) {
        합쳐진거 = [
            ...합쳐진거,
            ...hirayotak
        ];
    } else if (yoeumCheck && takeumCheck && kataCheck) {
        합쳐진거 = [
            ...합쳐진거,
            ...katayotak
        ];
    } else if (yoeumCheck && takeumCheck) {
        합쳐진거 = [
            ...합쳐진거,
            ...hirayotak,
            ...katayotak
        ];
    }

    randomNum = Math.floor(Math.random() * 합쳐진거.length);
    result.innerHTML = cheak ? 합쳐진거[randomNum].w + '<span class="hidden"></span>' : 합쳐진거[randomNum].p + '<span class="hidden"></span>';
    result.querySelector("span").innerText = cheak ? 합쳐진거[randomNum].p : 합쳐진거[randomNum].w;
};

const answerFun = () => {
    result.querySelector("span").classList.toggle("hidden");
};

const pressKey = event => {
    if (event.code === "Space") {
        changeQuiz();
    } else if (event.code === "Enter") {
        answerFun();
    }
};

document.getElementById("kanji").addEventListener("click",  event => {
    event.preventDefault();
    alert("아직 구현되지 않음");
});

changeQuiz();
document.addEventListener("keypress", pressKey);

