const message = document.querySelector('#message');
const buttons = document.querySelector('#buttons');
const noBtn = document.querySelector('.no');
const yesBtn = document.querySelector('.yes');

noBtn.addEventListener('click', () => {
    //RANDOM POSITIONIN OF THE noBTn
    //HINT # 1: window has properties of the width and height of the screen
    //HINT # 2: offsetWidth and offsetHeight are properties of html elements
    //HINT # 3: This button has position 'absolute', which means that its position in the html document could
    //be given by the style properties left and top (in px values)

    let anchor = screen.width;
    let anchor2 = screen.height;
    let randomX = Math.floor(Math.random() * (anchor - noBtn.offsetWidth));
    let randomY = Math.floor(Math.random() * (anchor2 - noBtn.offsetHeight));
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
});

yesBtn.addEventListener('click', () => {
    message.innerHTML = 'TE AMO MIBIDA';
    buttons.style.display = 'none';
});