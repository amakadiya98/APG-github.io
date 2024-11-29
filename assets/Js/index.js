tailwind.config = {
  theme: {
    extend: {
      colors: {
        'apg-gray': '#666666',
        'primary': '#0C79BE'
      },
      screens: {
        '2xl': '1560px',
        'xl': '1280px',
        'max-md': { max: '767px' },
        'max-xs': { max: '520px' }
      },
    }
  }
}

// searchbar 

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

document.addEventListener('click', function (event) {
  const searchContainer = document.getElementById('search-container');
  const searchBar = document.getElementById('search-bar');

  if (!searchContainer.contains(event.target)) {
    if (!searchBar.classList.contains('w-0')) {
      toggleSearchBar();
    }
  }
});

// header responsive 
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");
const menuIcon = document.getElementById("menu-icon");
const crossIcon = document.getElementById("cross-icon");
const body = document.body;
const menuLinks = document.querySelectorAll(".mobile-menu a");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");

  menuIcon.classList.toggle("hidden");
  crossIcon.classList.toggle("hidden");
  body.classList.toggle("overflow-hidden");
});

menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.add("hidden");
    menuIcon.classList.remove("hidden");
    crossIcon.classList.add("hidden");
    body.classList.remove("overflow-hidden");

    menuLinks.forEach(item => {
      item.classList.remove("active", "underline");
    });

    link.classList.add("active", "underline");
  });
});

// nested dropdown 

function rotateChevron(detailId, chevronWrapperId) {
  const detailsElement = document.getElementById(detailId);
  const chevronWrapperElement = document.getElementById(chevronWrapperId);

  detailsElement.addEventListener('toggle', function () {
    if (detailsElement.open) {
      chevronWrapperElement.classList.add('rotate-90');
    } else {
      chevronWrapperElement.classList.remove('rotate-90');
    }
  });
}

rotateChevron('mainDropdown', 'chevronWrapper1');
rotateChevron('nestedDropdown1', 'chevronWrapper2');
rotateChevron('nestedDropdown2', 'chevronWrapper3');
rotateChevron('nestedDropdown3', 'chevronWrapper4');
rotateChevron('nestedDropdown4', 'chevronWrapper5');
rotateChevron('nestedDropdown5', 'chevronWrapper6');
rotateChevron('mainDropdown1', 'chevronwrapper1');
rotateChevron('nesteddropdown1', 'chevronwrapper2');
rotateChevron('nesteddropdown2', 'chevronwrapper3');
rotateChevron('nesteddropdown3', 'chevronwrapper4');
rotateChevron('nesteddropdown4', 'chevronwrapper5');
rotateChevron('nesteddropdown5', 'chevronwrapper6');


document.getElementById('mainDropdown').addEventListener('toggle', function () {
  if (this.open) {
    document.querySelectorAll('details[id^="nestedDropdown"]').forEach(function (nested) {
      nested.removeAttribute('open');
    });
  }
});

document.addEventListener('click', function (event) {
  const mainDropdown = document.getElementById('mainDropdown');
  const MainDropDownMobile = document.getElementById('mainDropdown1');
  const nestedDropdowns = document.querySelectorAll('details[id^="nesteddropdown"]');

  if (!mainDropdown.contains(event.target)) {
    mainDropdown.removeAttribute('open');
  }

  if (!MainDropDownMobile.contains(event.target)) {
    MainDropDownMobile.removeAttribute('open');
  }

  nestedDropdowns.forEach(function (nestedDropdown) {
    if (!nestedDropdown.contains(event.target)) {
      nestedDropdown.removeAttribute('open');
    }
  });

});


// carousel 
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    center: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplaySpeed: 2000,
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
        items: 2.5,
        margin: 28
      },
      1280: {
        items: 3.4,
        margin: 32
      }
    },
  });
});





