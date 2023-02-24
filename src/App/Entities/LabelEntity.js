// Une class comment en PHP
// pas de besoin de typage
export class LabelEntity {
    id;
    label;

    constructor(jsonData) {
        this.id = jsonData.id;
        this.label = jsonData.label;
    }
}