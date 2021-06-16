/* affichage de la page d'accueil*/

fetch("http://localhost:3000/api/cameras")
.then (data => data.json())
.then ( jsonListCamera => {
    for (let jsonCamera of jsonListCamera){
    let camera = new Camera (jsonCamera);
    document.querySelector(".container-produits ")
    .innerHTML +=` <div class= "card col-12 col-md-4">
                        <div class="card-body">
                            <img src="${camera.imageUrl}"class ="card-img-top"/>
                            <h5 class= "card-title text-center"> ${camera.name}</h5>
                            <p class= "card-text">${camera.description}</p>
                            <p class= " price card-text text-right">${camera.price}€</p>
                        </div>
                    </div>`
    }
});
