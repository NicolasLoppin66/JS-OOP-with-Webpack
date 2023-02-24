// Import du style
import '../assets/style.css';

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
     * <div> de detail pour un voiture
     */
    elDetailsPanel;

    /**
     * Titre de la page
     */
    title;

    /**
     * Service pour Car
     */
    CarService;

    /**
     * Démarrage de l'application
     */
    start() {
        console.log('App démarrer ...');

        this.title = 'Store SuperCars';

        // Initialisation du service de donnée
        this.CarService = new CarService();

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

        // Création du <div class="cols">
        const elDivCols = document.createElement('div');
        elDivCols.classList.add('cols');

        // Création de la liste <ul> pour les voitures
        // Stockage dans une propriété de App
        this.elCarList = document.createElement('ul');

        // Création du details <div> pour les voitures
        // Stockage dans une propriété de App
        this.elDetailsPanel = document.createElement('div');

        // Ajout de <ul> et <div> dans <div class="cols">
        elDivCols.append(this.elCarList, this.elDetailsPanel);

        // Ajout du DOM a <body>
        document.body.append(elH1Tag, elDivCols);
    }

    /**
     * Chargement de la liste des voitures
     */
    loadCars() {
        const data = this.CarService.readAll();

        for (let car of data) {
            this.elCarList.append(car.getDOMForList());
        }
    }
}

const app = new App();

export default app;