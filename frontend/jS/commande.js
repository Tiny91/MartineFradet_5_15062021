//recuperation de l'orderId dans l'URL
function getOrderId() {
    orderId = new URL(window.location.href).searchParams.get('id');
     
}

getOrderId();
 document.getElementById("orderid").innerHTML +=
 `Nous vous confirmons la réception de votre commande pour un total de <strong></strong> ....</br>
 <div>Votre commande porte le numéro <strong> ${orderId}</strong></div>`