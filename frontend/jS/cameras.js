/* affichage des produits camera*/

class Camera {constructor (jsonCamera){
    this.lenses = jsonCamera.lenses;
    this.id = jsonCamera.id;
    this.name = jsonCamera.name;
    this.price = jsonCamera.price/100;
    this.description = jsonCamera.description;
    this.imageUrl = jsonCamera.imageUrl;
    }
};