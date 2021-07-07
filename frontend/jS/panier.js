// Affichage du panier , des coordonnées et commande

    //recuperation des produits choisis 
let shopping = JSON.parse(localStorage.getItem("shopping"));
console.log(shopping);

// ***************Affichage du panier***************
shoppingDisplay();

function shoppingDisplay(){ 
     document.querySelector(".produit").innerHTML = shopping.map((product) =>` 
        <tr>
            <th class="ref">${product.ref}</th>
            <td class ="nom">${product.nom}</td>
            <td class="prix">${product.prix}</td>
            <td class=" text-right quantite">1</td>
        </tr>`            
     )
     .join("");                
};

    // Calcul et affichage prix total
totalPrice();

function totalPrice(){
    const stringPrix = Object.values(shopping).map((product) =>{
        return product.prix});
    //console.log(stringPrix);
    let prix = stringPrix.map(function(x){
        return parseInt(x,10) } );
    //console.log(prix);
    const ajoutPrices = (accumulator,currentValue)=> accumulator + currentValue;
    let total = prix.reduce(ajoutPrices)
    document.getElementById("total").innerHTML += " " + total + "€"
    localStorage.setItem("total",JSON.stringify(total))
};


// *************validation et envoi du panier avec le formulaire*************
let sendOrder = document.getElementById("btn");

sendOrder.addEventListener ("click", function(e){
        //validation des champs du formulaire
    let form = document.getElementById("contact");
    if (form.checkValidity() === false){
        e.preventDefault();
        e.stopPropagation();
    return alert("merci de remplir chaque champ du formulaire comme indiqué")
    }

        // Données à envoyer     
    const contactOrder = {
        firstName : document.getElementById("firstname").value,
        lastName : document.getElementById("name").value,
        email : document.getElementById("email").value,
        address : document.getElementById("adress").value,
        city : document.getElementById("zipcode").value +" "+ document.getElementById("city").value,
    }
    const products = Object.values(shopping).map((product) => {
        return product.ref}
    );
    
    const order = {
        contact : contactOrder,
        products : products, 
    };
    console.log (order);
    
            // ******envoi des données sur le serveur*******
            
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
            // suppression des données dans le localstorage
            localStorage.removeItem('shopping')
            // lien vers la page de confirmation de commande
           window.location.href = `../html/commande.html?id=${json.orderId}` 
        })
        .catch((error) => {
            alert("Erreur:" + error)
        })  
});
