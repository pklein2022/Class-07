function sortDrinkByPrice(drinks) {
  return drinks.sort(function (a, b) {
    // return a.price - b.price;  sorts in ascending order
    return b.price - a.price;
  });
}
const drinks = [
  { name: "lemonade", price: 50 },
  { name: "lime", price: 10 },
  { name: "carrot", price: 34 },
];
sortDrinkByPrice(drinks);

//expected order: lime, carrot, lemonade for ascending order
//expected order: lemonade, carrot, lime for descending order
