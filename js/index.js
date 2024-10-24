// Updated selector
var selector = document.querySelectorAll('.new-p-heading ul li');

// Loop through all list items
selector.forEach(function(item) {
  item.addEventListener('click', function() {
    // Remove 'active' class from all list items
    selector.forEach(function(i) {
      i.classList.remove('active');
    });
    // Add 'active' class to the clicked list item
    this.classList.add('active');
  });
});


// Box filter

document.addEventListener("DOMContentLoaded", function() {
  var listItems = document.querySelectorAll('.new-p-heading li');

  listItems.forEach(function(item) {
      item.addEventListener('click', function() {
          var value = item.getAttribute('data-filter');
          var productBoxes = document.querySelectorAll('.new-product-box');

          if (value === 'all') {
              productBoxes.forEach(function(box) {
                  box.style.display = 'block'; // Show all
              });
          } else {
              productBoxes.forEach(function(box) {
                  if (box.classList.contains(value)) {
                      box.style.display = 'block'; // Show filtered
                  } else {
                      box.style.display = 'none'; // Hide non-filtered
                  }
              });
          }
      });
  });
});

// Simple JavaScript equivalent of your selector
var selector = document.querySelectorAll('.new-p-heading ul li');

