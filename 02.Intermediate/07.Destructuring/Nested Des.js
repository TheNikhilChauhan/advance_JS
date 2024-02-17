const songs = [
  { name: "abc", singer: "abc" },
  { name: "def", singer: "def" },
  { name: "ghi", singer: "ghI" },
];

const [, , { singer: s }] = songs;
console.log(s);

const data = {
  user: {
    id: 123,
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    address: {
      city: "New York",
      country: "USA",
    },
    hobbies: ["Reading", "Painting", "Cooking"],
    scores: {
      math: 95,
      science: 88,
      history: 75,
    },
  },
  products: [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Tablet", price: 500 },
  ],
  settings: {
    darkMode: true,
    notifications: {
      email: true,
      sms: false,
      push: true,
    },
    language: "English",
  },
};

const {
  user: {
    name,
    age,
    address: { city, country },
    hobbies,
    scores: { math, science, history },
    email,
  },
  products: [product1, product2, product3],
  settings: {
    darkMode,
    notifications: { email: emailNotify, sms: smsNotify, push: pushNotify },
    language,
  },
} = data;

console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`Address: ${city}, ${country}`);
console.log(`Hobbies: ${hobbies}`);
console.log(
  `Scores: Math Score: ${math}, Science Score: ${science}, History Score: ${history}`
);
console.log(`Email: ${email}`);
console.log(
  `Product1: ${product1.name}- $${product1.price}, Product2: ${product2.name}- $${product2.price}`
);
console.log(`DarkMode: ${darkMode}`);
console.log(`Email Notification: ${emailNotify}`);
console.log(`SMS Notification: ${smsNotify}`);
console.log(`Push Notification: ${pushNotify}`);
console.log(`Language: ${language}`);
