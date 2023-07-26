const container = document.querySelector('.container');
const prevButton = container.querySelector('.btn-previous');
const nextButton = container.querySelector('.btn-next');
const images = document.querySelector('.slider').querySelectorAll('img');

let startIndex = 0;
images[startIndex].classList.add('active');

let displayImage = (index) => {
  images[startIndex].classList.remove('active');
  images[index].classList.add('active');
  startIndex = index;

  switch (index) {
    case 0:
      prevButton.style.display = 'none';
      break;
    case (images.length - 1):
      nextButton.style.display = 'none';
      break;
    default:
      prevButton.style.display = 'block';
      nextButton.style.display = 'block';
  };
};

prevButton.onclick = function() {
  displayImage(startIndex - 1);
};
nextButton.onclick = function() {
  displayImage(startIndex + 1);
};

