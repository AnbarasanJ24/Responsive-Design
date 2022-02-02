window.onresize = screen;
window.onload = screen;

function screen() {
    myWidth = window.innerWidth;

    const windowSize = document.getElementById('size');
    windowSize.innerHTML = `Width ${myWidth} px`
}