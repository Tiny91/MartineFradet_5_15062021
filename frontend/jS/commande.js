//recuperation de l'orderId dans l'URL
function getOrderId() {
    orderId = new URL(window.location.href).searchParams.get('id');
    //return orderId; 
    console.log("orderId") 
}

getOrderId();
 document.getElementById("orderid").innerHTML +=
 `Nous vous remercions pour votre commande, elle porte le numero ${orderId}`