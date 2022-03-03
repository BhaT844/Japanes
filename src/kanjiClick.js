function kanjiActivated() {
    document.getElementById("jp-label").innerText = "한자만";
    document.getElementById("pron-label").innerText = "음뜻만";
    document.getElementById("takeum").disabled = true;
    document.getElementById("yoeum").disabled = true;
}

function kanjiUnactivated() {
    document.getElementById("jp-label").innerText = "일본어만";
    document.getElementById("pron-label").innerText = "발음만";
    document.getElementById("takeum").disabled = false;
    document.getElementById("yoeum").disabled = false;
}