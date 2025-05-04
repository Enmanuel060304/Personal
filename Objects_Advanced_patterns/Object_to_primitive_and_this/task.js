let subscription = {
    service: "music",
    month: 6,
    pricePerMonth: 12.5,
    // Implement the valueOf() method here
    valueOf(){
        return this.month * this.pricePerMonth;
    }
}

let budget = 1000;
budget -= subscription.valueOf();
// should print: "Available budget: 925"
console.log("Available budget: " + budget);
