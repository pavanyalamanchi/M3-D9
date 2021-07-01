const submitEvent = async function(event) {

    event.preventDefault()

    const myForm = {
        name: document.getElementById('name').value,
        description: document.getElementById('description').value,
        imageUrl: document.getElementById('imageurl').value,
        brand: document.getElementById('brand').value,
        price: document.getElementById('price').value
    }
    console.log(JSON.stringify(myForm))
    const resp = await fetch('https://striveschool-api.herokuapp.com/api/product/', {
        method: "POST",
        body: JSON.stringify(myForm),
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNWU4MmIzNTgxNzAwMTVjMjI3MDMiLCJpYXQiOjE2MjUwNTQ4NTAsImV4cCI6MTYyNjI2NDQ1MH0.F-daCuImBoFWGLa9pRwzdU4g9jlinUv9O4Kg6B_Lpr0",
            "Content-Type": "application/json"
        }
    })

    let body = document.getElementsByTagName('body')[0]
    let para = document.createElement('p')
    p.style.textAlign = 'center'
    para.innerText = 'Content Successfully Added!'
    body.appendChild(para)



}

window.onload = async function() {
    let edit_button = document.getElementsByClassName('edit-button')[0]
    edit_button.style.display = 'none'

    const url = 'https://striveschool-api.herokuapp.com/api/product/'
    const eventId = new URLSearchParams(window.location.search).get("id")
    console.log(eventId)

    let respData = await fetch(url + eventId, {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNWU4MmIzNTgxNzAwMTVjMjI3MDMiLCJpYXQiOjE2MjUwNTQ4NTAsImV4cCI6MTYyNjI2NDQ1MH0.F-daCuImBoFWGLa9pRwzdU4g9jlinUv9O4Kg6B_Lpr0"
        }
    })
    let resp = await respData.json()

    if (eventId) {
        edit_button.style.display = 'inline-block'

        document.getElementById('name').value = resp.name
        document.getElementById('description').value = resp.description
        document.getElementById('imageurl').value = resp.imageUrl
        document.getElementById('brand').value = resp.brand
        document.getElementById('price').value = resp.price

        let submit_button = document.getElementsByClassName('submit-button')[0]
        submit_button.style.display = 'none'
    }
}

const editButton = async function(event) {
    event.preventDefault()

    //const url = 'https://striveschool-api.herokuapp.com/api/product/'
    const eventId = new URLSearchParams(window.location.search).get("id")
        //console.log(eventId)

    const myForm = {
        name: document.getElementById('name').value,
        description: document.getElementById('description').value,
        imageUrl: document.getElementById('imageurl').value,
        brand: document.getElementById('brand').value,
        price: document.getElementById('price').value
    }
    console.log(JSON.stringify(myForm))
    const resp = await fetch('https://striveschool-api.herokuapp.com/api/product/' + eventId, {
        method: "PUT",
        body: JSON.stringify(myForm),
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNWU4MmIzNTgxNzAwMTVjMjI3MDMiLCJpYXQiOjE2MjUwNTQ4NTAsImV4cCI6MTYyNjI2NDQ1MH0.F-daCuImBoFWGLa9pRwzdU4g9jlinUv9O4Kg6B_Lpr0",
            "Content-Type": "application/json"
        }
    })
}

const deleteButton = async function(event) {
    event.preventDefault()
    const eventId = new URLSearchParams(window.location.search).get("id")

    const resp = await fetch('https://striveschool-api.herokuapp.com/api/product/' + eventId, {
        method: "DELETE",
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNWU4MmIzNTgxNzAwMTVjMjI3MDMiLCJpYXQiOjE2MjUwNTQ4NTAsImV4cCI6MTYyNjI2NDQ1MH0.F-daCuImBoFWGLa9pRwzdU4g9jlinUv9O4Kg6B_Lpr0",
        }
    })

    let para = document.getElementsByClassName('del-con')
    para.innerText = 'Deleted Successfully'

}