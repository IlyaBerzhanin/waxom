'user strict';

const headerBlock = document.querySelector('.header-block')
let scroll = 0

window.addEventListener('scroll', function() {
    let currentPos = window.pageYOffset
    
    if(currentPos > scroll) {
        headerBlock.classList.add('header-hidden')
    }
    else {
        headerBlock.classList.remove('header-hidden')
        headerBlock.classList.add('header-active')
        if(currentPos === 0) {
            headerBlock.classList.remove('header-active')
        }
    }

    scroll = currentPos
})
'use strict';

const videoBlock = document.querySelector('.video-block')
const video = document.querySelector('.video')
const partnersBlock = document.querySelector('.partnership-block')

window.addEventListener('scroll',  function() {
   // let scrl = window.pageYOffset
   //let videoHeight = videoBlock.getBoundingClientRect().height
    let videoY = videoBlock.getBoundingClientRect().top
    
    video.style.backgroundPositionY = `${videoY / 10}px`

    let partnersBlockY = partnersBlock.getBoundingClientRect().top
    partnersBlock.style.backgroundPositionY =  `${partnersBlockY / 2}px`
   
})


"use strict";

const works = document.querySelectorAll(".work");
const tagsBlock = document.querySelector(".portfolio-tags-block");
const worksContainer = document.querySelector(".portfolio-block__works");

let relocateX;
let relocateY;

tagsBlock.addEventListener("click", (e) => {
  let tag = e.target;
  if(tag.classList.contains('tag__link')) {
    removeSelectedTags()
    selectClickedTag(tag)
    
    for (i = 0; i < works.length; i++) {
      works[i].classList.remove('hidden-work')
      if (
        tag.innerText === works[i].dataset.type ||
        tag.innerText === works[i].dataset.subtype
      ) {
        console.log(works[i]);
        // if(tag.innerText === 'Web Design') {
        //   calcAncMove(works[i-1], works[i])
        // }

        // else if(tag.innerText === 'Mobile App') {
        //   calcAncMove(works[0], works[3])
        //   calcAncMove(works[1], works[5])
       
        // }

        // else if(tag.innerText === 'Illustration') {
        //   calcAncMove(works[1], works[5])
          
        // }
      } 
      
      else if (tag.innerText === "All") {
       //restoreItems()
       works[i].classList.remove('hidden-work')
      }
  
       else {
        //works[i].style.transform = "scale(0)";
        works[i].classList.add('hidden-work')
      }
    }
  }
});

function calcAncMove(firstElem, secondElem) {
  relocateX = firstElem.getBoundingClientRect().left - secondElem.getBoundingClientRect().left
  relocateY = firstElem.getBoundingClientRect().top - secondElem.getBoundingClientRect().top
  secondElem.style.transform = `translate(${relocateX}px, ${relocateY}px)`
}

function selectClickedTag(el) {
  el.classList.add('active-tag')
}

function removeSelectedTags() {
  let tags = document.querySelectorAll('.tag__link')
  tags.forEach(t => {
    t.classList.remove('active-tag')
  })
}

function restoreItems() {
  works.forEach(work => {
    work.style.transform = 'scale(1)'
  })
}
"use strict";

const counters = document.querySelectorAll(".achievement__counter");
const countersBlock = document.querySelector(".partnership-block");

function addPoint(el, time, step) {
  let limit = +el.innerText;
  let point = 0;
  let t = Math.round(time / (limit / step));
  let interval = setInterval(() => {
    point += step;
    el.innerText = point;
    if (point >= limit) {
      el.innerText = limit;
      clearInterval(interval);
    }
  }, t);
}

function initializeCounters() {
  addPoint(counters[0], 4000, 50);
  addPoint(counters[1], 4000, 3);
  addPoint(counters[2], 4000, 20);
  addPoint(counters[3], 4000, 10);
  addPoint(counters[4], 4000, 5);
}

window.addEventListener('scroll', function onScroll() {
    if(window.pageYOffset > countersBlock.offsetTop * 0.68) {
        this.removeEventListener('scroll', onScroll)
        initializeCounters()        
    }
})

'use strict';

const partners = document.querySelectorAll('.partner-logo')

partners.forEach(partner => {
    partner.classList.add('slider')
})

'use strict';

const slides = document.querySelectorAll('.slide')
const prevButton = document.querySelector('.previous-button')
const nextButton = document.querySelector('.next-button')

const preTitle = document.querySelector('.slide-content__pre-title')
const title = document.querySelector('.slide-content__title')
const description = document.querySelector('.slide-content__description')
const contentButton = document.querySelector('.content-button')
const textArray = [preTitle, title, description, contentButton]

const sliderTagsBlock = document.querySelector('.slider-tags-block')
const sliderTags = document.querySelectorAll('.slider-tag')

let i = 0
initializeHomeSlider()

function initializeHomeSlider() {

    prevButton.addEventListener('click', () => {
        textArray.forEach(item => {
           item.classList.remove('showed-content')
        })
       slides[i].addEventListener('transitionend', () => {
        if(!title.classList.contains('showed-content')) {
            textArray.forEach(el => {
                el.classList.add('showed-content')
            })
        }
       })

        slides[i].classList.remove('showed-slide')
        sliderTags[i].classList.remove('active-slider-tag')
        i--
        if(i < 0) {
            i = slides.length - 1
        }
        slides[i].classList.add('showed-slide')
        sliderTags[i].classList.add('active-slider-tag')
    })

    nextButton.addEventListener('click', () => {
        textArray.forEach(item => {
            item.classList.remove('showed-content')
         })
        slides[i].addEventListener('transitionend', () => {
         if(!title.classList.contains('showed-content')) {
             textArray.forEach(el => {
                 el.classList.add('showed-content')
             })
         }
        })

        slides[i].classList.remove('showed-slide')
        sliderTags[i].classList.remove('active-slider-tag')
        i++
        if(i > slides.length - 1) {
            i = 0
        }
        slides[i].classList.add('showed-slide')
        sliderTags[i].classList.add('active-slider-tag')
    })

    slideWithOrderTags()
}

function slideWithOrderTags() {
    sliderTagsBlock.addEventListener('click', (e) => {
        for(let k = 0; k < slides.length; k++ ) {
            if(e.target.classList.contains('slider-tag')) {
                slides[k].classList.remove('showed-slide')
                sliderTags[k].classList.remove('active-slider-tag')
                textArray.forEach(el => {
                    el.classList.remove('showed-content')
                })
                slides[i].addEventListener('transitionend', () => {
                    if(!title.classList.contains('showed-content')) {
                        textArray.forEach(el => {
                            el.classList.add('showed-content')
                        })
                    }
                   })
                e.target.classList.add('active-slider-tag')
                if(slides[k].dataset.order === e.target.dataset.order) {
                    slides[k].classList.add('showed-slide')
                    i = k
                }
            }
        }
    })
}   

'use strict';

const sideBar = document.querySelector('.side-bar')
const burgerButton = document.querySelector('.burger-button')
const sideBarCloseButton = document.querySelector('.close-button')

initializeSideBar()

function initializeSideBar() {
    burgerButton.addEventListener('click', () => {
        sideBar.classList.add('opened-bar')
    })

    sideBar.addEventListener('click', (e) => {
        if(e.target.classList.contains('item__link') ||
        e.target.classList.contains('close-button')) {
            sideBar.classList.remove('opened-bar')
        }
    })

    document.querySelector('main').addEventListener('click', () => {
        sideBar.classList.remove('opened-bar')
    })
}

