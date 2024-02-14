// Card viewer start
const mainCard = document.querySelector('.card-main');
const cardThumbs = document.querySelectorAll('.card-thumb');
const carouselButtons = document.querySelectorAll('.button-carousel');

let currentIndex = 2;

function displayImage(index) {
  mainCard.src = cardThumbs[index].src;
  mainCard.alt = 'Imagem da carta Contramágica';
  cardThumbs.forEach((thumb, i) => {
    if (i === index) thumb.classList.remove('unselected');
    else thumb.classList.add('unselected');
  });
}

carouselButtons.forEach(button => {
  button.addEventListener('click', ev => {
    if (ev.target.classList.contains('button-triangle-left')) {
      currentIndex = ((currentIndex - 1) + cardThumbs.length) % cardThumbs.length;
      displayImage(currentIndex);
    } else {
      currentIndex = (currentIndex + 1) % cardThumbs.length;
      displayImage(currentIndex);
    }
  });
});
// Card viwer end

// Card info start

// Favorite button start
const favoriteButton = document.querySelector('.fa-heart');

function handleFavoriteState(element) {
  if (element.classList.contains('favorite')) {
    element.classList.remove('favorite');
    element.classList.remove('fa-solid');
    element.classList.add('fa-regular');
  } else {
    element.classList.add('favorite');
    element.classList.add('fa-solid');
    element.classList.remove('fa-regular');
  }
}

favoriteButton.addEventListener('click', ev => handleFavoriteState(ev.target));
// Favorite button end

// Shopping start
const input = document.querySelector('input[type="number"]');
const inputButtonMinus = document.querySelector('.box-minus');
const inputButtonPlus = document.querySelector('.box-plus');

let cardQuantity = parseInt(input.value);

// Using two different event listeners due to event propagation
inputButtonMinus.addEventListener('click', () => {
  if (cardQuantity <= 1) cardQuantity = 1;
  else cardQuantity--;

  input.value = cardQuantity;
});

inputButtonPlus.addEventListener('click', () => {
  cardQuantity++;
  input.value = cardQuantity;
});

// Add to list button start
const addButton = document.querySelector('.button-add');
const toast = document.querySelector('.container-toast');

addButton.addEventListener('click', () => {
  if (!toast.classList.contains('animated')) toast.classList.add('animated');

  setTimeout(() => {
    toast.classList.remove('animated');
  }, 3000);
});
// Add to list button end

// Shopping end

// Card info end 

(function init() {
  displayImage(currentIndex);
})();