//  Navigation bar script -----------------------------------------------------------------------------------------

function toggleNavbarMenu() {
  const navbarBurger = document.querySelector('.navbar-burger');
  const navbarMenu = document.querySelector('.navbar-menu');

  navbarBurger.classList.toggle('is-active');
  navbarMenu.classList.toggle('is-active');
}

function toggleDropdown(id) {
  const dropdown = document.getElementById(id + 'Dropdown');
  dropdown.classList.toggle('is-active');
}


// main content script--------------------------------------------------------------------------------------------


document.addEventListener('click', function(event) {
  var dropdowns = document.querySelectorAll('.dropdown');

  // Check if the target element is inside the dropdown
  var isInsideDropdown = false;
  dropdowns.forEach(function(dropdown) {
    if (dropdown.contains(event.target)) {
      isInsideDropdown = true;
    }
  });

  // Hide the dropdown menu if the target element is outside the dropdown
  if (!isInsideDropdown) {
    hideDropdowns();
  }
});

// Function to hide all dropdown menus
function hideDropdowns() {
  var dropdownMenus = document.querySelectorAll('.dropdown-menu');

  dropdownMenus.forEach(function(menu) {
    menu.style.display = 'none';
  });
}

// Function to toggle the visibility of a dropdown menu
function toggleDropdown(button) {
  var dropdownMenu = button.parentNode.nextElementSibling;
  dropdownMenu.style.display = dropdownMenu.style.display === 'none' ? 'block' : 'none';
}


// Show/hide the scroll button based on scroll position
window.addEventListener('scroll', function() {
  var scrollButton = document.getElementById('scrollButton');
  if (window.pageYOffset > 200) {
    scrollButton.style.display = 'block';
  } else {
    scrollButton.style.display = 'none';
  }
});

// -----------------------goto top script start-------------------------------
document.addEventListener("DOMContentLoaded", function() {
  const goUpButton = document.getElementById("go-up-button");

  // Function to toggle the visibility of the "Go Up" button
  function toggleGoUpButtonVisibility() {
    if (window.scrollY > 0) {
      goUpButton.style.display = "block";
    } else {
      goUpButton.style.display = "none";
    }
  }

  // Initial check for button visibility
  toggleGoUpButtonVisibility();

  // Listen for scroll events to update button visibility
  window.addEventListener("scroll", toggleGoUpButtonVisibility);

  // Scroll to top when the button is clicked
  goUpButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});



// -----------------------goto top script end-------------------------------

