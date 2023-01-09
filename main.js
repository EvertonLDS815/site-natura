let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    search.classList.remove('active');
}



let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
})


// Function para o input

function addNumber(index) {
    const input = document.getElementsByClassName("select")[index];

    if(input.value < 10) {
        input.value++
    } else {
        input.value = 10;
    }
}

function removeNumber(index) {
    const input = document.getElementsByClassName("select")[index];

    if(input.value > 0 && input.value <= 10) {
        input.value--
    } else if(input.value = 0) {
        input.value === 0;
    }
}

// function adicionar(index) {
//     const namePerfum = document.getElementsByClassName("name-perf")[index].innerHTML;
//     const input = document.getElementsByClassName("select")[index];

//     console.log(input.value + ' - ' + namePerfum);
// }