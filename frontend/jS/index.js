    /* Récuperation et Affichage de la liste des produits */

// récuperation des données
const fetchListCameras = async()=>{
    await fetch("http://localhost:3000/api/cameras")
    .then ((res) => res.json())
    .then ((data) => (listCameras = data));
};

// affichage des produits sous forme de carte
const ListCamerasDisplay = async() => {
    await fetchListCameras();
    document.querySelector(".listproduits").innerHTML += listCameras.map((camera) =>
            `<div class= "card col-md-5 col-lg-3 ">
                <div class="card-body">
                    <img src="${camera.imageUrl}"class ="card-img-top"/>
                    <h5 class= "card-title text-center"> ${camera.name}</h5>
                    <p class= "card-text">${camera.description}</p>
                    <div class="text-center">
                    <div class=" price card-text text-right">${camera.price/100}€</div>
                    <a href= "../html/Produits.html?id=${camera._id}" >
                    <button> En savoir plus </button>
                    </a>
                    </div>
                </div>
            </div>`
    )
    .join (" ");    
};

fetchListCameras();
ListCamerasDisplay();
