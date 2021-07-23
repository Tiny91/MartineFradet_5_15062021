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
 
    // Vider le panier//
 let clearShopping = document.getElementById("clear");

 clearShopping.addEventListener ("click",function(){
    document.querySelector(".produit").innerHTML = "";
    document.getElementById("total").innerHTML = "Total :" ;
    localStorage.removeItem('shopping');
    localStorage.removeItem("total")
 });


// *************validation et envoi du panier avec le formulaire*************
let sendOrder = document.getElementById("btn");

sendOrder.addEventListener ("click", function(e){
    e.preventDefault();
        //validation des champs du formulaire
        let firstName = document.getElementById("firstname").value;
        let lastName = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let address = document.getElementById("adress").value;
        let city =  document.getElementById("city").value;
        let zipCode = document.getElementById("zipcode").value;
        let mailReg = /^[a-zA-Z09.-_]+[@]{1}[a-zA-Z09.-_]+[.]{1}[a-zA-Z]+$/;
        let erreurMail = document.querySelector(".mailerror");
        let zipReg = /^[0-9]{5}$/;
        let erreurCode = document.querySelector(".ziperror");
        let erreur = document.querySelector(".error");

        if(!mailReg.test(email)){
            erreurMail.innerHTML ="email invalide";        
        }
        else{erreurMail.innerHTML =""}

        if(!zipReg.test(zipCode)){
            erreurCode.innerHTML ="code postal erroné";        
        }
        else{erreurCode.innerHTML = ""}

        if(! (firstName.length > 1
        && lastName.length > 1
        && mailReg.test(email)
        && address.length > 0
        && zipReg.test(zipCode)
        && city.length > 1)){
            erreur.innerHTML = "Merci de remplir chaque champ comme indiqué avant le règlement"
            return
        }
        else{erreur.innerHTML = "" }
        

        // Données à envoyer     
    const contactOrder = {
        firstName : firstName,
        lastName : lastName,
        email : email,
        address : address,
        city : zipCode +" "+ city,
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
    
      let fet= fetch('http://localhost:3000/api/cameras/order', sendData)
          .then((response) => response.json())
          .then((json) => {
                console.log(json.orderId)
                // lien vers la page de confirmation de commande
                window.location.href = `../html/commande.html?ref=${json.orderId}` 
          })
          .catch((error) => {
              alert("Erreur:" + error)
          }) 
});
