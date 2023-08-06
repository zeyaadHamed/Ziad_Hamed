
let menuicon = document.querySelector('#menu-icon');
let navbar = document.getElementById('navbarr');

menuicon.onclick = () => {
    navbar.classList.toggle('active');
}


// Scroll section

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a')



window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 50 ;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top <offset + height) {
            // active nav bar
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active  section
            sec.classList.add('show-animate');
        }
        else {
            sec.classList.remove('show-animate');
        }

});

    let header =  document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 50);

    // Remove Toggler  WHen SCroll

    navbar.classList.remove('active');

    //animition  scroll
    
    let footer = document.querySelector('footer');

    let footerHeight = footer.offsetHeight;
    
    if (this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight - footerHeight) {
        footer.classList.add('show-animate');
    } else {
        footer.classList.remove('show-animate');
    }
    
    
}