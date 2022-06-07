const SELLER = "Dalida";
const SECOND_SELLER = "Aidana";
const NAME = "Dalida's coffeeshop";
const BADGE = `Name: ${SELLER}`;

let employees = 2;
let shopIsClosed = false;

let customer = "Zhibek";

let coffee = {
  name: "latte",
  price: 900,
  syrup: ["vanilla", "caramel", "hazelnut", "chocolate"],
  with_alternative_milk: true
};

// adding and deleting properties
coffee.sweet = "true";
delete coffee.sweet;

if (900 == "900")
  if (900 === "900")
    // alert("Yes, coffee costs 900");
    alert("It's 900");
// else alert("No, coffee doesn't cost '900'");

let s = "sweet";
coffee[s] = "true";
delete coffee.sweet;

coffee.print = function () {
  console.log(this.name + ": " + this.price);
};
coffee.print();

// looping properties
for (let prop in coffee) {
  console.log(prop);
}

let snacks = ["cookies", "sandwich", "chocolate", "donuts"];
console.log(snacks.length);
let ice_coffee = ["ice_latte", "frappuccino"];

let lastSnack = null;
snacks.push("pie"); // ["cookies", "sandwich", "chocolate", "donuts", "pie"]
snacks.pop(); // ["cookies", "sandwich", "chocolate", "donuts"]
lastSnack = snacks.pop(); // ["cookies", "sandwich", "chocolate"]
// alert(lastSnack);

let some_snack = lastSnack ?? "sandwich";
// alert(some_snack);

ice_coffee.unshift("iced_caramel_macchiato"); // ["iced_caramel_macchiato","ice_latte", "frappuccino"]
ice_coffee.shift(); // ["ice_latte", "frappuccino"]
let firstIceCoffee = ice_coffee.shift(); // ["frappuccino"]

let selectCoffee = 2 > 1 ? "latte" : "cappuccino";
// alert(selectCoffee);

let menu = snacks.concat(ice_coffee);

snacks = [
  "cookie",
  "donut",
  "sandwich",
  "donut",
  "chocolate",
  "donut",
  "sandwich"
];
let donuts = snacks.filter((snack) => snack === "donut"); // ["donut", "donut", "donut"]

// let somecoffee = coffee.map(function(cof) {
// return cof.NAME;
// });

let sn = snacks.map((s) => s + "!");
// alert(sn);

const { firstName, lastName, ...otherInfo } = {
  name: "Dalida",
  companyName: "Dalida's coffeeshop",
  profession: "seller",
  gender: "Female"
};
// alert(otherInfo);

const drinks = ["coffee", "tea", "cocoa", "hot chocolate"];
const aboutMenu = ["Menu contains ", ...drinks, "What would you like to have?"];
console.log(aboutMenu);

function show(name, price) {
  console.log(`${name} costs ${price}tg`);
}

let countSnacks = () => snacks.length;
let canGetSnacks = (sn) => snacks.includes(sn);

export { countSnacks, canGetSnacks };
import { countSnacks, canGetSnacks } from "./export.js";

countSnacks();
canGetSnacks("donut");
