
(async () => {
    const productId =  await getProductId()
    const cameraData = await fetchDataCamera(productId)
    cameraDataDisplay(cameraData)
    console.log (cameraData.lenses)
    
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

// affichage du produit avec ses caracteristiques
function cameraDataDisplay(cameraData){
    // liste des options objectif
    let lenses = cameraData.lenses;
    list = document.getElementById("list");
    lenses.forEach((item) => {
        let option = document.createElement("option")
        option.innerHTML += item                 
        list.appendChild(option);
    })
    document.getElementById("name").textContent = cameraData.name
    document.getElementById("image").src = cameraData.imageUrl
    document.getElementById("description").textContent = cameraData.description
    document.getElementById("price").textContent = cameraData.price/100 +"€"
    
};
// envoi du produit choisi dans le localStorage
function setData( ){
    let product = {
    ref : `${productId}`,
    nom : document.getElementById("name").textContent,
    prix : document.getElementById("price").textContent,
    };
    let shopping = JSON.parse(localStorage.getItem("shopping"));
    if (shopping){
        shopping.push(product)
        localStorage.setItem("shopping",JSON.stringify(shopping))
    }
    else{
        let shopping = []
        shopping.push(product)
        localStorage.setItem("shopping",JSON.stringify(shopping))
    }

};
