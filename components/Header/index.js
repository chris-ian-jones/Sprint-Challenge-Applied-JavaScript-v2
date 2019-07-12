// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

// function to create Header component
function Header() {
    // create elements
    const headerContainer = document.createElement('div')
    const headerDate = document.createElement('span')
    const headerTitle = document.createElement('h1')
    const headerTemp = document.createElement('span')

    // append elements accordingly as children
    headerContainer.appendChild(headerDate)
    headerContainer.appendChild(headerTitle)
    headerContainer.appendChild(headerTemp)

    // add classes to elements for css styling
    headerContainer.classList.add('header')
    headerDate.classList.add('date')
    headerTemp.classList.add('temp')

    // add text content to elements to match brief
    headerDate.textContent = 'SMARCH 28, 2019'
    headerTitle.textContent = 'Lambda Times'
    headerTemp.textContent = '98°'

    // return parent div of all elements
    return headerContainer
}

// create new header using component, add add it to the DOM in the specified place as a child
const newHeader = Header()
const componentHeaderContainer = document.querySelector('.header-container')
componentHeaderContainer.appendChild(newHeader)