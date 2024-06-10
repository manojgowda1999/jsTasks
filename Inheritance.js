class Item {
    constructor(title, cost) {
        this.title = title;
        this.cost = cost;
    }

    showDetails() {
        console.log(`${this.title}: ₹${this.cost}`);
    }
}

class Gadget extends Item {
    constructor(title, cost, guarantee) {
        super(title, cost);
        this.guarantee = guarantee;
    }

    showDetails() {
        super.showDetails();
        console.log(`Guarantee: ${this.guarantee} years`);
    }
}

let tablet = new Gadget('Tablet', 32000, 2);
let smartwatch = new Gadget('Smartwatch', 15000, 1);

tablet.showDetails();
smartwatch.showDetails();
// output  Tablet: ₹32000
// Guarantee: 2 years
// Smartwatch: ₹15000
 // Guarantee: 1 years
