
// c-v button action

let cvbtn = document.getElementById('cv-btn')

// About section tab
let tablinks = document.getElementsByClassName('tab-links')
let tabcontents = document.getElementsByClassName('tab-contents')

// Skills section tab
let language = document.getElementById('language')
let closefrontend = document.getElementById('closefrontend')
let closetools = document.getElementById('closetools')
let closebackend = document.getElementById('closebackend')

// menu open and close tab
let bar = document.getElementById('bar')
let nav = document.getElementById('nav-element')
let close = document.getElementById('close')
let navElements = document.querySelectorAll('.menu')

// pagetop button hide or show tab
let pagetop = document.getElementById('pagetop')


// header styling tab
let header= document.getElementById('header-nav')

// -------------------------------------------------------------------------------------------------------------------


// c-v button action

cvbtn.addEventListener('click',()=>{
    cvbtn.classList.toggle('active')
})


// About section tab function
function opentab(tabname){
    console.log(typeof tablinks)
    for(let tablink of tablinks){
        tablink.classList.remove("active-link")
    }

    for(let tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Skills section tab function

// <i class="fa-solid fa-chevron-up">

function closetab(name){
    if(event.currentTarget.innerHTML == `<i class="fa-solid fa-chevron-down"></i>`){
        event.currentTarget.innerHTML =`<i class="fa-solid fa-chevron-up"></i>`
        document.getElementById(name).classList.add(`active`)
    }else {
        event.currentTarget.innerHTML =`<i class="fa-solid fa-chevron-down"></i>`
        document.getElementById(name).classList.remove(`active`)
    }

}


// menu open and close tab

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active')
    })
}

if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active')
    })
}

navElements.forEach((element)=>element.addEventListener('click',(e)=>{
    nav.classList.remove('active')
}))


// Window Behaviour

window.addEventListener('scroll',()=>{
    
    // pagetop button hide or show tab
    if(window.scrollY > window.innerHeight){
        pagetop.classList.add('show')
    }else pagetop.classList.remove('show')

})

function handleHeader() {
    if(window.scrollY > window.innerHeight * 0.2){
        header.classList.add('active')
    } else {
        header.classList.remove('active')
    }
}

window.addEventListener('scroll', handleHeader);
window.addEventListener('load', handleHeader);

pagetop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

