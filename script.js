var tl = gsap.timeline()
tl.to("#full",{
    right:0,
    deuration:0.8,
})

tl.from("#full h4",{
    x:150,
    opacity:0,
    duration:0.7,
    stagger:0.28,
})
tl.from("#full i",{
    opacity:0,
}