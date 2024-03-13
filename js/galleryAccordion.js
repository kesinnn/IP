window.onload = function() {
    var items = document.querySelectorAll('.item');

    items.forEach(function(item) {
        item.addEventListener('mouseover', function() {
            this.classList.add('expanded');
        });

        item.addEventListener('mouseout', function() {
            this.classList.remove('expanded');
        });
    });

    // Only add the event listener to the first item
    items[0].addEventListener('click', function() {
        if (this.classList.contains('expanded')) {
            // Navigate to a different page when the first image is clicked
            window.location.href = '../html/contact.html';
        }
    });
}