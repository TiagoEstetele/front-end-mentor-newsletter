let button = $j('.h-call__container button');

button.addEventListener('click', () => {
    $j('.h-call').classList.add('hidde');
    setTimeout(() => $j('.h-call').style.display = "none", 350);
    setTimeout(() => $j('.h-newsletter').style.display = "flex", 360);
    setTimeout(() => $j('.h-newsletter').classList.add('show'), 380);
});
