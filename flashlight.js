const light = document.getElementById('light');
const roomPosition = { 
    'top': document.getElementById('darkness').offsetTop,
    'left': document.getElementById('darkness').offsetLeft
};

const topMargin = roomPosition.top + (window.innerHeight * Math.random());
const position = {
    left:  Math.random() * roomPosition.left,
    top: topMargin + 150 < window.innerHeight ? topMargin : topMargin - 350
};

function update(e) {

    var x = ( e.clientX - 150) || (e.touches[0].clientX - 150);
    var y = (e.clientY - 150) || (e.touches[0].clientY - 150);

    light.style.left = x + "px";
    light.style.top = y + "px";

}

document.addEventListener('mousemove', update);
document.addEventListener('touchmove', update);
  