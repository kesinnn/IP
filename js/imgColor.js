var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// Load images
var imgGray = new Image();
imgGray.src = 'resources/assets/characterBlank.png';
var imgColor = new Image();
imgColor.src = 'resources/assets/characterBlank.png';

imgGray.onload = function() {
    ctx.drawImage(imgGray, 0, 0, canvas.width, canvas.height);
}

canvas.onmousemove = function(e) {
    var rect = canvas.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    ctx.globalCompositeOperation = 'destination-out';
    ctx.arc(x, y, 50, 0, Math.PI * 2, false);
    ctx.fill();
};

imgColor.onload = function() {
    ctx.drawImage(imgColor, 0, 0, canvas.width, canvas.height);
}

