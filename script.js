const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});


function circleMouseFolloer(){
window.addEventListener("mousemove", function(data){
 document.querySelector("#minicircle").style.transform = `translate(${data.clientX}px, ${data.clientY}px)`;

 })
}

circleMouseFolloer()