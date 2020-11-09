'use strict'
// маленький гамбургер с начинкой из сыра
class Hamburger {
    constructor(name, stuffing) {
        // this.price = name.price + stuffing.price;
        // this.calories = name.calories + stuffing.calories;
        this.price = name.price;
        this.calories = name.calories;
        this.stuffing = stuffing;
    }

    static sizeSmall = {
        price: 50,
        calories: 20,
    };

    static sizeBig = {
        price: 100,
        calories: 40,
    };

    static stuffings = {
        cheese: {price: 10, calories: 20},
        salad: {price: 20, calories: 5},
        potato: {price: 15, calories: 10},
    };

    static toppings = {
        sauce: {price: 15, calories: 0},
        mayo: {price: 20, calories: 5},
    };

     static addStuffing(item) {
         let stuffing = Hamburger.stuffings[item];
         this.stuffing = stuffing;
         this.stuffing.price = stuffing.price;
         this.stuffing.calories = stuffing.calories;

         return this.stuffing;
    }

    // addStuffing(item) {
    //     let stuffing = Hamburger.stuffings[item];
    //     // console.log(this.stuffings[item]);
    //     this.stuffing = stuffing;
    //     this.stuffing.price = stuffing.price;
    //     this.stuffing.calories = stuffing.calories;
    //     // return this.stuffings['item'];
    //     return this.stuffing;
    // }

    addTopping(item) {
        let topping = {[item]: Hamburger.toppings[item],};
        this.topping = topping;
        // this.topping.price = item.price;
        // this.topping.calories = item.calories;
        // topping.item.price = Hamburger.toppings[item].price;
        // topping.item.calories = Hamburger.toppings[item].calories;
        const sumToppings = {price: 0, calories: 0};
        sumToppings.price = sumToppings.price + topping[item].price;
        sumToppings.calories = sumToppings.calories + topping[item].calories;

        return sumToppings;
    }

    calculatePrice() {
        if (this.price === 0) {
            this.price = this.price + name.price;
        } else if (this.stuffing.item) {
            this.price = this.price + this.stuffing.price;
        } else if (this.topping.item.price) {
            this.price = this.price + this.topping.item.price;
        }

        this.price = name.price + this.stuffing.price + this.topping.sumToppings.price;

        return this.price;
    }

    calculateCalories() {
        if (this.stuffing) {
            this.calories = this.calories + this.stuffing.calories;
        } else if (this.topping) {
            this.calories = this.calories + this.topping.calories;
        }

        return this.calories;
    }
}

var hamburger = new Hamburger(Hamburger.sizeSmall, Hamburger.addStuffing('cheese'));
console.log('hamburger = ', hamburger);
// var hamburger2 = new Hamburger(Hamburger.sizeBig, Hamburger.addStuffing('salad'));
// console.log('hamburger2 = ', hamburger2);
// var hamburger3 = new Hamburger(Hamburger.sizeSmall, Hamburger.addStuffing('potato'));
// console.log('hamburger2 = ', hamburger3);

// добавка из майонеза
hamburger.addTopping('mayo');
// спросим сколько там калорий
console.log('Calories: '  + hamburger.calculateCalories());
// console.log('Calories: '  + hamburger2.calculateCalories());
// console.log('Calories: '  + hamburger3.calculateCalories());

// сколько стоит
console.log('Price: '  + hamburger.calculatePrice());
// я тут передумал и решил добавить еще приправу
hamburger.addTopping('sauce');
// А сколько теперь стоит?

console.log('Price with sauce: ' + hamburger.calculatePrice());