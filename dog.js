let n = +prompt("Input number of syllables: ");
let syllables = ["ні", "це", "ку", "то", "ро", "па", "мі", "кі"];
let dogname = "";
let rand;
for (let i = 0; i < n; i++) {
  rand = Math.floor(Math.random() * syllables.length);
  dogname += syllables[rand];
}
alert(dogname);
