document.querySelector('.right-arrow').addEventListener('click', () => {
    const cards = document.querySelectorAll('.server-card');
    const firstCard = cards[0];
    firstCard.parentElement.appendChild(firstCard);
    updateCardStyles();
});

document.querySelector('.left-arrow').addEventListener('click', () => {
    const cards = document.querySelectorAll('.server-card');
    const lastCard = cards[cards.length - 1];
    lastCard.parentElement.prepend(lastCard);
    updateCardStyles();
});

function updateCardStyles() {
    const cards = document.querySelectorAll('.server-card');
    cards.forEach(card => card.classList.remove('greyed-out'));
    if (cards.length > 2) {
        cards[0].classList.add('greyed-out');
        cards[cards.length - 1].classList.add('greyed-out');
    }
}


document.querySelector('.start-button').addEventListener('click', () => {
    const serversSection = document.querySelector('.servers');
    serversSection.scrollIntoView({ behavior: 'smooth' });
});

updateCardStyles(); 