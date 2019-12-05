const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//my code starts here//

//navigation//

let navLinks = document.querySelectorAll('nav a')
console.log(navLinks);

navLinks[0].text = siteContent.nav['nav-item-1'];
navLinks[1].text = siteContent.nav['nav-item-2'];
navLinks[2].text = siteContent.nav['nav-item-3'];
navLinks[3].text = siteContent.nav['nav-item-4'];
navLinks[4].text = siteContent.nav['nav-item-5'];
navLinks[5].text = siteContent.nav['nav-item-6'];

//nav color update//
navLinks.forEach(link =>{
  link.style.color = 'green'
})

//Appendchild task//

let nav = document.querySelector('nav')
let facebookLink = document.createElement('a'
)
facebookLink.innerText ="Facebook"
nav.append(facebookLink)

facebookLink.style.color = 'rgb(59, 89, 152)'

//PreprendChild task//
let InstagramLink = document.createElement('a')
InstagramLink.innerText = "Instagram"
nav.prepend(InstagramLink)

InstagramLink.style.color = "#008080"

//main text//
let ctaText = document.querySelector('.cta-text h1')

ctaText.textContent = siteContent.cta.h1


//buttom//
let ctaButton = document.querySelector('.cta button')

ctaButton.textContent = siteContent.cta.button

//main image//
let ctaImg = document.getElementById('cta-img')

ctaImg.src = siteContent.cta['img-src']


//middle content//

let mainHeadersH4 = document.querySelectorAll('.text-content h4')

mainHeadersH4[0].textContent = siteContent['main-content']['features-h4']
mainHeadersH4[1].textContent = siteContent['main-content']['about-h4']
mainHeadersH4[2].textContent = siteContent['main-content']['services-h4']
mainHeadersH4[3].textContent = siteContent['main-content']['product-h4']
mainHeadersH4[4].textContent = siteContent['main-content']['vision-h4']

//main paragraphs//
let mainParagraphs = document.querySelectorAll('.text-content p')

mainParagraphs[0].innerText = siteContent['main-content']['features-content']
mainParagraphs[1].innerText = siteContent['main-content']['about-content']
mainParagraphs[2].innerText = siteContent['main-content']['services-content']
mainParagraphs[3].innerText = siteContent['main-content']['product-content']
mainParagraphs[4].innerText = siteContent['main-content']['vision-content']

//middle image//

let middleImg = document.getElementById('middle-img')

middleImg.src = siteContent['main-content']['middle-img-src']

//contact header//
let contactHeader = document.querySelector('.contact h4')

contactHeader.innerText = siteContent.contact['contact-h4']

//contact info//
let contactInfo = document.querySelectorAll('.contact p')

contactInfo[0].textContent = siteContent.contact['address']
contactInfo[1].innerText = siteContent['contact']['phone']
contactInfo[2].innerHTML = siteContent['contact']['email']

//footer//

let footerCopyRight = document.querySelector('footer p')

footerCopyRight.innerHTML = siteContent.footer.copyright




