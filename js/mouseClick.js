var images = [
    '../resources/assets/besisi/1.png',
    '../resources/assets/besisi/2.png',
    '../resources/assets/besisi/3.png',
    '../resources/assets/besisi/4.png',
    '../resources/assets/besisi/5.png',
    '../resources/assets/besisi/6.png',
    '../resources/assets/besisi/7.png',
    '../resources/assets/besisi/8.png',
    '../resources/assets/besisi/9.png',
    '../resources/assets/besisi/10.png',
    '../resources/assets/besisi/11.png',
    '../resources/assets/besisi/12.png',
];

var index = 0;

var div = document.getElementById('besisi');

div.addEventListener('click', function (e) {
    e = e || window.event;
    var tag = document.createElement('img');
    tag.src = images[index];
    tag.style.position = 'absolute';
    tag.style.height = '30%';
    //tag.style.width = '100%';
    this.appendChild(tag);

    var rect = this.getBoundingClientRect();
    tag.style.top = (e.pageY - rect.top - window.scrollY - tag.height / 2) + 'px';
    tag.style.left = (e.pageX - rect.left - window.scrollX - tag.width / 2) + 'px';
    
    // Move to the next image, loop back to the first image if we've reached the end.
    index = (index + 1) % images.length;

    // Stop the event propagation.
    e.stopPropagation();
}, false);