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

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(data => {
        // console.log('API call ok', data.data.articles)
        const emptyArray = []
        articleByTopicObject = data.data.articles
        // console.log(articleByTopicObject)
        const arrayOfObjects = Object.values(articleByTopicObject)
        arrayOfObjects.forEach(data => {
            data.forEach(array => {
                emptyArray.push(array)
            })
        })
        console.log(emptyArray)



        
        
        
    })
    .catch(data => {
        console.log("Error message for 'Cards/Articles' API call")
    })



function Article() {
    const articleCard = document.createElement('div')
    const articleHeadline = document.createElement('div')
    const articleAuthor = document.createElement('div')
    const articleImageContainer = document.createElement('div')
    const articleImage = document.createElement('img')
    const articleByAuthor = document.createElement('span')

    articleCard.classList.add('card')
    articleHeadline.classList.add('headline')
    articleAuthor.classList.add('author')
    articleImageContainer.classList.add('img-container')
    
    // articleImage.src = ''
    articleByAuthor.textContent = `By authors name`

    articleCard.appendChild(articleHeadline)
    articleCard.appendChild(articleAuthor)
    articleAuthor.appendChild(articleImageContainer)
    articleImageContainer.appendChild(articleImage)
    articleAuthor.appendChild(articleByAuthor)

    return articleCard
} 

let newArticle = Article()
console.log(newArticle)

