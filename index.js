window.onload = function() {
    getProducts()
}

const getProducts = async function() {
    let resp = await fetch("https://striveschool-api.herokuapp.com/api/product/", {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNWU4MmIzNTgxNzAwMTVjMjI3MDMiLCJpYXQiOjE2MjUwNTQ4NTAsImV4cCI6MTYyNjI2NDQ1MH0.F-daCuImBoFWGLa9pRwzdU4g9jlinUv9O4Kg6B_Lpr0"
        }
    })

    let respData = await resp.json()
    console.log(respData)

    let row = document.createElement('div')
    row.classList.add('row')
    respData.forEach(element => {
        let createCol = document.createElement('div')

        createCol.classList.add("col-3", "col-sm-6", "col-md-4", "col-lg-3", "mb-4", "mt-4")
        createCol.innerHTML = `<div class=" card">
          <img src=${element.imageUrl} class="card-img-top img-fluid" alt='' style='height:10rem'>
          <div class=" card-body bg-info">
          <p class="card-text text-ellipsis"><b>${element.name}</b></p>
                  <p class="card-title"><b>${element.brand}</b></p>
                  <p class="card-text"><b>${element.description}</b></p>
                  <p class="card-text"><b>€${element.price}</b></p>
                  <p><a href='home_page.html?id=${element._id}'>View Details</a></p>
                </div>
          </div>`

        row.appendChild(createCol)
    })
    let container = document.querySelector('.container')

    container.appendChild(row)
}

const viewDetails = function() {

}