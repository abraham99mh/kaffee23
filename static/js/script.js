
window.sr = ScrollReveal();

sr.reveal('.header-content-left', {
    duration: 2000,
    origin: 'left',
    distance: '300px'
});

sr.reveal('.header-content-right', {
    duration: 2000,
    origin: 'right  ',
    distance: '300px'
});

sr.reveal('.owl-carousel', {
    duration: 2000,
    origin: 'top',
    distance: '300px'
});

sr.reveal('.card1', { duration: 1500 });

sr.reveal('.card2', { duration: 1500 });

sr.reveal('.contacto', {
    duration: 2000,
    origin: 'bottom',
    distance: '300px'
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 5
        }
    }
})