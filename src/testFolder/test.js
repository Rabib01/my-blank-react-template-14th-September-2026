// let initialArtists = [
//   { id: 0, name: "Marta Colvin Andrade" },
//   { id: 1, name: "Lamidi Olonade Fakeye" },
//   { id: 2, name: "Louise Nevelson" },
// ];

// console.log(initialArtists.filter((artist) => artist.id !== 1));

const password = "aw@123GF92B@";
const hiddenPassword = password.padStart(password.length, "*");
console.log(hiddenPassword);

// wtf - i cant do this with padStart ?
const newString = password
  .split("")
  .map((letter) => "*")
  .join("");

console.log(newString);

const neoStr = [];
// i can also use a for loop and turn everything to *
for (let i = 0; i < password.length; i++) {
  neoStr.push("*");
}
console.log(neoStr.join(""));

//what fucking string method is there to convert all of this into a string ? ?
//  what the fuck, so stupid I am ::
const stupid = "*".repeat(password.length);
console.log(stupid);

const datu = "https://spotify.com";
const abbreviated = datu.slice(
  datu.lastIndexOf("/") + 1,
  datu.lastIndexOf("/") + 3,
);
console.log(abbreviated);
