//recuperation des produits choisis 
let productChoice = JSON.parse(localStorage.getItem("panier"));
console.log(productChoice);

    document.getElementById("nom").textContent =  productChoice.nom
    document.getElementById("ref").textContent =  productChoice.ref
    document.getElementById("quantite").textContent= " " + 1
    document.getElementById("prix").textContent = productChoice.prix
    
    //document.getElementById("total").textContent +=  (productChoice.prix) * 1 

    
// *************validation du formulaire**************
let sendOrder = document.getElementById("btn");


sendOrder.addEventListener ("click", function(e){
    e.preventDefault()    
            //validation des champs du formulaire
    for (let input of document.getElementsByClassName("input") )
    {input.reportValidity();
    if(!true){ break}
    }
            // Données à envoyer     
    const contactOrder = {
        firstName : document.getElementById("firstname").value,
        lastName : document.getElementById("name").value,
        email : document.getElementById("email").value,
        address : document.getElementById("adress").value,
        city : document.getElementById("city").value,
        //zipcode : document.getElementById("zipcode").value
    }
    //console.log (contactOrder);

    const products = [productChoice.ref] 
    ;
   //console.log(products)  ; 

    const order = {
    contact : contactOrder,
    products : products, 
    };
    console.log (order);
    
            // envoi des données sur le serveur
            
     const sendData = {
        method: "POST",
         body: JSON.stringify(order),
         headers: {'Content-Type': 'application/json'
         }
     }
     fetch('http://localhost:3000/api/cameras/order',sendData)
        .then((response) => response.json())
        .then((json) => {
            console.log(json.orderId)
            localStorage.removeItem('panier')
            window.location.href = `../html/commande.html?id=${json.orderId}`         
         })
          .catch((error) => {
          alert("Erreur: "+ error)
          })
    

   });
    






 



