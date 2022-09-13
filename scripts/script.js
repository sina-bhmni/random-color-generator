let rRange = document.querySelector('#r-range');
let bRange = document.querySelector('#b-range');
let gRange = document.querySelector('#g-range');

let randomBtn = document.querySelector('#random');
let bodyTag = document.querySelector('body');


function changeBackground() {
    let redValue = rRange.value;
    let greenValue = gRange.value;
    let blueValue = bRange.value;

    bodyTag.style.backgroundColor = 'rgb(' + redValue + ',' + greenValue + ',' + blueValue + ')';
}


function randomColor() {
    let randomnumber1 = Math.floor(Math.random() * 255);
    let randomnumber2 = Math.floor(Math.random() * 255);
    let randomnumber3 = Math.floor(Math.random() * 255);

    return [randomnumber1, randomnumber2, randomnumber3]
}


gRange.addEventListener('input', function() {
    changeBackground();

});

rRange.addEventListener('input', function() {
    changeBackground();
});

bRange.addEventListener('input', function() {
    changeBackground();
});


randomBtn.addEventListener('click', function() {
    let colors = randomColor();

    rRange.value = colors[0];
    gRange.value = colors[1];
    bRange.value = colors[2];

    changeBackground();
});