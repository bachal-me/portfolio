// Toggle Icon Navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = ()=> {
    console.log(menuIcon.classList)
    menuIcon.classList.toggle('x-logo');
    navbar.classList.toggle('active')
}
// Scroll section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = ()=> {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 50;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' +id+ ']').classList.add('active');
            })
        };
    });
    // Sticky Navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    // Remove toggle icon and navbar when click on link or (scroll)
    menuIcon.classList.remove('x-logo');
    navbar.classList.remove('active')
};

// Scroll Reveal
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration:2000,
    delay: '200'
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, portfolio-box, .contact form', {origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'left' });

// Typed JS
const typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'Python Programmer','SEO Expert'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});