const start = () => {
    setTimeout(function() {
        confetti.start()
    }, 500); 
};

const stop = () => {
    setTimeout(function() {
        confetti.stop()
    }, 5000); // 5000 is time that after 5 second stop the confetti ( 5000 = 5 sec)
};

let button = $j('.h-call__container button');
button.addEventListener('click', () => {
    $j('.h-call').classList.add('hidde');
    setTimeout(() => $j('.h-call').style.display = "none", 350);
    setTimeout(() => $j('.h-newsletter').style.display = "flex", 360);
    setTimeout(() => $j('.h-newsletter').classList.add('show'), 380);
});

let buttonSubscribe = $j('.h-newsletter__form > button');
buttonSubscribe.addEventListener('click', () => {
    $j('.h-newsletter').classList.add('hidde');
    $j('.h-newsletter').classList.remove('show');
    setTimeout(() => $j('.h-newsletter').style.display = "none", 350);
    setTimeout(() => $j('.h-success').style.display = "flex", 360);
    setTimeout(() => $j('.h-success').classList.add('show'), 380);
    start();
    stop();
});



