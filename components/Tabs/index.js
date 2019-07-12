// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


// make a GET request via axious to get an array of topics
axios.get('https://lambda-times-backend.herokuapp.com/topics')
    
    // if promises state is 'fulfilled', define the array of data received
    // loop through each item in the array of data, passing that item into Tab component to create new tab
    // then append the new tab as child to DOM 
    .then(data => {
        topicsArray = data.data.topics
        topicsArray.forEach(topic => {
            const newTab = Tab(topic)
            const topicsContainer = document.querySelector('.topics')
            topicsContainer.appendChild(newTab)
        })
    })

    .catch(data => {
        console.log("Error message for 'Tabs' API call")
    })

// component to create a new tab
function Tab(topic) {
    const tabTopic = document.createElement('div')
    tabTopic.classList.add('tab')
    tabTopic.textContent = topic

    return tabTopic
}