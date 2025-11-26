var menu = document.querySelector("#nav i")
var cross = document.querySelector("#full i")


var tl = gsap.timeline();

tl.to("#full",{
    right:0,
    duration:0.7,
})

tl.from("#full h4",{
    x:150,
    opacity:0,
    duration:0.7,
    stagger:0.20,
})
tl.from("#full i",{
    opacity:0,
})

tl.pause()

menu.addEventListener("click",()=>{
    tl.play()
})
cross.addEventListener("click",()=>{
    tl.reverse()
})

document.querySelector("#left").addEventListener("click",()=>{
    tl.reverse()
})

gsap.from("#nav",{
    y:-100,
    opacity:0,
    duration:2,
    ease:"easeInOut",
    delay :0.5,
})

var cursor = document.querySelector("#cursor");
cursor.style.opacity = 0;

document.addEventListener("mousemove", (dets) => {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: 0.6,
        ease: "power3.out",
    });

    gsap.to(cursor, {
        opacity: 1,
        duration: 0.6
    });
});


document.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
        opacity: 0,
        duration: 0.6,
        ease: "power3.out"
    });
});
