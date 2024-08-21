import { ListTemplate } from './classes/listTemplates.js';
import {PaymentDetails} from './classes/Payment.js'
import {Recived} from './classes/recived.js'

import { HasFormatter } from './interfaces/HasFormatter.js';



let payments: PaymentDetails[] = [];



payments.forEach(pays =>{
    console.log(pays.format());
});


const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;

const details = document.querySelector("#details") as HTMLInputElement;

const amount = document.querySelector("#amount") as HTMLInputElement;

const ul = document.querySelector("ul")!;

const total_paid_amount = document.querySelector("#total-paid-amount")!;

const total_recieved_amount = document.querySelector("#total-recieved-amount")!;

const total_spend = document.querySelector("#total-spend")!;


const list = new ListTemplate(ul);

form.addEventListener("submit",(e:Event)=>{
    e.preventDefault()
    let doc: HasFormatter;

    if (type.value == "paid"){
        doc = new PaymentDetails(tofrom.value,details.value,amount.valueAsNumber);
        total_paid_amount.textContent  = String(parseInt(total_paid_amount.innerHTML) + parseInt(amount.value));
    }else{
        doc = new Recived(tofrom.value,details.value,amount.valueAsNumber);
        total_recieved_amount.innerHTML = String(parseInt(total_recieved_amount.innerHTML) + parseInt(amount.value))
    }
    total_spend.innerHTML = String(parseInt(total_paid_amount.innerHTML)-parseInt(total_recieved_amount.innerHTML));
    list.render(doc,type.value);

});