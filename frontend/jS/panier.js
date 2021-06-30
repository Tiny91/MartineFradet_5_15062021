
let productChoice = JSON.parse(localStorage.getItem("panier"));
console.log(productChoice);

    document.getElementById("nom").textContent =  productChoice.nom
    document.getElementById("ref").textContent =  productChoice.ref
    document.getElementById("quantite").textContent= " " + 1
    document.getElementById("prix").textContent = productChoice.prix
    document.getElementById("option").textContent = productChoice.option;
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

            let sendData = fetch('http://localhost:3000/api/cameras/order',{
                method: "POST",
                headers: {'Content-Type': 'application/json'
                },
                body: JSON.stringify(order),
            });
            sendData.then(async(response) =>{
                try{
                    console.log(response);
                    let content = await response.json();
                    console.log("content from serveur:");
                    console.log(content);
                }
                catch(e){
                    console.log(e)
                }
            })
    // const sendData = {
    //     method: "POST",
    //     body: JSON.stringify(order),
    //     headers: {'Content-Type': 'application/json'
    //     }
    // }
    // fetch('http://localhost:3000/api/cameras/order',sendData)
    //     .then((response) => response.json())
    //     .then((json) => {
    //         console.log(json)
    //         localStorage.removeItem('panier')
    //         window.location.href = `../html/commande.html?id=${productChoice.option}`         
    //     })
    //     .catch(() => {
    //     alert(error)
    // })
    
   });
    






 



