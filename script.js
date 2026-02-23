const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});


function circleMouseFolloer(){
window.addEventListener("mousemove", function(data){
 document.querySelector("#minicircle").style.transform = `translate(${data.clientX}px, ${data.clientY}px)`;

 })
}

function firstPageAnim(){
 
  let tl = gsap.timeline();

  
  tl.from("#nav", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  })

     .to(".boundingelem", {
      y: 0,
      ease: Expo.easeInOut,
      duration: 2,
      delay: -1,
      stagger: 0.2,
    })
    .from("#links", {
      y: -10,
      opacity: 0,
      duration: 1.5,
      delay: -1,
      ease: Expo.easeInOut,
    });
}

circleMouseFolloer()
firstPageAnim()




document.querySelectorAll(".elem").forEach(function (elem) {
  var rotate = 0;
  var diffrot = 0;

  elem.addEventListener("mouseleave", function (details) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });

  elem.addEventListener("mousemove", function (details) {
    var diff = details.clientY - elem.getBoundingClientRect().top;
    diffrot = details.clientX - rotate;
    rotate = details.clientX;
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      // duration: 0.8,
      top: diff,
      left: details.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
    });
  });
});



// Big circle class

const circle = document.querySelectorAll("#minicircle");

document.querySelectorAll(".elem") .forEach(function(elem){
  elem.addEventListener("mouseenter", function(){
    circle.classList.add("grow");
    circle.innerHTML = "<span>VIEW</span>";  
  });

  elem.addEventListener("mouseleave", function(){
    circle.classList.remove("grow");
    circle.innerHTML = "";
  });
});

