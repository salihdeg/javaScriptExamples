console.log("Hello JS, I'll conquer you!");

// JS TYPE SAFE DEĞİLDİR!!!!!
// camelCaseing convention'ını kullanır

let dolarDun = 9.2;
let dolarBugun = 9.3;

console.log(dolarDun);

let konutKredileri = [
  "Konut Kredisi",
  "Emlak Konut Kredisi",
  "Kamu Konut Kredisi",
];
console.log(konutKredileri);

console.log("************************");

console.log("<ul>");

for (let i = 0; i < konutKredileri.length; i++) {
  console.log("<li>" + konutKredileri[i] + "</li>");
}

console.log("</ul>");
