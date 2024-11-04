document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".nav-item");
  let currentNavItem;
  navItems.forEach(item => {
    if(item.getAttribute("href").includes(window.location.pathname)){
        currentNavItem = item;
    }
  });

  currentNavItem.classList.add("active-link");
});
