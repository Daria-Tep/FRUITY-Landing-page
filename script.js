/*------------ BURGER MENU -------------*/
const burgerBtn = document.querySelector('.burger-icon');
const burgerMenu = document.querySelector('.burger-menu-container');
const body = document.querySelector('body');
const overlay = document.querySelector('.overlay');

burgerBtn.addEventListener('click', function() {
    burgerMenu.classList.remove('hide-menu');
    burgerMenu.classList.add('show-menu')
    burgerMenu.style.top = '0';
    body.classList.add('stop-scrolling');
    overlay.style.display = 'block';
})

burgerMenu.addEventListener('click', function() {
    burgerMenu.classList.remove('show-menu');
    burgerMenu.classList.add('hide-menu');
    burgerMenu.style.top = '-150%';
    body.classList.remove('stop-scrolling');
    overlay.style.display = 'none';
})


/*------------ FRUIT CARD-------------- */

// Добавляем прослушку на всем окне

window.addEventListener('click', function(event) {

    let counter;

    //проверяем клик строго по кнопкам 
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        // находим контейнер счетчика
        const inputContainer = event.target.closest('.input-container');

        //находим data-counter внутри контейнера
        counter = inputContainer.querySelector('.quantity');

    }

    //проверяем является ли элемент по которому совершен клик кнопкой Плюс

    if (event.target.dataset.action === 'plus') {
        // преобразовали содержимое counter в число, прибавляем шаг 0,5 и возвращаем обратно в иннерТекст
        let counterNumber = +counter.innerText;
        counterNumber = counterNumber + 0.5;
        counter.innerText = counterNumber;
    }

    if (event.target.dataset.action === 'minus') {
        // преобразовали содержимое counter в число, если оно не равно 0, то убавляем шаг 0,5 и возвращаем обратно в иннерТекст
        let counterNumber = +counter.innerText;
        if (counterNumber > 0) {
            counterNumber = counterNumber - 0.5;
            counter.innerText = counterNumber;
        }
    }
})



/*----------REVIEW SLIDER--------*/

const reviewBtnRight = document.querySelector('.review-arrow-right');
const reviewBtnLeft = document.querySelector('.review-arrow-left');
const mainFrames = document.querySelectorAll('.review__main-frame');


let currentSlide = 0;

function drawFirstSlide() {
    mainFrames[currentSlide].classList.add('active')
}

drawFirstSlide()

function changeSlide(n) {
    currentSlide = (n + mainFrames.length) % mainFrames.length;
}

//отправить текущий слайд влево и скрыть
function toLeftHide() {
    mainFrames[currentSlide].classList.add('to-left');
    mainFrames[currentSlide].addEventListener('animationend', function() {
        this.classList.remove('active', 'to-left')
    })

}

function toRightHide() {
    mainFrames[currentSlide].classList.add('to-right');
    mainFrames[currentSlide].addEventListener('animationend', function() {
        this.classList.remove('active', 'to-right')
    })

}

//поднимать из под низа и увеличивать
function fromUpShow(num) {
    mainFrames[num].classList.add('increase');
    mainFrames[num].addEventListener('animationend', function() {
        mainFrames[num].classList.remove('increase');
        mainFrames[num].classList.add('active');
    })

}

reviewBtnRight.addEventListener('click', function() {
    toLeftHide()
    changeSlide(currentSlide + 1)
    fromUpShow(currentSlide)

})

reviewBtnLeft.addEventListener('click', function() {
    toRightHide()
    changeSlide(currentSlide + 1)
    fromUpShow(currentSlide)

})