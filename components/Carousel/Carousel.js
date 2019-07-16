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


// component to create carousel
function Carousel() {
  // create new elements
  const carouselContainer = document.createElement('div')
  const carouselLeftButton = document.createElement('div')
  const carouselImageOne = document.createElement('img')
  const carouselImageTwo = document.createElement('img')
  const carouselImageThree = document.createElement('img')
  const carouselImageFour = document.createElement('img')
  const carouselRightButton = document.createElement('div')

  // add classes to elements for css styling
  carouselContainer.classList.add('carousel')
  carouselLeftButton.classList.add('left-button')
  carouselRightButton.classList.add('right-button')
  carouselImageOne.src = './assets/carousel/mountains.jpeg'
  carouselImageTwo.src = './assets/carousel/computer.jpeg'
  carouselImageThree.src = './assets/carousel/trees.jpeg'
  carouselImageFour.src = './assets/carousel/turntable.jpeg'

  // append elements accordingly as children
  carouselContainer.appendChild(carouselLeftButton)
  carouselContainer.appendChild(carouselImageOne)
  carouselContainer.appendChild(carouselImageTwo)
  carouselContainer.appendChild(carouselImageThree)
  carouselContainer.appendChild(carouselImageFour)
  carouselContainer.appendChild(carouselRightButton)

  // add click event listeners to carousel 'buttons'
  carouselLeftButton.addEventListener('click', clickLeftButton)
  carouselRightButton.addEventListener('click', clickRightButton)

  // return parent div of all elements
  return carouselContainer
}

// create new carousel, and add it to the DOM
const newCarousel = Carousel()
const mainCarouselContainer = document.querySelector('.carousel-container')
mainCarouselContainer.appendChild(newCarousel)

// grab all the images in the carousel
const carouselImages = mainCarouselContainer.querySelectorAll('img')

// define index and its default
let imageIndex = 0
// define index of last image in NodeList
let indexLastImage = carouselImages.length - 1
// set display of default index of nodelist to block to show first image
carouselImages[imageIndex].style.display = 'block'

// when left 'button' of carousel is clicked:
// loop through nodelist of images, setting all their display style to none
// if current image is first of nodelist, set imageIndex to that of last image
// otherwise decrement the imageIndex
// set the display of the image of the updated index to 'block' to display the new image
function clickLeftButton() {
  carouselImages.forEach(item => {
    item.style.display = 'none'
  })

  if (imageIndex === 0) {
    imageIndex = indexLastImage
    carouselImages[imageIndex].style.display = 'block'
  } else {
    imageIndex = imageIndex - 1
    carouselImages[imageIndex].style.display = 'block'
  }
}

// when right 'button' of carousel is clicked:
// loop through nodelist of images, setting all their display style to none
// if current image is last of nodelist, set imageIndex to that of first image
// otherwise increment the imageIndex
// set the display of the image of the updated index to 'block' to display the new image
function clickRightButton() {
  carouselImages.forEach(item => {
    item.style.display = 'none'
  })

  if (imageIndex === indexLastImage) {
    imageIndex = 0
    carouselImages[imageIndex].style.display = 'block'
  } else {
    imageIndex = imageIndex + 1
    carouselImages[imageIndex].style.display = 'block'
  }
}


