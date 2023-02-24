// Import de class
import { Brand } from "./Brand";
import { LabelEntity } from "./LabelEntity";

// Car hérite de LabelEntity
export class Car extends LabelEntity {
    // Déclaration des propriété static
    static counter = 0;

    // Déclaration des propriété public
    brand_id;
    brand;
    price;

    // Surcharge du construteur parent
    constructor(jsonData) {
        // Appelle du constructeur parent(PHP: Parent::__construct())
        // En JS c'est obligatoire de déclarer le constructeur parent
        super(jsonData);

        this.brand_id = jsonData.brand_id;
        this.brand = new Brand(jsonData.brand);
        this.price = jsonData.price;

        Car.counter++;
    }

    // Déclaration de méthode static
    static count() {
        return `${Car.counter} Car sont sorties d'usine`;
    }

    /**
     * Méthode pour récupérer le prix taxé
     * @returns price
     */
    getTaxePrice() {
        return this.price * 1.2;
    }

    /**
     * HTML pour la liste
     */
    getDOMForList() {
        const elLi = document.createElement('li');
        elLi.innerText = `${this.brand.label} - ${this.price.toString().replace('.', ',')} €`;

        return elLi;
    }
}