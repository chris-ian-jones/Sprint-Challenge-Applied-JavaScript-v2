/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="carousel"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function Carousel() {

  const carouselContainer = document.createElement('div')
  const carouselLeftButton = document.createElement('div')
  const carouselImageOne = document.createElement('img')
  const carouselImageTwo = document.createElement('img')
  const carouselImageThree = document.createElement('img')
  const carouselImageFour = document.createElement('img')
  const carouselRightButton = document.createElement('div')

  carouselContainer.classList.add('carousel')
  carouselLeftButton.classList.add('left-button')
  carouselRightButton.classList.add('right-button')
  carouselImageOne.src = './assets/carousel/mountains.jpeg'
  carouselImageTwo.src = './assets/carousel/computer.jpeg'
  carouselImageThree.src = './assets/carousel/trees.jpeg'
  carouselImageFour.src = './assets/carousel/turntable.jpeg'

  carouselContainer.appendChild(carouselLeftButton)
  carouselContainer.appendChild(carouselImageOne)
  carouselContainer.appendChild(carouselImageTwo)
  carouselContainer.appendChild(carouselImageThree)
  carouselContainer.appendChild(carouselImageFour)
  carouselContainer.appendChild(carouselRightButton)

  carouselLeftButton.addEventListener('click', clickLeftButton)
  carouselRightButton.addEventListener('click', clickRightButton)

  return carouselContainer
}

const newCarousel = Carousel()
const mainCarouselContainer = document.querySelector('.carousel-container')

mainCarouselContainer.appendChild(newCarousel)

function clickLeftButton() {
  console.log('click left')
}

function clickRightButton() {
  console.log('click right')
}


