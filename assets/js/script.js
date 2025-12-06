// document.addEventListener("DOMContentLoaded", () => {
//   // Hover dropdowns (desktop only)
//   const dropdowns = document.querySelectorAll(".nav-item.dropdown");
//   dropdowns.forEach((dropdown) => {
//     const toggle = dropdown.querySelector(".dropdown-toggle");
//     const bsDropdown = new bootstrap.Dropdown(toggle, { autoClose: true });

//     dropdown.addEventListener("mouseenter", () => {
//       if (window.innerWidth > 991) bsDropdown.show();
//     });
//     dropdown.addEventListener("mouseleave", () => {
//       if (window.innerWidth > 991) bsDropdown.hide();
//     });

//     // Mobile behavior: one tap opens dropdown, second tap navigates
//     toggle.addEventListener("click", (e) => {
//       if (window.innerWidth < 992) {
//         e.stopPropagation(); // stop Bootstrap collapse
//         const isActive = dropdown.classList.contains("show");

//         if (isActive) {
//           // Second tap: go to about.html, then close menu
//           const href = toggle.getAttribute("href");
//           if (href) {
//             const navbarCollapse = document.querySelector(".navbar-collapse");
//             const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
//             if (bsCollapse) bsCollapse.hide();
//             window.location.href = href;
//           }
//         } else {
//           // First tap: open dropdown only
//           e.preventDefault();
//           bsDropdown.show();
//         }
//       }
//     });
//   });

//   // Normal links: close menu when clicked
//   const navLinks = document.querySelectorAll(
//     ".navbar-collapse .nav-link:not(.dropdown-toggle), .dropdown-menu .dropdown-item"
//   );
//   const navbarCollapse = document.querySelector(".navbar-collapse");

//   navLinks.forEach((link) => {
//     link.addEventListener("click", () => {
//       if (window.innerWidth < 992) {
//         const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
//         if (bsCollapse) bsCollapse.hide();
//       }
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  let aboutOpen = false; // track dropdown state manually

  // Handle About Us click behavior
  const aboutDropdown = document.querySelector("#aboutDropdown");
  const navbarCollapse = document.querySelector(".navbar-collapse");
  const bsDropdown = new bootstrap.Dropdown(aboutDropdown, { autoClose: true });

  aboutDropdown.addEventListener("click", (e) => {
    if (window.innerWidth < 992) {
      e.stopPropagation();

      if (!aboutOpen) {
        // First tap -> open dropdown
        e.preventDefault();
        bsDropdown.show();
        aboutOpen = true;
      } else {
        // Second tap -> navigate to About page
        aboutOpen = false;
        bsDropdown.hide();

        const href = aboutDropdown.getAttribute("href");
        if (href) {
          const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
          if (bsCollapse) bsCollapse.hide();
          window.location.href = href;
        }
      }
    }
  });

  // Desktop hover behavior
  const dropdownParent = aboutDropdown.closest(".nav-item.dropdown");
  dropdownParent.addEventListener("mouseenter", () => {
    if (window.innerWidth > 991) bsDropdown.show();
  });
  dropdownParent.addEventListener("mouseleave", () => {
    if (window.innerWidth > 991) bsDropdown.hide();
  });

  // Close navbar for all other links
  const navLinks = document.querySelectorAll(
    ".navbar-collapse .nav-link:not(#aboutDropdown), .dropdown-menu .dropdown-item"
  );
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 992) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) bsCollapse.hide();
      }
    });
  });
});
