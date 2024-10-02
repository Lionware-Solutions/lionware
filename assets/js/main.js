/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '20px',
    duration: 500,
    delay: 100,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 100}); 
sr.reveal('.home__social-icon',{ interval: 100}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 100}); 


// service Web and Service edition! ✅

function cambiarSeccion(seccion) {
    if (seccion === 'web') {
        document.getElementById('titulo').innerText = "Web development";
        document.getElementById('parrafo').innerHTML = `
            <ul>
                            <li>Professional web design</li>
                            <li>24/7 support</li>
                            <li>User and administrator system</li>
                            <li>Inventory management</li>
                            <li>Purchases via whatsapp</li>
                            <li>Shopping cart</li>
                            <li>Dynamic sites</li>
                            <li>Social media integrations</li>
                            <li>Integration with chatbot</li>
                        </ul>`;
        document.getElementById('video').src = "assets/videos/Mamina moda.mp4"; // Cambia la fuente del video aquí
    } else if (seccion === 'edicion') {
        
        document.getElementById('titulo').innerText = "Video editing";
        document.getElementById('parrafo').innerHTML = `
            <ul>
                <li>Advertising</li>
                <li>High quality with visual effects</li>
                <li>Review Post-production</li>
                <li>Custom animations</li>
                <li>Custom Edition</li>
                            <li>Unlimited revisions</li>
                            <li>Animations and effects</li>
                            <li>Social Media Optimization</li>
                            <li>Reels, TikTok, Short, etc</li>
            </ul>`;
        document.getElementById('video').src = "assets/videos/LW..mp4"; // Cambia la fuente del video aquí
    }
}


// Carrusel → our projects

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop:true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 150,
      modifier: 2.5,
      slideShadows: true,
    },
    autoplay:{
  
      delay:3000,
      disableOnInteraction:false,
    }
  
  });


//   Validate Form
function validateForm() {
    let isValid = true;

    // Full Name Validation
    let fullName = document.getElementById('fullName').value;
    if (fullName === "") {
        document.getElementById('nameError').style.display = 'inline';
        isValid = false;
    } else {
        document.getElementById('nameError').style.display = 'none';
    }

    // Email Validation
    let email = document.getElementById('email').value;
    if (email === "") {
        document.getElementById('emailError').style.display = 'inline';
        isValid = false;
    } else {
        document.getElementById('emailError').style.display = 'none';
    }

    // Message Validation
    let message = document.getElementById('message').value;
    if (message === "") {
        document.getElementById('messageError').style.display = 'inline';
        isValid = false;
    } else {
        document.getElementById('messageError').style.display = 'none';
    }

    return isValid;
}
