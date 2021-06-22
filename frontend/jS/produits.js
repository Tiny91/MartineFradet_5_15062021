

(async () => {
    const productId =  await getProductId()
    const cameraData = await fetchDataCamera(productId)
    cameraDataDisplay(cameraData)
})()

function getProductId() {
   productId = new URL(window.location.href).searchParams.get('id');
   return productId;  
}
    
    
 function fetchDataCamera(productId) {
    return fetch(`http://localhost:3000/api/cameras/${productId}`)
    .catch((error) => {
        console.log(error)
      })
    .then ((res) => res.json())
    .then ((cameraData) => cameraData );
}

function cameraDataDisplay(cameraData){
    document.querySelector(".container").innerHTML +=
        `
        <div class= "card col">
            <div class="card-body">
                <img src="${cameraData.imageUrl}"class ="card-img-top"/>
                <h5 class= "card-title text-center"> ${cameraData.name}</h5>
                <p class= "card-text">${cameraData.description}</p>
                <div class = "col">
                    <h6> choisir votre  objectif ${cameraData.lenses}</h6>
                    <p class= " price card-text text-right">${cameraData.price/100}€</p>
                </div>
                <button><a href= "panier.html"> Ajouter au panier  </button>
            </div>
        </div>`   
    };



    
    