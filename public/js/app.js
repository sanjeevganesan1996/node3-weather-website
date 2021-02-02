console.log('This is client side javascript')

// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data) => {
//         console.log(data)
//     })

// }
// )



const weatherform = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

messageTwo.textContent = ''
messageOne.textContent = 'Loading...'

weatherform.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
    response.json().then((data) => {
        if(data.error) {
            messageOne.textContent = data.error
            
        }
        else {
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
        }
    })
}
)
}
)