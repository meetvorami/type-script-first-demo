import { ListTemplate } from './classes/listTemplates.js';
import { PaymentDetails } from './classes/Payment.js';
import { Recived } from './classes/recived.js';
let payments = [];
payments.forEach(pays => {
    console.log(pays.format());
});
const form = document.querySelector('.new-item-form');
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const ul = document.querySelector("ul");
const total_paid_amount = document.querySelector("#total-paid-amount");
const total_recieved_amount = document.querySelector("#total-recieved-amount");
const total_spend = document.querySelector("#total-spend");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value == "paid") {
        doc = new PaymentDetails(tofrom.value, details.value, amount.valueAsNumber);
        total_paid_amount.textContent = String(parseInt(total_paid_amount.innerHTML) + parseInt(amount.value));
    }
    else {
        doc = new Recived(tofrom.value, details.value, amount.valueAsNumber);
        total_recieved_amount.innerHTML = String(parseInt(total_recieved_amount.innerHTML) + parseInt(amount.value));
    }
    total_spend.innerHTML = String(parseInt(total_paid_amount.innerHTML) - parseInt(total_recieved_amount.innerHTML));
    list.render(doc, type.value);
});
