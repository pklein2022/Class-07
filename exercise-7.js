function getBudgets(budgets) {
  return budgets.map(item => item.budget).reduce((prev, curr) => prev + curr, 0);
}
getBudgets([
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve", age: 32, budget: 40000 },
  { name: "Martin", age: 16, budget: 2700 },
]); // ➞    65700

getBudgets([
  { name: "John", age: 21, budget: 29000 },
  { name: "Steve", age: 32, budget: 32000 },
  { name: "Martin", age: 16, budget: 1600 },
]); // ➞    62600








//found example code here:  https://www.delftstack.com/howto/javascript/sum-array-of-objects-javascript/
