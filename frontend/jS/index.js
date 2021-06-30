/* Récuperation et Affichage de la liste des produits */


const fetchListCameras = async()=>{
    await fetch("http://localhost:3000/api/cameras")
    .then ((res) => res.json())
    .then ((data) => (listCameras = data));
};

const ListCamerasDisplay = async() => {
    await fetchListCameras();
    document.querySelector(".listproduits").innerHTML += listCameras.map((camera) =>
            `<div class= "card col-12 col-md-4">
                        <div class="card-body">
                            <img src="${camera.imageUrl}"class ="card-img-top"/>
                            <h5 class= "card-title text-center"> ${camera.name}</h5>
                            <p class= "card-text">${camera.description}</p>
                            <span class="text-center">
                            <button><a href= "../html/Produits.html?id=${camera._id}" > En savoir plus </a></button>
                            <p class=" price card-text text-right">${camera.price/100}€</p>
                            </span>
                        </div>
                    </div>`
    ) 
    .join (" ");
    
};


fetchListCameras();
ListCamerasDisplay();
