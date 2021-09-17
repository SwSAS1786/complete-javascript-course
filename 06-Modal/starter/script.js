'use strict';

const btnShowModal1 = document.querySelector('.btn1');
const btnShowModal2 = document.querySelector('.btn2');
const btnShowModal3 = document.querySelector('.btn3');
const modal = document.querySelector('.modal');
const modal1 = document.querySelector('.modal1');
const modal2 = document.querySelector('.modal2');
const modal3 = document.querySelector('.modal3');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelectorAll('.close-modal');


// for (let i = 0; i < btnShowModal.length; i++) {
//     btnShowModal[i].addEventListener('click', function () {
//         modal.classList.remove('hidden');
//         overlay.classList.remove('hidden');
//     })

// }

//Each button opens seperately when clicked. Each button corresponds to its own set of data/text
btnShowModal1.addEventListener('click', function () {
    modal1.classList.remove('hidden');
    overlay.classList.remove('hidden');
})
btnShowModal2.addEventListener('click', function () {
    modal2.classList.remove('hidden');
    overlay.classList.remove('hidden');
})
btnShowModal3.addEventListener('click', function () {
    modal3.classList.remove('hidden');
    overlay.classList.remove('hidden');
})

//Closing each modal window afer being opened from the above code.

for (let i = 0; i < closeModal.length; i++) {
    closeModal[i].addEventListener('click', function () {
        modal1.classList.add('hidden');
        modal2.classList.add('hidden');
        modal3.classList.add('hidden');
        overlay.classList.add('hidden');
    })
}

// closeModal.addEventListener('click', function () {
//     modal1.classList.add('hidden');
//     overlay.classList.add('hidden')
// })
// closeModal.addEventListener('click', function () {
//     modal2.classList.add('hidden');
//     overlay.classList.add('hidden')
// })
// closeModal.addEventListener('click', function () {
//     modal3.classList.add('hidden');
//     overlay.classList.add('hidden')
// })

overlay.addEventListener('click', function () {
    modal1.classList.add('hidden');
    modal2.classList.add('hidden');
    modal3.classList.add('hidden');
    overlay.classList.add('hidden');
})

document.addEventListener('keydown', function (keyPress) {
    if (keyPress.key === 'Escape') {
        modal1.classList.add('hidden');
        modal2.classList.add('hidden');
        modal3.classList.add('hidden');
        overlay.classList.add('hidden')
    }
})