const nav = document.querySelector('.nav');
const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
    nav.classList.toggle("nav--open");
    burger.classList.toggle('burger--open');
})

nav.addEventListener('click', () => {
    nav.classList.remove("nav--open");
    burger.classList.remove('burger--open');
})

$(document).on("scroll", function () {
    const scrollValue = $(window).scrollTop();
    const halfvh = $(window).height() / 2;
    const omnie = $("#omnie").offset().top - halfvh;
    const portfolio = $("#portfolio").offset().top - halfvh;
    const kontakt = $("#kontakt").offset().top - $(window).height();

    if (scrollValue < omnie) {
        $("menu li").removeClass("active");
    } else if (scrollValue < portfolio) {
        $("menu li").not("menu li:nth-child(1)").removeClass("active");
        $("menu li:nth-child(1)").addClass("active");
    } else if (scrollValue < kontakt) {
        $("menu li").not("menu li:nth-child(2)").removeClass("active");
        $("menu li:nth-child(2)").addClass("active");
    } else {
        $("menu li").not("menu li:nth-child(3)").removeClass("active");
        $("menu li:nth-child(3)").addClass("active");
    }
})

const filterContainer = document.querySelector(".gallery-filter");
const galleryItems = document.querySelectorAll(".gallery-item");

filterContainer.addEventListener("click", (event) =>{
  if(event.target.classList.contains("filter-item")){
    filterContainer.querySelector(".active").classList.remove("active");
    event.target.classList.add("active");
    const filterValue = event.target.getAttribute("data-filter");
    galleryItems.forEach((item) =>{
      if(item.classList.contains(filterValue) || filterValue === 'all'){
        item.classList.remove("hide");
        item.classList.add("show");
      }
      else{
        item.classList.remove("show");
        item.classList.add("hide");
      }
    });
  }
});

document.getElementById("year").innerHTML = new Date().getFullYear();