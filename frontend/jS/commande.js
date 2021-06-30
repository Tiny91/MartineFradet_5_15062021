function getRefOrder() {
    productId = new URL(window.location.href).searchParams.get('id');
    return refOrder;  
}
document.getElementById("reforder").textContent += refOrder