//Get the button:
mybutton = document.getElementById("scrollUp");

function scrollFunction() {
  if (
    document.body.scrollTop > sticky ||
    document.documentElement.scrollTop > sticky
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Functional Sticky Navbar
window.onscroll = function () {
  myFunction();
  scrollFunction();
};

var navbar = document.querySelector("nav");
var services = document.querySelector("#features");
var sticky = services.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

$(document).ready(function () {
  // Preloader
  document.querySelector(".preloader").classList.add("opacity-0");
  setTimeout(function () {
    document.querySelector(".preloader").style.display = "none";
  }, 1000);

  //   Nice Select Initialization
  $("select").niceSelect();
});

// Navbar Open Function on Mobile Menu
function openNav() {
  $("#myNav").css("width", "100%");
}

// Navbar Close Function on Mobile Menu
function closeNav() {
  $("#myNav").css("width", "0");
}
document.addEventListener("DOMContentLoaded", function () {
  // Select all buttons with the specific link
  const appStoreButtons = document.querySelectorAll("a[href='#download-appstore']");
  const modal = document.getElementById("popupModal");
  const closePopupButton = document.getElementById("closePopup");

  // Attach click event to all buttons
  appStoreButtons.forEach(function(button) {
    button.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent immediate navigation
      modal.style.display = "block";
    });
  });

  // Close the modal on button click
  closePopupButton.addEventListener("click", function () {
    modal.style.display = "none";
    window.location.href = "https://apps.apple.com/us/app/puff-tracker/id6482973435";
  });

  // Close the modal if the user clicks outside of it
  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      window.location.href = "https://apps.apple.com/us/app/puff-tracker/id6482973435";
    }
  });
});
