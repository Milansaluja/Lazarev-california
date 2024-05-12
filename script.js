// function navAnimation() {
//     let nav = document.querySelector("nav");

//     nav.addEventListener("mouseenter", function () {
//         let tl = gsap.timeline()

//         tl.to("#nav-effect", {
//             height: "25vh"
//         });

//         tl.to(".nav-item h5", {
//             display: "block"
//         });

//         tl.to(".nav-item h5 span", {
//             y: 0,
//             stagger: {
//                 amount: 0.6
//             }
//         });

//     });

//     nav.addEventListener("mouseleave", function () {
//         let tl = gsap.timeline()

//         tl.to(".nav-item h5 span", {
//             Y: 30,
//             stagger: {
//                 amount: 0.2
//             }
//         });

//         tl.to(".nav-item h5", {
//             display: "none",
//             duration: 0.1
//         });

//         tl.to("#nav-effect", {
//             height: 0,
//             duration: 0.2

//         });

//     });

// }
// navAnimation();



function navAnimation() {
    let nav = document.querySelector("nav");

    // Function to handle animations
    function animateNav() {
        let tl = gsap.timeline();
        tl.to("#nav-effect", { height: "25vh" });
        tl.to(".nav-item h5", { display: "block" });
        tl.to(".nav-item h5 span", { y: 0, stagger: { amount: 0.6 } });
    }

    // Function to handle reverse animations
    function reverseAnimateNav() {
        let tl = gsap.timeline();
        tl.to(".nav-item h5 span", { y: 30, stagger: { amount: 0.2 } });
        tl.to(".nav-item h5", { display: "none", duration: 0.1 });
        tl.to("#nav-effect", { height: 0, duration: 0.2 });
    }

    // Check screen width initially and on resize
    function checkScreenWidth() {
        if (window.innerWidth <= 912) {
            nav.removeEventListener("mouseenter", animateNav);
            nav.removeEventListener("mouseleave", reverseAnimateNav);
        } else {
            nav.addEventListener("mouseenter", animateNav);
            nav.addEventListener("mouseleave", reverseAnimateNav);
        }
    }

    // Check screen width initially
    checkScreenWidth();

    // Listen for screen resize
    window.addEventListener("resize", checkScreenWidth);
}

navAnimation();















function page2Animation() {
    let seen = document.querySelectorAll(".right-elem");
    seen.forEach(element => {
        element.addEventListener("mouseenter", () => {
            gsap.to(element.childNodes[3], {
                opacity: 1,
                scale: 1
            });
        });
        element.addEventListener("mouseleave", () => {
            gsap.to(element.childNodes[3], {
                opacity: 0,
                scale: 0
            });
        });
        element.addEventListener("mousemove", (dets) => {
            gsap.to(element.childNodes[3], {
                x: dets.x - element.getBoundingClientRect().x - 50,
                y: dets.y - element.getBoundingClientRect().y - 100
            });
        });

    });
}
page2Animation()

function page3VideoAnimation() {
    let getVideo = document.querySelector(".play-button");
    let videoPlay = document.querySelector("#page3 video");
    let h5tag = document.querySelector(".play-background h5");


    getVideo.addEventListener("click", () => {
        videoPlay.play();
        gsap.to(videoPlay, {
            transform: "scaleX(1) scaleY(1)",
            opacity: 1
        });

        h5tag.style.opacity = 0
    });

    videoPlay.addEventListener("click", () => {
        videoPlay.pause();
        gsap.to(videoPlay, {
            transform: "scaleX(0.7) scaleY(0)",
            opacity: 0
        });
    });
}
page3VideoAnimation()


function page5Animation() {
    let effect = document.querySelectorAll("#page5 .right video");
    effect.forEach(element => {
        element.addEventListener("mouseenter", () => {
            element.style.opacity = 1
            element.play()
        });
    });
    effect.forEach(element => {
        element.addEventListener("mouseleave", () => {
            element.style.opacity = 0
            element.load()
        });
    });
}
 page5Animation()


function page6Animation() {
    let imageEffect = document.querySelectorAll(".image-sec video");
    imageEffect.forEach(element => {
        element.addEventListener("mouseenter", () => {
            element.play()
            element.style.height = "60vh"
            element.style.top = "-18vh"
        });
        element.addEventListener("mouseleave", () => {
            element.currentTime = 0;
            element.pause()
            element.style.height = "37vh"
            element.style.top = 0
        });
    });
}
page6Animation()



let ham = document.getElementById("hamburger");
let t=document.querySelectorAll(".nav-item h5");
let mila = document.querySelector(".nav-inner-items");
let cross = document.querySelector("#cross p");


ham.addEventListener("click", () => {
    ham.style.display = "none";
    cross.style.display = "block";

    let magic = gsap.timeline();
    magic.to(".nav-item h5", { display: "block" });
    magic.to(".nav-item h5 span", { y: 0, stagger: { amount: 0.6 } });

    mila.style.display = "block"
    mila.style.backgroundColor = "#111"
    mila.style.width = "100%"
    mila.style.height = "100vh"

});

cross.addEventListener("click",()=>{
    ham.style.display = "block";
    cross.style.display = "none";
    mila.style.display = "none"

});