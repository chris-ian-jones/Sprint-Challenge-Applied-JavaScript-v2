// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

// make a GET request via axious to get data
axios.get('https://lambda-times-backend.herokuapp.com/articles')
    
    // if promises state is 'fulfilled': 
    .then(data => {
        // create an new empty array called 'arrayOfAllArticleObjects'
        const arrayOfAllArticleObjects = []
        // assign the data from api to object
        articleByTopicObject = data.data.articles
        // assign just the values from objects to new array
        const arrayOfObjectsValues = Object.values(articleByTopicObject)
        
        // nested iterations, to iterate over each item in array of array of objects
        // then for each item in array, push each object into 'arrayOfAllArticleObjects'
        arrayOfObjectsValues.forEach(data => {
            data.forEach(array => {
                arrayOfAllArticleObjects.push(array)
            })
        })
        
        // iterate over 'arrayOfAllArticleObjects', passing each object into and creating new Article via component
        // then appending it to the DOM as child
        arrayOfAllArticleObjects.forEach(object => {
            let newArticle = Article(object)
            const cardsContainer = document.querySelector('.cards-container')
            cardsContainer.appendChild(newArticle)
        })
        
    })
    .catch(data => {
        console.log("Error message for 'Cards/Articles' API call")
    })

// component to create new Article, by passing in an object
function Article(object) {
    // create new elements
    const articleCard = document.createElement('div')
    const articleHeadline = document.createElement('div')
    const articleAuthor = document.createElement('div')
    const articleImageContainer = document.createElement('div')
    const articleImage = document.createElement('img')
    const articleByAuthor = document.createElement('span')

    // add classes to elements for css styling
    articleCard.classList.add('card')
    articleHeadline.classList.add('headline')
    articleAuthor.classList.add('author')
    articleImageContainer.classList.add('img-container')
    
    // add properties to element, passed in from object
    articleHeadline.textContent = object.headline
    articleImage.src = object.authorPhoto
    articleByAuthor.textContent = `By ${object.authorName}`

    // append elements accordingly as children
    articleCard.appendChild(articleHeadline)
    articleCard.appendChild(articleAuthor)
    articleAuthor.appendChild(articleImageContainer)
    articleImageContainer.appendChild(articleImage)
    articleAuthor.appendChild(articleByAuthor)

    // return parent div of all elements
    return articleCard
} 

