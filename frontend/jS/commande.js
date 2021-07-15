
//récupération du montant total de la commande

let total = JSON.parse(localStorage.getItem("total"));
document.getElementById("total").innerHTML += `Nous vous confirmons la réception de votre commande pour un montant de <strong> ${total}€</strong>. <br/>Elle sera traitée dans les meilleurs délais.`;


//recuperation de l'orderId dans l'URL

function getOrderId() {
    orderId = new URL(window.location.href).searchParams.get('ref');
}
getOrderId();

document.getElementById("orderid").innerHTML += ` Votre identifiant de commande est le : <strong> ${orderId}</strong>`