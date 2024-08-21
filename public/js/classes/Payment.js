export class PaymentDetails {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `I paid to ${this.client} for ${this.details} and amount is  Rs. ${this.amount} `;
    }
}
