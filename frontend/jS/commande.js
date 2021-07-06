//recuperation de l'orderId dans l'URL

function getOrderId() {
    orderId = new URL(window.location.href).searchParams.get('id');
}

getOrderId();

document.getElementById("orderid").innerHTML += ` Votre identifiant de commande est le : <strong> ${orderId}</strong>`