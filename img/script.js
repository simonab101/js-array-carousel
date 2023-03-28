
const images = ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"];

const sliderImgEl = document.getElementById("foto");
const btnUp = document.getElementById("button-down");
const btnDown = document.getElementById("button-up");

const lateraleImg = document.getElementById("laterale");

const ultimoIndiceDisponibile = images.length-1;

let currentImgIndex = 0;


sliderImgEl.src = images [ currentImgIndex ];

for (let a = 1; a <= images.length; a++) {

    if (a === 1){

        lateraleImg.innerHTML += `<img class="" src="" alt="">`

    } else {

        lateraleImg.innerHTML += `<img class="" src="" alt="">`
    
    }
}



btnUp.addEventListener("click", function() {

    currentImgIndex++;

    if (currentImgIndex === ultimoIndiceDisponibile+1){

        currentImgIndex = 0

        let pastLatImg = document.querySelector(`.laterale :nth-child(1)`)
        let currentLatImg = document.querySelector(`.laterale :nth-child(5)`)    

        pastLatImg.classList.toggle(`dark`)
        currentLatImg.classList.toggle(`dark`)

    } else {

        let pastLatImg = document.querySelector(`.laterale :nth-child(${currentImgIndex})`)
        let currentLatImg = document.querySelector(`.laterale :nth-child(${currentImgIndex+1})`)    

        pastLatImg.classList.toggle(`dark`)
        currentLatImg.classList.toggle(`dark`)

    }

    sliderImgEl.src = images [ currentImgIndex ]

    
} )

btnDown.addEventListener("click", function() {

    currentImgIndex--;

    if (currentImgIndex === -1){

        currentImgIndex = ultimoIndiceDisponibile

        let pastLatImg = document.querySelector(`.laterale :nth-child(1)`)
        let currentLatImg = document.querySelector(`.laterale :nth-child(5)`)    

        pastLatImg.classList.toggle(`dark`)
        currentLatImg.classList.toggle(`dark`)

    } else {

        let pastLatImg = document.querySelector(`.laterale :nth-child(${currentImgIndex+1})`)
        let currentLatImg = document.querySelector(`.laterale :nth-child(${currentImgIndex+2})`)    

        pastLatImg.classList.toggle(`dark`)
        currentLatImg.classList.toggle(`dark`)

    }

    sliderImgEl.src = images [ currentImgIndex ]

    

} )
