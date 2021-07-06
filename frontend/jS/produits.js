/* Récuperation et Affichage du produit choisi */

(async () => {
    const productId =  await getProductId()
    const cameraData = await fetchDataCamera(productId)
    cameraDataDisplay(cameraData)
    console.log (cameraData.lenses)  
})()


// Récuperation de l'id du produit dans l'URL
function getProductId() {
   productId = new URL(window.location.href).searchParams.get('id');
   return productId; 
};   

// Récuperation des données du produits grâce à l'ID
function fetchDataCamera(productId) {
    return fetch(`http://localhost:3000/api/cameras/${productId}`)
    .catch((error) => {
        console.log(error)
    })
    .then ((res) => res.json())
    .then ((cameraData) => cameraData );
};

// affichage du produit 
function cameraDataDisplay(cameraData){
    document.getElementById("name").textContent = cameraData.name
    document.getElementById("image").src = cameraData.imageUrl
    document.getElementById("description").textContent = cameraData.description
    document.getElementById("price").textContent = cameraData.price/100 +"€"
    // affichage de la liste options objectif
    let lenses = cameraData.lenses;
    list = document.getElementById("list");
    lenses.forEach((item) => {
        let option = document.createElement("option")
        option.innerHTML += item                 
        list.appendChild(option);
    })
};

// envoi du produit choisi dans le localStorage
function setData( ){
    let product = {
    ref : `${productId}`,
    nom : document.getElementById("name").textContent,
    prix : document.getElementById("price").textContent,
    };
    let shopping = JSON.parse(localStorage.getItem("shopping"));
    // si déjà un produit dans le panier
    if (shopping){
        shopping.push(product)
        localStorage.setItem("shopping",JSON.stringify(shopping))
    }
    // si panier vide
    else{
        let shopping = []
        shopping.push(product)
        localStorage.setItem("shopping",JSON.stringify(shopping))
    }
};
