//recuperation des produits choisis 
let shopping = JSON.parse(localStorage.getItem("shopping"));
console.log(shopping);

shoppingDisplay();

function shoppingDisplay(){ 
     document.querySelector(".produit").innerHTML = shopping.map((product) =>` 
                <tr>
                    <th class="ref">${product.ref}</th>
                    <td class ="nom">${product.nom}</td>
                    <td class="prix">${product.prix}</td>
                    <td class="quantite">1</td>
                </tr>`            
     )
     .join("");
     document.getElementById("total").textContent +=  document.querySelectorAll(".prix").value            
};
         
    
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

    const products = Object.values(shopping).map((product) => {return product.ref}
    );
   console.log(products)  ; 

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
            localStorage.removeItem('shopping')
            window.location.href = `../html/commande.html?id=${json.orderId}`         
         })
          .catch((error) => {
          alert("Erreur: "+ error)
          })
    

   });
    