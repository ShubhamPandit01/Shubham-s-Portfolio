
// About section tab

let tablinks = document.getElementsByClassName('tab-links')
let tabcontents = document.getElementsByClassName('tab-contents')

// Skills section tab

let language = document.getElementById('language')
let closefrontend = document.getElementById('closefrontend')
let closetools = document.getElementById('closetools')
let closebackend = document.getElementById('closebackend')

// Skills section tab

let bar = document.getElementById('bar')
let nav = document.getElementById('nav-element')
let close = document.getElementById('close')


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


// Skills section tab function

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
