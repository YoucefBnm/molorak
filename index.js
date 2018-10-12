window.addEventListener('DOMContentLoaded', slider);
function slider() {
  const slides = [];
  slides[0] = {
    img: "./img/head-img-1.jpg",
    heading: "change is good",
    txt: "same stuff different day, routine anxiety stress etc... you're about to explode, been there sir. keep everything behind and pack your stuff we'll make you feel good again."
  };
  slides[1] = {
    img: "./img/head-img-2.jpg",
    heading: "wait for what",
    txt: "they told you there is seven wonders!! nope with us you'll discover a lot more, they devide the year in four seasons !! we devide the day in four season."
  };
  slides[2] = {
    img: "./img/head-img-3.jpg",
    heading: "been there",
    txt: "you think travel is boring? you've tried it before, the service did not match the ad, not with us our most proffesional modest guides who will take to breathtaking places."
  };

  let index = 0;
  const slide = document.querySelector('.slider');
  const timer = window.setInterval(next, 4000);
  const bg = document.querySelector('.slider__img');
  const title = document.querySelector('.slider__heading');
  const text = document.querySelector('.slider__txt');
  const indics = document.getElementsByClassName('slider__indic');

  function init() {
    timer;
    slide.addEventListener('mouseenter', stop);
    slide.addEventListener('mouseleave', resume);

    changeSlide(index);
  }
  function resume() {
    slider();
    console.log('mouse out');
  }
  function stop() {
    window.clearInterval(timer);
    console.log('mouse in');
  }
  function changeSlide(){
    bg.src = slides[index].img;
    title.innerHTML = slides[index].heading;
    text.innerHTML = slides[index].txt;

    for (var i = 0; i < indics.length; i++) {
      indics[i].className = indics[i].className.replace(" active", "");
    }
    indics[index].className+= " active";
  }

  function prev() {
    (index <=0) ? index = 3 : index--;
    changeSlide(index);
  }
  function next() {
    (index>= (slides.length -1)) ? index = 0 : index++;
    changeSlide(index);
  }
  return init();
}

// NAV
const button = document.querySelector('.nav__btn');
const navBar = document.getElementById('navbar');
const navList = document.querySelector('.nav__navigation');
const navItems = document.querySelectorAll('.nav__item');
let showNav = false;
let currentHeight = pageYOffset;

button.addEventListener('click', toggleNav);
function toggleNav() {
  if (!showNav) {
    button.classList.add('close');
    navBar.classList.add('show');
    navList.classList.add('close');
    navItems.forEach(item => item.classList.add('show'));
    showNav= true;
  }else{
    button.classList.remove('close');
    navBar.classList.remove('show');
    navList.classList.remove('close');
    navItems.forEach(item => item.classList.remove('show'));
    showNav = false;
  }
}

window.onscroll = function(){
  let currentScrollPos = window.pageYOffset;
  if (currentHeight < currentScrollPos) {
    navBar.style.backgroundColor = 'rgba(0,0,0, .7)';
    navBar.style.height = "8rem";
  }else if (currentScrollPos === 0) {
    navBar.style.backgroundColor = "transparent";
  }
  currentHeight = currentScrollPos;
}
//ACCORDION
const acrdItem = document.getElementsByClassName('acrd__item');
const acrdHeader = document.getElementsByClassName('acrd__btn');
for (var i = 0; i < acrdHeader.length; i++) {
  acrdHeader[i].addEventListener('click', toggleItem, false);
}
function toggleItem() {
  const itemClass = this.parentNode.className;
  for (var i = 0; i < acrdItem.length; i++) {
    acrdItem[i].className= 'acrd__item close';
  }
  if (itemClass == 'acrd__item close') {
    this.parentNode.className = "acrd__item open";
  }
}

//REVIEWS
randomRobot();
function randomRobot(){
  const base = "https://robohash.org";
  document.getElementById('robot-img-1').src = base + '/' + Math.random();
  document.getElementById('robot-img-2').src = base + '/' + Math.random();
}
