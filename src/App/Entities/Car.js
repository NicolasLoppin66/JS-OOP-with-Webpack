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

    // ### Pour la demo de get et set
    // Propriété privé
    // #paint;

    // get color() {
    //     return this.#paint;
    // }

    // set color(val) {
    //     console.log(`Tu veux une voiture ${val}, bien tu l'auras en violet :P`);
    //     this.#paint = 'violet'
    // }
    // ###

    // Surcharge du construteur parent
    constructor(jsonData) {
        // Appelle du constructeur parent(PHP: Parent::__construct())
        // En JS c'est obligatoire de déclarer le constructeur parent
        super(jsonData);

        this.brand_id = jsonData.brand_id;
        this.brand = new Brand(jsonData.brand);
        this.price = jsonData.price;

        // this.#paint

        Car.counter++;
    }

    // Déclaration de méthode static
    static count() {
        return `${Car.counter} Car sont sorties d'usine`;
    }

    getTaxePrice() {
        return this.price * 1.2;
    }
}