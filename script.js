//below is for the fade animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements6 = document.querySelectorAll('.pcb-back')
const hiddenElements5 = document.querySelectorAll('.picture-border')
const hiddenElements4 = document.querySelectorAll('.footer');
const hiddenElements3 = document.querySelectorAll('.projects');
const hiddenElements2 = document.querySelectorAll('.AboutMe');
const hiddenElements = document.querySelectorAll('.experience');
hiddenElements.forEach((el) => observer.observe(el));
hiddenElements2.forEach((el) => observer.observe(el));
hiddenElements3.forEach((el) => observer.observe(el));
hiddenElements4.forEach((el) => observer.observe(el));
hiddenElements5.forEach((el) => observer.observe(el));
hiddenElements6.forEach((el) => observer.observe(el));
//

//below is for the light/dark mode
let lightmode = localStorage.getItem('lightmode');
const NnD = document.querySelector('.NnD');

const enableLightmode = () => {
    document.body.classList.add('lightmode');
    localStorage.setItem('lightmode', 'active');
};

const disableLightmode = () => {
    document.body.classList.remove('lightmode');
    localStorage.setItem('lightmode', 'inactive');
};

if (lightmode === "active") enableLightmode();

NnD.addEventListener("click", () => {
    lightmode = localStorage.getItem('lightmode');
    lightmode !== "active" ? enableLightmode() : disableLightmode()
});

//


//below is attempting to lower opacity for main on click
//const x = document.querySelector()
//main {opacity:0.5;}

//below is to get the typing animation

function startTypingSequence() {
  new Typed(".typed-h3", {
    strings: ["Hi, my name is"],
    typeSpeed: 70,
    backSpeed: 70,
    showCursor: false,
    onComplete: () => {
      new Typed(".typed-h1", {
        strings: ["Marcelo Deras"],
        typeSpeed: 70,
        backSpeed: 70,
        showCursor: false,
        onComplete: () => {
          new Typed(".typed-h2", {
            strings: ["Electrical Engineer"],
            typeSpeed: 70,
            backSpeed: 70,
            showCursor: false,
            onComplete: () => {
              new Typed(".typed-h5", {
                strings: [
                  "I'm an electrical engineering student studying at Cornell University."
                ],
                typeSpeed: 30,
                backSpeed: 30,
                showCursor: false,
                backDelay: 2000,
                onComplete: () => {
                  backspaceReverse();
                }
              });
            }
          });
        }
      });
    }
  });
}

function backspaceReverse() {
  setTimeout(() => {
    new Typed(".typed-h5", {
      strings: [""],
      typeSpeed: 0,
      backSpeed: 30,
      showCursor: false,
      onComplete: () => {
        setTimeout(() => {
          new Typed(".typed-h2", {
            strings: [""],
            typeSpeed: 0,
            backSpeed: 70,
            showCursor: false,
            onComplete: () => {
              setTimeout(() => {
                new Typed(".typed-h1", {
                  strings: [""],
                  typeSpeed: 0,
                  backSpeed: 70,
                  showCursor: false,
                  onComplete: () => {
                    setTimeout(() => {
                      new Typed(".typed-h3", {
                        strings: [""],
                        typeSpeed: 0,
                        backSpeed: 70,
                        showCursor: false,
                        onComplete: () => {
                          setTimeout(startTypingSequence, 500);
                        }
                      });
                    }, 250);
                  }
                });
              }, 250);
            }
          });
        }, 250);
      }
    });
  }, 250);
}

document.addEventListener("DOMContentLoaded", startTypingSequence);


/*
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.create({
    trigger: ".experience-back",
    start: "top top",
    end: "+=100%",
    pin: true,
    scrub: true,
  });



      <!--

  let isScrollingAllowed = true;

  const wrapper = document.querySelector('.pcb-back');

  wrapper.addEventListener('wheel', (e) => {
    if (!isScrollingAllowed) {
      e.preventDefault();
      return;
    }

    isScrollingAllowed = false;
    setTimeout(() => {
      isScrollingAllowed = true;
    }, 5000); // 5-second delay between scrolls
  }, { passive: false });
*/

