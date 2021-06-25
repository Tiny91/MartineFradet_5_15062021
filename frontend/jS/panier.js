
let panier = JSON.parse(localStorage.getItem("panier"));
console.log(panier);

    document.getElementById("nom").textContent += " " + panier.nom
    document.getElementById("ref").textContent += " " + panier.ref
    document.getElementById("quantité").textContent += " " + 1
    document.getElementById("prix").textContent += " " + panier.prix
    document.getElementById("option").textContent += " " + panier.option;

    
// *************validation du formulaire**************
let validBtn = document.getElementById("btn");


validBtn.addEventListener ("click", function(){
    for (let input of document.getElementsByClassName("input") )
    {input.reportValidity();
    if(!true){
        break}
    }
    //alert ("commande envoyée")
})






const sendOrder = async()=>{  
await fetch("http://localhost:3000/api/cameras/order", {
	    method: "POST",
	    headers: { 
            'Accept': 'application/json', 
            'Content-Type': 'application/json' 
        },
	    body: JSON.stringify(jsonBody)
    })
        .then(function(res) {
        if (res.ok) {
        return res.json();
        }
    })
        .then

    
}
