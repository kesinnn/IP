let lastX, lastY, lastScrolled = 0;;
$(document).on('mousemove', function(e) {
  lastX = e.pageX - 30;
  lastY = e.pageY - 25;
  $('#custom-cursor').css({
    left: e.pageX - 30,
    top: e.pageY - 25,
    pointerEvents: 'none'
  });
});

$(window).scroll(function(event) {
  if (lastScrolled != $(window)
    .scrollTop()) {
    lastY -= lastScrolled;
    lastScrolled = $(window)
      .scrollTop();
    lastY += lastScrolled;
  }
  $('#custom-cursor').css({
    left: lastX,
    top: lastY,
    pointerEvents: 'none'
  });
});

$(document).ready(function() {
    $('#paint').on('mouseenter', function() {
        $('#custom-cursor').css({
            'background-image': 'url("resources/assets/paint.png")',
            'width': '42px', 
            'height': '179px' 
        });
    });

    $('#paint').on('mouseleave', function() {
        $('#custom-cursor').css({
            'background-image': 'url("resources/assets/normal.png")',
            'width': '82px', 
            'height': '151px' 
        });
    });

    // hover
    $('#spiritual').on('mouseenter', function() {
        $('#custom-cursor').css({
            'background-image': 'url("resources/assets/hover.png")',
            'width': '80px', 
            'height': '80px' 
        });
    });

    $('#spiritual').on('mouseleave', function() {
        $('#custom-cursor').css({
            'background-image': 'url("resources/assets/normal.png")',
            'width': '82px', 
            'height': '151px' 
        });
    });

    // besisi
    $('#besisi').on('mouseenter', function() {
        $('#custom-cursor').css({
            'background-image': 'url("resources/assets/clickAnywhere.svg")',
            'width': '200px', 
            'height': '200px' 
        });
    });

    $('#besisi').on('mouseleave', function() {
        $('#custom-cursor').css({
            'background-image': 'url("resources/assets/normal.png")',
            'width': '82px', 
            'height': '151px' 
        });
    });

    // village
    $('#visitVillage').on('mouseenter', function() {
        $('#custom-cursor').css({
            'background-image': 'url("resources/assets/clickAnywhere.svg")',
            'width': '200px', 
            'height': '200px' 
        });
    });

    $('#visitVillage').on('mouseleave', function() {
        $('#custom-cursor').css({
            'background-image': 'url("resources/assets/normal.png")',
            'width': '82px', 
            'height': '151px' 
        });
    });
});
