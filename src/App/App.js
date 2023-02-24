// Import de class
import { Car } from "./Entities/Car";

// Import du service
import { CarService } from "./Services/CarService";

class App {
    /**
     * <ul> Pour la list des voitures
     */
    elCarList;

    /**
     * Titre de la page
     */
    title;

    /**
     * Démarrage de l'application
     */
    start() {
        console.log('App démarrer ...');

        this.title = 'Store SuperCars';

        this.domInit();
        this.loadCars();
    }

    /**
     * Prépare le DOM de la page
     */
    domInit() {
        // MAJ du <title> de la page
        document.title = this.title;

        // Création du titre <h1>
        const elH1Tag = document.createElement('h1');
        elH1Tag.textContent = this.title;

        // Création de la liste <ul> pour les voitures
        // Stockage dans une propriété de App
        this.elCarList = document.createElement('ul');

        // Ajout du DOM a <body>
        document.body.append(elH1Tag, this.elCarList);
    }

    /**
     * Chargement des données des voitures
     */
    loadCars() {
        const service = CarService();
        let cars = service.readAll();
        console.log(cars);

        let car5 = service.readById(5);
        console.log(car5);
    }
}

const app = new App();

export default app;