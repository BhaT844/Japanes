const quizResult = document.getElementById("quiz");
const nextButton = document.querySelector("#nextButton");
const check = document.getElementById("yoeum");
const result = document.getElementById("result");

const changeQuiz = () => {
    let check;
    let 합쳐진거 = Array;
    
    //type check
    if (document.getElementById("onlyjp").checked) {
        check = true;
    } else if (document.getElementById("onlypron").checked) {
        check = false;
    } else {
        check = Math.random() > 0.45;
    }
    
    //japanese check
    if (document.getElementById("hiragana").checked) {
        합쳐진거 = [
            ...hiragana
        ];
    } else if (document.getElementById("katakana").checked) {
        합쳐진거 = [
            ...katakana
        ];
    } else if (document.getElementById("kanji").checked) {
        //추후 한자 추가
    } else {
        합쳐진거 = [
            ...hiragana,
            ...katakana
        ];
    }
    document.getElementsByName("japanese").forEach(node => {
        if (node.checked) {
            
        }
    });
            
            const randomNum = Math.floor(Math.random() * 합쳐진거.length);
            result.innerText = check ? 합쳐진거[randomNum].w : 합쳐진거[randomNum].p;
};
        
const pressSpace = event => {
    if (event.code === "Space") {
        changeQuiz();
    }
};

document.getElementById("kanji").addEventListener("click",  event => {
    event.preventDefault();
    alert("아직 구현되지 않음");
});

changeQuiz();
document.addEventListener("keypress", pressSpace);
