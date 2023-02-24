// Import de class
import { LabelEntity } from "./LabelEntity";

// Brand hérite de LabelEntity
export class Brand extends LabelEntity {
    // Déclaration de méhode public
    getGhettoLabel() {
        return this.label + " wesh !";
    }
}