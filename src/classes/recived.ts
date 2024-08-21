import { HasFormatter } from '../interfaces/HasFormatter.js';

export class Recived implements HasFormatter{
    constructor(readonly client:string,
                private details: string,
                public amount : number
    ){}
    format(){
        return `I paid to ${this.client} for ${this.details} and amount is  Rs. ${this.amount} `
    }
}