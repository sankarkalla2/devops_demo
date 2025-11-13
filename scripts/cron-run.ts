import smallest from "smallest";
console.log("started");

const DB_URL = process.env.DB_URL;

console.log(DB_URL, "url of db");

console.log(smallest(1, 2, 3, 10, -1, 2, -10), "is smallest one");
