// Anagram Checker
function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const sortedStr1 = str1.toLowerCase().split('').sort().join('');
  const sortedStr2 = str2.toLowerCase().split('').sort().join('');
  return sortedStr1 === sortedStr2;
}
const p=isAnagram("listen", "silent");
console.log(p);

// Counter using setInterval
let counter1=1;
function callback(){
  console.log(counter);
  counter++;
  if(counter>5){
    
  }
}
setInterval(callback,1000);

// Counter using setTimeout
let counter2=1;
function callback(){
  console.log(counter);
  counter++;
  setTimeout(callback,1000);
}
setTimeout(callback,1000);

// Expenditure analysis
function calculateTotalSpentByCategory(transactions) {
  const categories = {};
  transactions.forEach((transaction) => {
    if (!categories[transaction.category]) {
      categories[transaction.category] = 0;
    }
    categories[transaction.category] += transaction.price;
  });
  return Object.keys(categories).map((category) => ({
    category,
    totalSpent: categories[category],
  }));
}
const transactions = [
  { item: "Burger", category: "Food", price: 200 },
  { item: "Pizza", category: "Food", price: 300 },
  { item: "Jeans", category: "Clothes", price: 200 }
];

console.log(calculateTotalSpentByCategory(transactions));