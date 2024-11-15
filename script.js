document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("back-to-top").style.display="none";
  const navItems = document.querySelectorAll(".nav-item");
  let currentNavItem;
  navItems.forEach(item => {
    if(item.getAttribute("href").includes(window.location.pathname)){
        currentNavItem = item;
    }
  });

  currentNavItem.classList.add("active-link");
});

document.addEventListener("scroll", (e)=>{
  e.preventDefault();
  if(window.scrollY > 0){
    document.getElementById("back-to-top").style.display="flex";
  }else{
    document.getElementById("back-to-top").style.display="none";
  }
});

document.getElementById("back-to-top").addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo(0, 0);
})


