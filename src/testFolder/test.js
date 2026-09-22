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

const data = [
  {
    id: crypto.randomUUID(),
    url: "https://facebook.com",
    userName: "myaccount",
    password: "asw@123G",
    brandColor: "#ff23AD",
    category: "entertainment",
    brandBackGround: "#FFB8E5",
  },
  {
    id: crypto.randomUUID(),
    url: "https://youtube.com",
    userName: "designer_pro",
    password: "asw@123G",
    brandColor: "#ff23AD",
    category: "entertainment",
    brandBackGround: "#FFB8E5",
  },
  {
    id: crypto.randomUUID(),
    url: "https://youtube.com",
    userName: "designer_pro",
    password: "asw@123G",
    brandColor: "#ff23AD",
    category: "entertainment",
    brandBackGround: "#FFB8E5",
  },
  {
    id: crypto.randomUUID(),
    url: "https://dribbble.com",
    userName: "streamer_123",
    password: "asw@123G",
    brandColor: "#ff23AD",
    category: "entertainment",
    brandBackGround: "#FFB8E5",
  },
];

// search based on name and url
const searchedText = "designer";

// const filtered = data.map((dat) =>
//   dat.filter((da) => da.userName === searchedText),
// );
// console.log(filtered);

// objects dont have a filter method

const filtered = data.filter((dat) =>
  dat.userName.toLowerCase().includes(searchedText),
);
// console.log(filtered);

// function debounce(func, delay = 500) {
//   let timer;
//   return (...args) => {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       func(...args);
//     }, delay);
//   };
// }

// const handleSearch = debounce((query) => {
//   console.log("Searching for:", query);
// }, 500);

// function SearchInput() {
//   return (
//     <input
//       type="text"
//       placeholder="Search..."
//       onChange={(e) => handleSearch(e.target.value)}
//     />
//   );
// }

let counter = 0;

const dataToBeMapped = [
  {
    id: crypto.randomUUID(),
    url: "https://facebook.com",
    userName: "alpha",
    password: "asw@123G",
    brandColor: "#ff23AD",
    category: "entertainment",
    brandBackGround: "#FFB8E5",
    dateOfCreation: new Date(),
    orderOfCreation: counter++,
  },
  {
    id: crypto.randomUUID(),
    url: "https://youtube.com",
    userName: "beta",
    password: "asw@123G",
    brandColor: "#ff23AD",
    category: "entertainment",
    brandBackGround: "#FFB8E5",
    dateOfCreation: new Date(),
    orderOfCreation: counter++,
  },
  {
    id: crypto.randomUUID(),
    url: "https://youtube.com",
    userName: "gamma",
    password: "asw@123G",
    brandColor: "#ff23AD",
    category: "entertainment",
    brandBackGround: "#FFB8E5",
    dateOfCreation: new Date(),
    orderOfCreation: counter++,
  },
  {
    id: crypto.randomUUID(),
    url: "https://youtube.com",
    userName: "delta",
    password: "asw@123G",
    brandColor: "#ff23AD",
    category: "entertainment",
    brandBackGround: "#FFB8E5",
    dateOfCreation: new Date(),
    orderOfCreation: counter++,
  },
];
const filteredDateAscending = [...dataToBeMapped].sort(
  (a, b) => b.orderOfCreation - a.orderOfCreation,
);
const nameAscending = [...dataToBeMapped].sort((a, b) => {
  const nameA = a.userName.toLowerCase();
  const nameB = b.userName.toLowerCase();
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});
const nameDescending = [...dataToBeMapped].sort((a, b) => {
  const nameA = a.userName.toLowerCase();
  const nameB = b.userName.toLowerCase();
  if (nameA > nameB) return -1;
  if (nameA < nameB) return 1;
  return 0;
});

console.log(nameDescending);

// date, name, ascending and
console.log("");
console.log("");

// THis is one way of doing things

// const filteredbydateAscending = dataToBeMapped.sort((a, b) => {
//   return a.orderOfCreation - b.orderOfCreation;
// });
// const filteredbydateDescending = dataToBeMapped.sort((a, b) => {
//   return b.orderOfCreation - a.orderOfCreation;
// });

// const filteredbynameAscending = dataToBeMapped.sort((a, b) => {
//   return a.userName - b.userName;
// });
// const filteredbynameDescending = dataToBeMapped.sort((a, b) => {
//   return b.userName - a.userName;
// });

// console.log(
//   filteredbydateAscending,
//   filteredbydateDescending,
//   // filteredbynameAscending,
//   // filteredbynameDescending,
// );

const url = "https://hulu.com/";
// const replaced = url.replace(url.charAt(url.lastIndexOf("/")), "");  even this stupid shit means that replace is moving the first / that it encounters
const replaced = url.slice(url.indexOf("/") + 2, url.indexOf("."));
console.log(replaced);
const firstTwo = url.slice(url.indexOf("/") + 2, url.indexOf("/") + 4);
console.log(firstTwo);
