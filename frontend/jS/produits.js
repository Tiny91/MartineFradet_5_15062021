
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

function cameraDataDisplay(cameraData){
    let lenses = cameraData.lenses;
        lenses.forEach((item) => {
            let dropdown = document.createElement("span")
            dropdown.innerHTML += item 
           dropdown.classList.add("dropdown-item")             
        document.getElementById("list").appendChild(dropdown)
        });   
    document.getElementById("name").textContent = cameraData.name
    document.getElementById("image").src = cameraData.imageUrl
    document.getElementById("description").textContent = cameraData.description
    document.getElementById("price").textContent = cameraData.price/100 +"€"
    
};

function setData( ){
    const panier = {
    ref : `${productId}`,
    nom : document.getElementById("name").textContent,
    prix : document.getElementById("price").textContent,
    option : document.getElementById("option").textContent,
    };
    localStorage.setItem("panier",JSON.stringify(panier));
    
}
//document.getElementById(button)("click" , setData)





