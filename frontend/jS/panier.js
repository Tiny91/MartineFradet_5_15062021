
let productChoice = JSON.parse(localStorage.getItem("panier"));
console.log(productChoice);

    document.getElementById("nom").textContent +=  productChoice.nom
    document.getElementById("ref").textContent +=  productChoice.ref
    //document.getElementById("quantité").textContent += " " + 1
    document.getElementById("prix").textContent += productChoice.prix
    document.getElementById("option").textContent += productChoice.option;

    
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
        firstname : document.getElementById("firstname").value,
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        adress : document.getElementById("adress").value,
        city : document.getElementById("city").value,
        zipcode : document.getElementById("zipcode").value
    }
    //console.log (contactOrder);
    const productOrder = Object.values(productChoice);
    //console.log(productOrder)  ;     
    const order = {
    contact : contactOrder,
    panier : productOrder, 
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
        .then(res => res.json())
        .then(res => console.log(res));
    
   });
    






 



