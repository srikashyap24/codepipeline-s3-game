document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('#game-board');
    const startButton = document.getElementById('start-game');
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];

    const cardArray = [
        { name: 'python', img: 'images/python.png' },
        { name: 'python', img: 'images/python.png' },
        { name: 'html', img: 'images/html.png' },
        { name: 'html', img: 'images/html.png' },
        { name: 'aws', img: 'images/java.png' },
        { name: 'aws', img: 'images/java.png' },
        { name: 'javascript', img: 'images/js.png' },
        { name: 'javascript', img: 'images/js.png' },
        { name: 'css', img: 'images/css.png' },
        { name: 'css', img: 'images/css.png' }
    ];

    function shuffle(array) {
        array.sort(() => 0.5 - Math.random());
    }

    function createBoard() {
        shuffle(cardArray);
        grid.innerHTML = '';
        cardsWon = [];
        cardsChosen = [];
        cardsChosenId = [];

        for (let i = 0; i < cardArray.length; i++) {
            const cardWrapper = document.createElement('div');
            cardWrapper.classList.add('card');

            const cardImage = document.createElement('img');
            cardImage.setAttribute('src', 'images/blank.png');
            cardImage.setAttribute('data-id', i);
            cardImage.classList.add('card-img');

            cardImage.addEventListener('click', flipCard);

            cardWrapper.appendChild(cardImage);
            grid.appendChild(cardWrapper);
        }
    }

    function flipCard() {
        const cardId = this.getAttribute('data-id');
        if (cardsChosenId.includes(cardId)) return;

        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);

        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 600);
        }
    }

    function checkForMatch() {
        const cards = document.querySelectorAll('.card img');
        const [firstId, secondId] = cardsChosenId;

        if (cardsChosen[0] === cardsChosen[1] && firstId !== secondId) {
            cards[firstId].style.visibility = 'hidden';
            cards[secondId].style.visibility = 'hidden';
            cards[firstId].removeEventListener('click', flipCard);
            cards[secondId].removeEventListener('click', flipCard);
            cardsWon.push(cardsChosen);
        } else {
            cards[firstId].setAttribute('src', 'images/blank.png');
            cards[secondId].setAttribute('src', 'images/blank.png');
        }

        cardsChosen = [];
        cardsChosenId = [];

        if (cardsWon.length === cardArray.length / 2) {
            alert('🎉 Congratulations! You matched all the languages!');
        }
    }

    startButton.addEventListener('click', createBoard);
});
