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



