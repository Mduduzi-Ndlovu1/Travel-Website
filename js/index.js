const menus = document.querySelector('nav ul');
const header = document.querySelector('header');
const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener('click', () => {
    menus.classList.add('display');
    closeBtn.classList.remove('hidden')
});
closeBtn.addEventListener('click', () => {
    menus.classList.remove('display');
    closeBtn.classList.add('hidden')

});


// scroll sticky navbar

window.addEventListener('scroll', ()=> {
    if(document.documentElement.scrollTop > 20){
        header.classList.add('sticky');
    }else{
        header.classList.remove('sticky')
    }

    console.log(document.documentElement.scrollTop)

});

// static numbers
document.addEventListener('DOMContentLoaded', () => {
    const countersEl = document.querySelectorAll('.number');

    countersEl.forEach((counter) => {
        counter.textContent = '0';

        const incrementCounter = () => {
            const currentNum = Number(counter.textContent);
            const dataCeil = Number(counter.getAttribute('data-ceil'));
            const increment = dataCeil / 25;

            if (currentNum < dataCeil) {
                counter.textContent = `${Math.ceil(currentNum + increment)}`;
                setTimeout(incrementCounter, 50);
            } else {
                counter.textContent = dataCeil;
            }
        };

        incrementCounter();
    });
});
