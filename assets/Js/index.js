tailwind.config = {
    theme: {
      extend: {
        colors: {
          'apg-gray': '#666666',
          'primary' : '#0C79BE'
        },
        screens: {
          '2xl': '1560px', 
          'xl': '1280px', 
          'max-md': { max: '767px'},
          'max-xs': { max: '520px'}
        },
      }
    }
  }

  function toggleSearchBar() {
    const searchBar = document.getElementById('search-bar');
    const searchIcon = document.getElementById('search-icon');
    const closeIcon = document.getElementById('close-icon');
    const screenWidth = window.innerWidth;
  
    if (screenWidth < 375) {
      searchBar.classList.toggle('w-0');
      searchBar.classList.toggle('w-[160px]');
    } else {
      searchBar.classList.toggle('w-0');
      searchBar.classList.toggle('w-[200px]');
    }
  
    searchIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
  }
  
  document.addEventListener('click', function(event) {
    const searchContainer = document.getElementById('search-container');
    const searchBar = document.getElementById('search-bar');
    
    if (!searchContainer.contains(event.target)) {
      if (!searchBar.classList.contains('w-0')) {
        toggleSearchBar();
      }
    }
  });

  const btn = document.querySelector("button.mobile-menu-button");
  const menu = document.querySelector(".mobile-menu");
  const menuIcon = document.getElementById("menu-icon");
  const crossIcon = document.getElementById("cross-icon");
  const body = document.body;
  
  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  
    menuIcon.classList.toggle("hidden");
    crossIcon.classList.toggle("hidden");
    body.classList.toggle("overflow-hidden");
  });

  
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    center: true,
    autoplay: true, 
    autoplayTimeout: 3000,
    autoplaySpeed: 1000,
    autoplayHoverPause: true, 
    responsive: {
      0: {
        items: 1.2,
        margin: 16,
      },
      768: {
        items: 1.5, 
        margin: 24,
      },
      1024: {
        items: 2.25, 
        margin: 50
      },
    },
  });
});

  
