import { Wookie } from "./wookie";

export class Selfie {
    image!: string;
    wookie!: Wookie;
    titre!:string;
    id!:number|null;

    constructor() {
        this.wookie = new Wookie();
    }
}
