let master = gsap.timeline()

    let tl = gsap.timeline({onComplete:intro})
        .from(".w4",{x:400, },)
        .from(".w4",{opacity:0, duration:1.5},"<")
        .from(".w3",{x:400, ease:"back"},"<1")
        .from(".w3",{opacity:0, duration:1.5},"<")
        .from(".w2",{x:400, ease:"back"},"<1")
        .from(".w2",{opacity:0, duration:1.5},"<")
        .from(".w1",{x:400, ease:"back"},"<1")
        .from(".w1",{opacity:0, duration:1.5},"<")

function intro() {
    let scatter = gsap.timeline({scrollTrigger:{
        trigger:".word",
        markers:false,
        start:"top",
        end:"bottom",
        scrub: true,
        pin: true,
    }})
        .set(".w1",{x:0,} )
        .set(".w2",{x:0,} )
        .set(".w3",{x:0,} )
        .set(".w4",{x:0,} )
        .to(".w1",{y:-400, scale:4})
        .to(".w2",{x:400, scale:4},"<")
        .to(".w3",{y:410, scale:4},"<")
        .to(".w4",{y:-400, scale:4},"<")
        .to(".w1",{y:-3000, x:-4000, scale:30, duration:2})
        .to(".w2", {y:-300, x:2400, scale:30, duration:2},"<")
        .to(".w3", {y:3000, x:900, scale:30, duration:2},"<")
        .to(".w4", {y:-3000, x:500, scale:30, duration:2},"<")
        .to(".bg-color",{opacity:1, duration:1})

    let paperPlane = gsap.timeline({scrollTrigger: {
            trigger: ".animation",
            markers: false,
            start: "top",
            end: "bottom",
            scrub: true,
            pin: true,
            
        }})
        .to("#paperplane", {
            motionPath: {
                path: "#path",
                align: "#path",
                alignOrigin: [0.5, 0.5],
                autoRotate: true,
                transformOrigin: "50% 50%",
            },
            duration: 5,
            ease: "power1.inOut",
            scale: 0
        });

    let article = gsap.timeline({scrollTrigger: {
            trigger: "#article",
            markers: false,
            start: "top 50%",
            end: "bottom 75%",
            scrub: true
        }})

        .from(".flex-row:first-child > .pic-mrgn ", { 
            x:200,
            opacity: 0,
            duration: 1,
            ease: "power3.out",  
        })
        .from(".flex-row:first-child > .mrgn ", { 
            x:-200,
            opacity: 0,
            duration: 1,
            ease: "power3.out",  
        }, "<")
        .from(".flex-row:nth-child(2) > .pic-mrgn ", { 
            x:-200,
            opacity: 0,
            duration: 1,
            ease: "power1.Out",  
        })
        .from(".flex-row:nth-child(2) > .mrgn ", { 
            x:200,
            opacity: 0,
            duration: 1,
            ease: "power1.Out",  
        }, "<")
        .from(".flex-row:nth-child(3) > .pic-mrgn ", { 
            x:200,
            opacity: 0,
            duration: 1,
            ease: "power2.Out",  
        })
        .from(".flex-row:nth-child(3) > .mrgn ", { 
            x:-200,
            opacity: 0,
            duration: 1,
            ease: "power2.Out",  
        }, "<")
        .from(".flex-row:last-child > .pic-mrgn ", { 
            x:-200,
            opacity: 0,
            duration: 1,
            ease: "power3.Out",  
        })
        .from(".flex-row:last-child > .mrgn ", { 
            x:200,
            opacity: 0,
            duration: 1,
            ease: "power3.Out",  
        }, "<");

    let footer = gsap.timeline({scrollTrigger: {
        trigger: "#woo",
        markers: false,
        start: "top 75%",
        end: "bottom 75%",
        
    }})
        .to("#woo", { 
            scale: 4,
            duration: 1,
            ease: "power3.out",
            repeat: -1 
        });

}
    master.add(navBtn)
          .add(tl)
          .add(scatter)
          .add(paperPlane)


        





   